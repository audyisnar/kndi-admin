// import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";

// const EditNews = () => {
//   return (
//     <div>
//         <Sidebar />
//         <div className="md:ml-64">
//             <div className="mt-8 px-6 md:px-8 h-auto">
//                 <button>Kembali</button>
//                 <div className="container mt-4 bg-secondary-500 mx-auto max-w-full">
//                     <div>
//                         Ini Halaman Edit Berita
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default EditNews;





import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import QuillEditor from "./components/QuillEditor";
import QuillEditorEn from "./components/QuillEditorEn";
import { NEWS } from "../utils/Url";
import { logout, getToken } from '../utils/Auth';
import axios from 'axios';

const EditNews = () => {
    const history = useHistory();
    const { id } = useParams();

    const [urlThumbnail, setUrlThumbnail] = useState("");
    const [titleId, setTitleId] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [contentId, setContentId] = useState("");
    const [files, setFiles] = useState([]);
    const [contentEn, setContentEn] = useState("");
    const [filesEn, setFilesEn] = useState([]);

    useEffect(() => {
        async function getNewsId() {
            try{
                const tokenRespon = await getToken();
                if(tokenRespon === 400){
                    alert("Authentifikasi Gagal, Silahkan Login Kembali");
                    logout();
                    history.replace("/");
                } else{
                    const newsRespon = await axios.get(NEWS + id, {
                        headers: { Authorization: `Bearer ${tokenRespon}`}
                    });
                    setTitleId(newsRespon.data.contents[0].title);
                    setTitleEn(newsRespon.data.contents[1].title);
                    //setContentId(newsRespon.data.contents[0].data);
                    onEditorChange(newsRespon.data.contents[0].data);
                    //setApiData(newsRespon.data.contents);
                    console.log(contentId);
                    console.log(newsRespon.data);
                    //console.log(newsRespon.data.contents[0].data);
                }                
            } catch(err){
                console.log(err);
            }
        };
        getNewsId();
    },[]);
        // axios
        //     .get(RECIPES + id, config)
        //     .then((res) => {
        //         console.log(res);
        //         console.log(res.data);
        //         console.log(res.data[0].cholesterol);
        //         setPublishDate(res.data[0].publish_date);
        //         setName(res.data[0].name);
        //         setMadeBy(res.data[0].made_by);
        //         setCategory(res.data[0].category);
        //         setCalory(res.data[0].total_calory);
        //         setEater(res.data[0].total_eater);
        //         setDuration(res.data[0].duration);
        //         setLevel(res.data[0].level_of_difficult);
        //         setCompositions(res.data[0].compositions);
        //         setSteps(res.data[0].steps_of_make);
        //         setDescription(res.data[0].short_description);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     }); 

    const onEditorChange = (value) => {
        console.log("value : ", value)
        setContentId(value)
    }

    const onFilesChange = (files) => {
        setFiles(files)
    }

    const onEditorChangeEn = (value) => {
        setContentEn(value)
        console.log(contentEn)
    }

    const onFilesChangeEn = (files) => {
        setFilesEn(files)
    }

    async function handleUploadChange(e){
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        console.log(uploaded);
        let formData = new FormData();
        formData.append("file", uploaded);
        try {
            const tokenRespon = await getToken();
            if(tokenRespon === 400){
                alert("Authentifikasi Gagal, Silahkan Login Kembali");
                logout();
                history.replace("/");
            } else{
                const uploadRespon = await axios.post(NEWS + "uploadthumbnail", formData, {
                    headers: { Authorization: `Bearer ${tokenRespon}`}
                });
                console.log("Upload Thumbnail Sukses");
                setUrlThumbnail(uploadRespon.data.url);
            }
        } catch (err) {
            console.error("Upload Thumbnail Error");
            console.error(err);
        }
    }

    const onSubmit = async () => {
        //setContent("");
        //setContentEn("");
        try{
            const tokenRespon = await getToken();
            if(tokenRespon === 400){
                alert("Authentifikasi Gagal, Silahkan Login Kembali");
                logout();
                history.replace("/");
            } else{
                const dataNews = [
                    {   title: titleId, languageCode: "id", data: contentId },
                    {   title: titleEn, languageCode: "en", data: contentEn }
                ];

                const variables = {
                    thumbnailURL: urlThumbnail,
                    contents: dataNews
                }

                const postingRespon = await axios.post(NEWS, variables, {
                    headers: { Authorization: `Bearer ${tokenRespon}`}
                });
                console.log(postingRespon.data);
                alert("Berita berhasil disimpan!");
                history.replace('/berita');
            }
        } catch(err){
            console.log(err);
            alert("Berita gagal disimpan!");
        }
    }

    return (
        <div>
            <Sidebar />
            <div className="md:ml-64">
                <div className="mt-8 px-6 md:px-8 h-auto">
                    <div className="container mt-4 mb-10 mx-auto max-w-full">
                        <div className="mt-4 mb-10 p-14 bg-white shadow-xl space-y-10 rounded-xl mx-auto max-w-full">
                            <div className="space-y-4">
                                <label className="text-netral text-md font-semibold tracking-wide" for="gambar">Upload Thumbnail</label><br/>
                                <input type="file" name="thumbnail" onChange={handleUploadChange}/>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-center bg-blue h-10 rounded-t-3xl">
                                    <p className="text-white font-semibold text-netral text-md tracking-wide">Form Input Bahasa Indonesia</p>
                                </div>
                                <div>
                                    <label className="text-netral text-sm font-semibold tracking-wide">Judul Berita</label><br/>
                                    <input type="text" name="title" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-grey-300 focus:outline-none" placeholder="Judul Berita"
                                        value={titleId} onChange={(e) => setTitleId(e.target.value)}
                                    />
                                </div>  
                                <QuillEditor
                                    placeholder={"Mulai Posting Berita!"}
                                    onEditorChange={onEditorChange}
                                    onFilesChange={onFilesChange}
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-center bg-blue h-10 rounded-t-3xl">
                                    <p className="text-white font-semibold text-netral text-md tracking-wide">Form Input Bahasa Inggris</p>
                                </div>
                                <div>
                                    <label className="text-netral text-sm font-semibold tracking-wide">Title News</label><br/>
                                    <input type="text" name="title" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-grey-300 focus:outline-none" placeholder="Title News"
                                    value={titleEn} onChange={(e) => setTitleEn(e.target.value)}
                                    />
                                </div>  
                                <QuillEditorEn
                                    placeholder={"Start Posting News!"}
                                    onEditorChangeEn={onEditorChangeEn}
                                    onFilesChangeEn={onFilesChangeEn}
                                />
                            </div>
                            <button className="bg-blue rounded-md text-white py-2 px-4" onClick={onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditNews;

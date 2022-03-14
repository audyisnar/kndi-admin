import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import QuillEditor from "./components/QuillEditor";
import { NEWS } from "../utils/Url";
import { logout, getToken } from '../utils/Auth';
import axios from 'axios';

const PostNews = () => {
    const history = useHistory();
    const [urlThumbnail, setUrlThumbnail] = useState("");
    const [titleId, setTitleId] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [contentId, setContentId] = useState("");
    const [files, setFiles] = useState([]);
    const [contentEn, setContentEn] = useState("");
    const [filesEn, setFilesEn] = useState([]);
    const [loading, setLoading] = useState(false);

    const onEditorChange = (value) => {
        setContentId(value)
        console.log(contentId)
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
                setLoading(true);
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
                                <img src={`http://192.168.195.195:5000${urlThumbnail}`} className={loading ? "h-48 w-56" : "hidden"}/>
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
                                    toolbarId={"toolbarId"}
                                    placeholder={"Mulai Posting Berita!"}
                                    onEditorChange={onEditorChange}
                                    onFilesChange={onFilesChange}
                                    flag={"post"}
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
                                <QuillEditor
                                    toolbarId={"toolbarEn"}
                                    placeholder={"Start Posting News!"}
<<<<<<< HEAD
                                    onEditorChangeEn={onEditorChangeEn}
                                    onFilesChangeEn={onFilesChangeEn}
                                    flagEn={"post"}
=======
                                    onEditorChange={onEditorChangeEn}
                                    onFilesChange={onFilesChangeEn}
                                    flag={"post"}
>>>>>>> quilljs
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

export default PostNews;
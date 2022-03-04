module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundColor: theme => ({
            'white': '#FFFFFF',
            'blue': '#2091EE',
            'darkBlue': '#1A7CCC',
            'lightGrey': '#A3ABBD',
            'darkGrey': '#969CA9',
            'grey': '#3F4756',
            'green': '#00A552',
            'red': '#F8544A',
            'red-100': '#FFCDD2',
            'darkRed': '#E25449',
            'secondary': '#EDEDEE',
            'secondary-300': '#DADADA',
            'secondary-500': '#858585',
            'info-300': '#70AFFA',
        }),
        colors: {
            'blue': '#2091EE',
            'red': '#F8544A',
            'red-300': '#FCAAA5',
            'red-700': '#B91C1C',
            'netral': '#1E272E',
            'grey': '#3F4756',
            'grey-200': '#E4E7E3',
            'grey-300': '#D1D5DB',
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
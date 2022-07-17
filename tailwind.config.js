/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        colors: {
            // nba red
            'main': '#C9082A',
            // grey-600
            'primary': '#191919',
            // grey-500
            'secondary': '#4C4C4C',
            // grey-400
            'tertiary': '#636363',
            // grey-300
            'quaternary': '#DBDBDB',
            // grey-200
            'quinary': '#D1D1D1',
            // grey-100
            'complementary': '#E0E1DD',
            'accent': ''
        },
        minWidth: {
            'sm': '300px'
        },
        extend: {},
    },
    plugins: [],
};

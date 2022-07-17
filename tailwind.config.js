/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        colors: {
            // nba red
            'main': '#C9082A',
            // blue-400
            'primary': '#191919',
            // blue-300
            'secondary': '#636363',
            // blue-200
            'tertiary': '#DBDBDB',
            // blue-100
            'quaternary': '#D1D1D1',
            // grey-000
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

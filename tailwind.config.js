/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            bodyFont: 'Roboto',
        },
        extend: {
            colors: {
                customColor1: '#00A9FF',
                customColor2: '#89CFF3',
                customColor3: '#A0E9FF',
                customColor4: '#CDF5FD',
            },
        },
    },
    plugins: [],
}

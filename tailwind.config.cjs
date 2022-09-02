/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            maxHeight: {
                128: '32rem',
                144: '36rem',
            },
            backgroundImage: {
                hero: 'url("https://cdn-1.motorsport.com/images/mgl/0mbEzN52/s1200/kyle-busch-joe-gibbs-racing-in-1.webp")',
            },
        },
        fontFamily: {
            sans: ['"Inter"'],
            body: ['"Inter"'],
        },
    },
    plugins: [],
};

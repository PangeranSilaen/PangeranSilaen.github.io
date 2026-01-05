/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F3F1EC",
                surface: "#ECE8E1",
                text: "#141414",
                muted: "#4A4A4A",
                primary: "#0F3D3E",
                accent: "#6B8F71",
                border: "#D8D2C8",
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

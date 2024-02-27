/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#04c4fc",
            },
            backgroundImage: {
                'forestBackground': "url('/src/assets/terre4.jpg')",
                'opteamImage': "url('/src/assets/opteam-larger.png')",
                'professeurImage': "url('/src/assets/classroom.jpg')",
                'flagsImage': "url('/src/assets/flags.jpg')",
                'ottawaWinterImage': "url('/src/assets/ottawa_winter.jpg')",
                'scholarfabImage': "url('/src/assets/webdesign.jpg')",
                'tampereImage': "url('/src/assets/tampere_winter.jpg')",
                'leedsImage': "url('/src/assets/leeds_beckett.jpg')",
                'anfaImage': "url('/src/assets/anfa_capture.png')",
                'sitev1Image': "url('/src/assets/background_forest.jpg')",
                'laManuImage': "url('/src/assets/laManuImage.jpg')",
            
               
              }
        },
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: { fontSize: theme("fontSize.5xl") },
                h2: { fontSize: theme("fontSize.2xl") },
                h3: { fontSize: theme("fontSize.lg") },
            });
        }),
    ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ivory: "#FAF7F2",
                beige: "#EFE9E2",
                champagne: "#E9E4DF",
                sage: "#C9D2C0",
                forest: "#2F3B32",
                graphite: "#3C3C3C",
                brown: "#2F2A26",
                gold: "#A98F6B",
            },
            fontFamily: {
                serif: ["var(--font-serif)", "serif"],
                sans: ["var(--font-sans)", "system-ui", "sans-serif"],
                cursive: ['"Cormorant Garamond"', "serif"],
            },
            letterSpacing: {
                tightish: "-0.005em",
                wideish: "0.02em",
            },
            borderColor: {
                hairline: "rgba(0,0,0,0.12)",
            },
        },
    },
    plugins: [],
};

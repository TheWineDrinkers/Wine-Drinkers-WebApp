/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
            square: 'square',
            roman: 'roman'
        },
        extend: {
            colors: {
                'white': '#FEFCFB',
                'lightblue': '#1282A2',
                'blue': '#034078',
                'blue-er': '#001F54',
                'darkblue': '#0A1128',
                'player_red': '#FF333C',
                'player_blue': '#1EA7E3',
                'line': '#8B9AAE',
                'bgInput': '#EFEEEE',
                // The colours below are what cooler.co suggested for the website and thus saved
                'mauve': '#D9BBF9',
                'rosy-brown': '#CCA7A2',
                'rose-quertz': '#AA9FB1',
                'amethyst': '#7871AA',
                'ultra-violet': '#4E5283'   
            }
        },
    },
    plugins: []
}; 
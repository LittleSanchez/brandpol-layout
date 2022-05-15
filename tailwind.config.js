module.exports = {
    mode: 'jit', // Just-In-Time Compiler
    purge: ['./src/**/*.html'],
    darkMode: false, // or 'media' or 'class'

    theme: {

        container: {
            center: true,
            padding: '1rem'
        },
        extend: {
            fontFamily: {
                rubik: ['Rubik', 'sans-serif'],
                museo: ['Museo', 'sans-serif'],
            },
            colors: {
                brand: '#FFB000',
                card: '#F5F2EA',
                text: {
                    dark: '#1E1E1E',
                    grey: '#BFBFBF', 
                    danger: '#F36546',
                    success: '#22AA6A'
                },
                border: {
                    primary: '#E1E1E1',
                    dark: '#1E1E1E',
                    brand: '#FFB000'
                },
                table: {
                    title: '#F5F2EA',
                    subtitle: '#F6F6F6'
                }
            },
            backgroundImage: {
                'header-cover': 'url("/img/header-bg.png")',
                'arrow-left': 'url("/img/arrow-prev.svg")',
                'arrow-right': 'url("/img/arrow-next.svg")',
                'scrollbar': 'url("/img/examples/scrollbar.svg")'
            },
        },
    },
    variants: {
        extend: {

        },
    },
    plugins: [],
}
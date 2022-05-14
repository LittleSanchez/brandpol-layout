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
            colors: {
                brand: '#FFB000',
                text: {
                    dark: '#1E1E1E',
                    danger: '#F36546',
                    success: '#22AA6A'
                },
                border: {
                    primary: '#E1E1E1'
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

            },
        },
    },
    variants: {
        extend: {

        },
    },
    plugins: [],
}
function range(start, end) {
    let r = [];
    for (let i = start; i <= end; i++) {
        r.push(i);
    }
    return r;
}

function rangeStyle(start, end, valueCallback, nameCallback) {
    return range(start, end).reduce((c, x) => {
        if (!c) {
            return { [`${nameCallback(x)}`]: valueCallback(x) };
        } else {
            return {
                ...c,
                [`${nameCallback(x)}`]: valueCallback(x),
            };
        }
    });
}
console.log(
    rangeStyle(
        1,
        100,
        (x) => `span ${x} / span ${x};`,
        (x) => `span-${x}`
    )
);
module.exports = {
    mode: "jit", // Just-In-Time Compiler
    purge: ["./src/**/*.html"],
    darkMode: false, // or 'media' or 'class'

    theme: {
        container: {
            center: true,
            padding: "15px",
        },
        extend: {
            gridColumn: {
                ...rangeStyle(
                    1,
                    100,
                    (x) => `span ${x} / span ${x};`,
                    (x) => `span-${x}`
                ),
            },
            gridTemplateColumns: {
                ...rangeStyle(
                    17,
                    100,
                    (x) => `repeat(${x}, minmax(0, 1fr))`,
                    (x) => `${x}`
                ),
            },
            fontFamily: {
                museo: ["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","Liberation Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],
                rubik: ["Rubik", "sans-serif"],
            },
            colors: {
                brand: "#FFB000",
                card: {
                    main: "#F5F2EA",
                    light: "#FCFCFC",
                },
                text: {
                    dark: "#1E1E1E",
                    grey: "#BFBFBF",
                    danger: "#F36546",
                    success: "#22AA6A",
                },
                border: {
                    primary: "#E1E1E1",
                    dark: "#1E1E1E",
                    brand: "#FFB000",
                    footer: 'rgba(255,255,255,0.5)'
                },
                table: {
                    title: "#F5F2EA",
                    subtitle: "#F6F6F6",
                },
            },
            backgroundImage: {
                "header-cover": 'url("/img/header-bg.png")',
                "arrow-left": 'url("/img/arrow-prev.svg")',
                "arrow-right": 'url("/img/arrow-next.svg")',
                scrollbar: 'url("/img/examples/scrollbar.svg")',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

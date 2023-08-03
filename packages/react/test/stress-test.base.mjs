const baseConfig = {
    // Importmaps for your test.
    // See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap
    imports: {
        "@stress-test/react": "/node_modules/@stress-test/react/dist/index.js",
    },

    // Scripts to load before running the test.
    scripts: [
        "./node_modules/react/umd/react.development.js",
        "./node_modules/react-dom/umd/react-dom.development.js",
    ],
};

export default baseConfig;
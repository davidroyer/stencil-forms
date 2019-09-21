module.exports = {
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
            },
        },
    },

    plugins: [require('@tailwindcss/custom-forms')],
};

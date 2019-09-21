import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/**/*.tsx', './src/index.html'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
    namespace: 'stencil-forms',
    globalStyle: 'src/global/forms.css',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],

    plugins: [
        postcss({
            plugins: [
                require('tailwindcss')('./tailwind.config.js'),
                require('postcss-nested'),
                autoprefixer(),
                // purgecss,
                // require('cssnano'),
                ...(process.env.NODE_ENV === 'production' ? [purgecss, require('cssnano')] : []),
            ],
        }),
    ],
};

// export const config: Config = {
//   globalStyle: 'src/global/app.css',
//   outputTargets: [
//     {
//       type: 'www',
//       serviceWorker: null,
//       baseUrl: 'http://localhost:5000'
//     }
//   ],
//   plugins: [
//     postcss({
//       plugins: [
//         require('tailwindcss')('./tailwind.config.js'),
//         require('postcss-nested'),
//         autoprefixer(),
//         ...(process.env.NODE_ENV === 'production'
//           ? [purgecss, require('cssnano')]
//           : [])
//       ]
//     })
//   ]
// };

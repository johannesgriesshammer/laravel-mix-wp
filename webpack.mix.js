const {
    mix
} = require('laravel-mix');

const tailwindcss = require('tailwindcss');


mix.setPublicPath('./');

mix.js('resources/js/app.js', './js')
    .sass('resources/sass/app.scss', './css').options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.js')],
    });
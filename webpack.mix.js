const mix = require('laravel-mix');

mix.setPublicPath('./');

mix.js('resources/js/app.js', './js').vue({version: 2});
mix.postCss('resources/css/app.css', './css', [
        require('tailwindcss')
    ]);
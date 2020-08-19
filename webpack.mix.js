const mix = require('laravel-mix');
const HtmlWebpackPlugin = require('html-webpack-plugin');

mix.config.publicPath='dist';
mix.config.sourcemaps='true';
console.log(mix.config)
mix.js('src/js/main.js', 'dist/js/index.js')
    .sass('src/sass/main.scss', 'dist/css')
    .copyDirectory('src/font', 'dist/font')
    .copyDirectory('src/img', 'dist/img')

mix.webpackConfig({
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: './src/index.html'
        })
    ]
})
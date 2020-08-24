const mix = require('laravel-mix');
const HtmlWebpackPlugin = require('html-webpack-plugin');

mix.config.publicPath = 'dist';
mix.config.resourceRoot = './';
mix.config.fileLoaderDirs = {images: 'img', fonts: 'font'};
mix.sourceMaps()
    .js('src/js/main.js', 'dist/js/index.js')
    .sass('src/sass/main.scss', 'dist/')
    .copy('src/img/*.svg', 'dist/img/')


mix.webpackConfig({
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: './index.html',
            inject: false,
        })
    ]
})
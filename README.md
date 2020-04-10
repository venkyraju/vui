# vui
js-react-redux-nodejs
this is new learing project 
step:1
npm init
npm i webpack webpack-cli --save-dev
npm i webpack-dev-server --save-dev
npm i react react-dom --save-dev

step:2 babel setup
    babel-core: babel transpile ES6 code to ES5
    babel-loader: This is a webpack helper which allows to transpile Javascript files with babel and webpack. It uses babel under the hood
    babel/preset-env: It determines which features needs to be transformed to run within different     browsers or runtime versions. This is also known as browser polyfills
    babel/preset-react: It is used to transform all your React JSX into functions.

npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

step: 3
    .babelrc: As we know that, we are using babel-loader, it will look for a .babelrc file while the project is initialized
    create wepack.config.js file


npm i html-webpack-plugin html-loader --save-dev
Webpack Setup Instructions
=============

1. Initialize NPM in project directory: `$ npm init`

2. Install Webpack dependencies: `$ npm  install --save-dev webpack webpack-cli`

3. Setup build script in package.json:
```json
"scripts": {
  "build": "webpack"
}
```

4. Move .js files into /src directory

5. Add `import` and `export` statements where needed

6. Run webpack: `$ npm run build`

7. Change src attribute for script tags in index.html
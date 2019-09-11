NOTES: 
  - 5-10 mins for breakout
  - save time at the end to demo the starter template
  - spend more time at the beginning demoing the app we're building
  - try to get in a lil about css
  - talk about the WHY of dev vs prod at the end
  - find some external package that would make sense to use in our app

- start lecture with npm cowsay package (will help with npm explanation later)

- describe some of the problems of JS development
  - (managing dependencies) working with multiple files
  - making our code efficient in the browser (reducing number of files the browser has to load)
    - bundling and minification

- What is Webpack
  - part of JS tooling, not part of our code
  - helps with managing dependencies 
    - order of script tags
  - bundles js files so the browser has to make fewer requests
    - show js fetches from a bad site and a good site

- Look through example calculator app; show basic code
  - flip the order of script tags and show that it's broken

- before we can start with webpack: a quick intro to NPM
  - NPM is a package manager, similar to bundler for ruby
  - `npm init` will create a package.json file which lists our project's dependencies, basically like Gemfile in Ruby
  - package.json file has scripts we can run which are like Rake tasks (rake db:migrate, rake console)
  - `npm install --save-dev cowsay` will save cowsay as a dep of our project
  - packages are installed in the node_modules folder
    - packages have their own dependencies so this can get to be a lot of files - be sure to add to your .gitignore file

- Installing webpack
  - `npm install --save-dev webpack webpack-cli`
  - we can run `webpack` from the console or as part of npm scripts
  - let's see what that does
  - it'll throw an error about ./src directory, let's create one and move our script files into it
  - now it'll work and output to the dist/main.js; code is all minified and bundled
  - change script tag src to dist/main.js
    - it doesn't work, missing calculate function
  - we need to import/export code so our index knows about code in the calculate file
    - like Ruby require but more specific (export specific functions only)
    - named vs default exports (show named first, then default)
    - [ES2015 Module System MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

*break here, have everyone clone down the starter code and npm init and install webpack; see if they can get calculator working*

- Configuring Webpack
  - this is a huge rabbit hole to go down, we'll just scratch the surface
  - one issue rn is that we're bundling and minifying our code which makes it hard to test in development
    - change our npm script to `webpack --mode=development`
      - [mode](https://webpack.js.org/configuration/mode/)
    - show new output
    - it's still not the easiest to read, but we can add the `--devtool=none` flag to make it easier to debug
      - [devtool](https://webpack.js.org/configuration/devtool/)
  - a better way to manage your webpack configuration is to give it a separate config file
    - create webpack.config.js file and set up mode=dev and devtool=none there, show that it does the same thing
    - some additional configuration we can do:
      - change the entry point: `entry: app.js`
      - change the output directory/filename: 
```js
    output: {
      filename: "main.bundle.js",
      path: path.resolve(__dirname, "dist")
    }
```
- Plugins
    - we can also change the output file name each time there's a change in the filename; that will ensure that the browser downloads the newest version of the file (cache busting)
      - filename: "main.[contentHash].js"
      - hash based on contents of the file; any changes to file contents will make a new hash
    - but this means our html will also need to change to match the new filename
  - these extend the functionality of Webpack
  - we want to make sure our html file gets included in our dist directory, and has access to the right version of our bundled script
    - `npm install --save-dev html-webpack-plugin`
```js
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  ...
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
}
```
  - we want to clean up the extra files from previous builds
    - `npm i -D clean-webpack-plugin`
```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  ...
  plugins: [new CleanWebpackPlugin()]
}
```

- Hot Reloading
  - another very helpful thing we can do is install webpack-dev-server
    - `npm install --save-dev webpack-dev-server`
    - this will create a little server to serve up our files
    - it will also watch our files for changes and reload when there's new content
    - webpack-dev-server uses in-memory versions of our code instead of putting them in the file system (no need for dist folder)
    
    
- Loaders
  - babel-loader
  - css-loader(s)


---
What is new and will take a little time to explain
- npm (like bundler/gemfile)
  - npm init
  - npm scripts (like rake tasks)
  - node_modules (all the deps installed)
- import/export statements (like require)
- babel (i think that can wait until react)


- webpack.config.js
  - starter config: 

```js
const path = require('path')
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
}
```
  - npm uses node under the hood; since we're working with the file system in js
  - require ~= import (node syntax slightly different from browser syntax)
  - `path` will let us use path on our computer (since it will look different for everyone based on directory structure)
  - tell webpack to use it: 
    - `webpack --config=webpack.config.js`

  - now we can start using config to actually do stuff!

```js 
  module.exports = {
    mode: "development", // build in dev mode
    devtool: "none", // don't use eval
    ...
    // additional config
  }
```
  - have a look at the compiled output; this will show us code that mode closely matches our own 
    - TODO: explore what devtool none is doing

- webpack loaders let us work with other filetypes than js
  - TODO: consider removing this bit; not sure how useful it is - css opinions vary wildly
  - https://webpack.js.org/loaders
    - popular loaders
  - start with css
    - main.css
    - RTFM: https://webpack.js.org/loaders/css-loader/
    - copypaste the code:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```
  - regex match files ending with .css
  - use `npm i -D style-loader css-loader`
  - import './main.css' 
  - must import in js file for webpack to know about it
  - css-loader turns css into javascript
  - style-loader adds css to DOM by injecting a style tag
  - all css managed this way becomes part of the JS code bundled by webpack

- cache busting
  - what is caching? browser caches previously downloaded versions of files, based on filename/uri for request
  - if filename doesn't change for the bundled file, users won't have the latest version of the code
  - we can use a hash in the file name, based on the content of the file changing, that will force users to download newer code
  - this can be demo'd by rebuilding

```js
module.exports = {
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  ...
}
```

  - ...but now how does our html file know what js file to import?

- plugins
  - plugins let us customize the build process
  - HtmlWebpackPlugin - https://webpack.js.org/plugins/html-webpack-plugin/

```js
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};
```

  - to get it to use a template file we define:

```js
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
```

- separating config files for dev/prod environments
  - convention: `npm start` for dev, `npm run build` for prod
  - `webpack.common.js`: shared config
  - `webpack.dev.js`: dev config
  - `webpack.prod.js`: prod config
  - `npm i -D webpack-merge` - easy merging

```js
const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
})
```
- `npm i -D webpack-dev-server`: hot reloading!!!
- `"start": "webpack-dev-server --config webpack.dev.js --open",`
- webpack-dev-server uses in-memory versions of our code instead of putting them in the file system (no need for dist folder)

- additional loaders
  - HtmlLoader: `npm i -D html-loader`

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"]
      }
    ],
  },
}
```

  - FileLoader: `npm i -D file-loader`
    - manage additional file types
    - copy files to dist on build

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images"
          }
        }
      }
    ],
  },
}
```

- additional plugins
  - CleanWebpackPlugin: remove old files from our builds
  - `npm i -D clean-webpack-plugin`

```js
const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new CleanWebpackPlugin()]
})
```

- working with external code
  - vendor packages (npm) vs our codebase
  - separate entrypoints for each

```js
module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
}
```

  - we end up with separate build files for each entry
  - import vendor code in vendor.js
    - TODO: how does this work if your code depends on vendor code?

- working with css
  - we don't really want JS to inject our CSS for perf reasons in production
  - we want to serve separate css files
  - in dev mode it's fine
  - so we'll only extract css in production
  - MiniCssExtractPlugin - `npm i -D mini-css-extract-plugin`

  - move our css loaders from common to dev; update prod:

```js
...
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    }),
    ...
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, // extract css to files
          'css-loader', // 2. css => js
          'sass-loader' // 1. sass => css
        ],
      },
    ]
  }
}
```

- to optimize the css:
  - TODO: not sure this is needed, webpack minifying css now by default?
  - OptimizeCssAssetsPlugin: `npm i -D optimize-css-assets-webpack-plugin && terser-webpack-plugin`
  - in prod:

```js
module.exports = {
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(), // css
      new TerserPlugin() // js
    ]
  }
}
```
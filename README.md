# Frontend-Devil 2.0
> Best way to manage your Front-End assets :)

![](https://www.dropbox.com/s/dlymva1u9jdc44m/test.png?raw=1)

## Features
- CSS Autoprefixing
- Automagically compile Sass with libsass
- Automagically lint your scripts
- Map compiled CSS to source stylesheets with source maps
- Image optimization
- ES2015 features by using Babel && Browserify
- Multiple bundles
- JADE templates
- Errors notification
- All configs && paths in one place

## Getting Started
- Clone this repo
- ```npm install -g gulp```
- ```npm install```
- ```bower install```
- run ```gulp```

## Gulp Tasks
- ```gulp```
    - Start ```gulp build``` && add watch
- ```gulp build```
    - Rebuild all project files
- ```gulp clean```
    -   Remove ```/dist``` directory
- ```gulp js:build```, ```gulp style:build```, ```gulp html:build```, ```gulp fonts:build```, ```gulp images:build``` for selective build

## Settings
All project path you can find in ```gulp/path.js```. Just add you folder in ```srcDir``` and ```publicDir``` and start to work :)

All plugins config with link to npm you can find in ```gulp/config.js```

## Multiple bundles
Just add new .js or .sass file in ```path.entries```


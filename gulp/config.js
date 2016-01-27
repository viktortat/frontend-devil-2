import { errorHandler } from './helpers';

/**
 * Plugins settings
 */
export default {

    //  https://www.npmjs.com/package/browserify
    //  don't use 'entries' property in this section. Include you entries in path.entries
    browserify: {
        debug: true,
        plugins: ['watchify'],
        transform: ['babelify']
    },

    //  https://www.npmjs.com/package/gulp-sass
    sass: {},

    //  https://www.npmjs.com/package/gulp-autoprefixer
    autoprefixer: { browsers: ['last 2 versions'] },

    //  https://www.npmjs.com/package/gulp-minify-css
    minifyCss: {},

    //  https://www.npmjs.com/package/gulp-sourcemaps
    sourceMap: {
        init: {
            loadMaps: true
        },
        write: {}
    },

    // https://www.npmjs.com/package/gulp-jshint
    jshint: { esnext: true },

    // https://www.npmjs.com/package/gulp-jade
    jade: {},

    //  https://www.npmjs.com/package/gulp-plumber
    plumber: { errorHandler: errorHandler }
}

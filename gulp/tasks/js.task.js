import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import nodePath from 'path';

import config from '../config';
import path from '../path';

import { errorHandler } from '../helpers';

const $ = gulpLoadPlugins();

/**
 * Javascript task
 * @class Js
 */
class Js {

    /**
     * Lint your script
     * @returns {*}
     */
    static lint() {
        return  gulp.src(path.all.js)
            .pipe($.jshint(config.jshint))
            .pipe($.jshint.reporter('jshint-stylish'))
    }

    /**
     * Bundle your script
     * @param watch {boolean} If you need enable watchify
     */
    static build(watch) {

        path.entries.js.forEach((file) => {
            createBundle(file);
        });

        function createBundle(file) {
            let b = browserify(file, config.browserify);

            function rebundle() {
                b.bundle()
                    .on('error', errorHandler)
                    .pipe(source(nodePath.basename(file)))
                    .pipe(buffer())
                    .pipe($.sourcemaps.init(config.sourceMap.init))
                    .pipe($.uglify(config.uglify))
                    .pipe($.sourcemaps.write('./', config.sourceMap.write))
                    .pipe(gulp.dest(path.dest.js))
            }

            if(watch) b.on('update', rebundle);

            rebundle();
        }
    }

    /**
     * Run watchify
     * @returns {*}
     */
    static watch() {
        return Js.build(true)
    }
}

export default Js;
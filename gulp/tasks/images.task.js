import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import config from '../config';
import path from '../path';

const $ = gulpLoadPlugins();


/**
 * Images task
 * @class Images
 */
class Images {

    /**
     * Build your images
     * @returns {*}
     */
    static build() {
        return gulp.src(path.all.images)
            .pipe($.plumber(config.plumber))
            .pipe($.imagemin(config.imagemin))
            .pipe(gulp.dest(path.dest.images))
    }
}

export default Images;
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import config from '../config';
import path from '../path';

const $ = gulpLoadPlugins();

/**
 * Fonts task
 * @class Fonts
 */
class Fonts {

    /**
     * Build your fonts
     * @returns {*}
     */
    static build() {
        return gulp.src(path.all.fonts)
            .pipe($.plumber(config.plumber))
            .pipe(gulp.dest(path.dest.fonts))
    }
}

export default Fonts;
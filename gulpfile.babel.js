import gulp from 'gulp';

import config from './gulp/config';
import path from './gulp/path';
import Css from './gulp/tasks/css.task';
import Js from './gulp/tasks/js.task';
import Html from './gulp/tasks/html.task';
import Fonts from './gulp/tasks/fonts.task';
import Images from './gulp/tasks/images.task';
import Clean from './gulp/tasks/clean.task';

gulp.task('js:lint', Js.lint);
gulp.task('js:build', ['js:lint'], Js.build);
gulp.task('style:build', Css.build);
gulp.task('html:build', Html.build);
gulp.task('fonts:build', Fonts.build);
gulp.task('images:build', Images.build);

gulp.task('clean', Clean.delete);
gulp.task('build', ['images:build', 'js:build', 'style:build', 'html:build', 'fonts:build']);

gulp.task('watch', () => {
    gulp.watch(path.all.js, () => {
        gulp.start('js:lint');
        Js.watch();
    });
    gulp.watch(path.all.style, ['style:build']);
    gulp.watch(path.all.template, ['html:build']);
    gulp.watch(path.all.fonts, ['fonts:build']);
    gulp.watch(path.all.images, ['images:build']);
});
gulp.task('default', ['build', 'watch']);
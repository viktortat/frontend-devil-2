import gulp from 'gulp';

import config from './gulp/config';
import path from './gulp/path';
import Css from './gulp/tasks/css.task';
import Js from './gulp/tasks/js.task';
import Html from './gulp/tasks/html.task';

gulp.task('js:lint', Js.lint);
gulp.task('js:build', ['js:lint'], Js.build);
gulp.task('style:build', Css.build);
gulp.task('html:build', Html.build);
gulp.task('build', ['js:build', 'style:build', 'html:build']);
gulp.task('watch', () => {
    gulp.watch(path.all.js, () => {
        gulp.start('js:lint');
        Js.watch();
    });
    gulp.watch(path.all.style, ['style:build']);
    gulp.watch(path.all.template, ['html:build']);
});
gulp.task('default', ['build', 'watch']);
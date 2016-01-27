/**
 * Project path
 */
let srcDir = 'src',
    publicDir = 'public';

export default {
    entries: {
        style: [`./${ srcDir }/style/app.sass`],
        js: [`./${ srcDir }/js/app.js`]
    },
    all: {
        template: `${ srcDir }/templates/**/*.jade`,
        js: `${ srcDir }/js/**/*.js`,
        style: `${ srcDir }/style/**/*.sass`
    },
    dest: {
        js: `${ publicDir }/js`,
        style: `${ publicDir }/css`,
        html: `${ publicDir }/templates`
    }
}
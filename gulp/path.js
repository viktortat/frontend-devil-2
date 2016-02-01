/**
 * Project path
 */
let srcDir = 'app',
    publicDir = 'dist';

export default {
    entries: {
        style: [`./${ srcDir }/style/app.sass`],
        js: [`./${ srcDir }/js/app.js`]
    },
    all: {
        template: `${ srcDir }/templates/**/*.jade`,
        js: `${ srcDir }/js/**/*.js`,
        style: `${ srcDir }/style/**/*.sass`,
        fonts: [`${ srcDir }/fonts/**/*.*`],
        images: `${ srcDir }/images/**/*.{gif,jpg,png,svg}`
    },
    dest: {
        js: `${ publicDir }/js`,
        style: `${ publicDir }/css`,
        html: `${ publicDir }/templates`,
        fonts: `${ publicDir }/fonts`,
        images: `${ publicDir }/images`
    },
    publicDir: publicDir
}
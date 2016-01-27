/**
 * Helpers functions
 */

import notify from 'gulp-notify';

export function errorHandler(...args) {
    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);
}

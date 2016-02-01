import gulp from 'gulp';
import del from 'del';

import path from '../path';


/**
 * Clean task
 * @class Clean
 */
class Clean {

    /**
     * Delete dest folder
     * @returns {*}
     */
    static delete() {
        return del(path.publicDir);
    }
}

export default Clean;
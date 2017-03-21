/**
 * Created by liqc on 2017-03-16.
 */
module.exports = function (db, cb) {
    db.define('hangyecode', {
        hycode : String,
        hyname : String
    });
    return cb();
};
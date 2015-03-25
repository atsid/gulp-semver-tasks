module.exports = function(gulp, config) {
    var bump = require('gulp-bump'),
        git = require('gulp-git'),
        filter = require('gulp-filter'),
        tagVersion = require('gulp-tag-version'),
        config = config || {},
        versionSource = config.versionSource || ['./package.json'],
        newVersionFilter = config.versionFilter || 'package.json',
        tagVersionArgs = config.tagVersionArgs,
        commitMessage = config.commitMessage || function (importance) { return "" + importance + " version bump"; };

    function inc(importance) {
        return gulp.src(versionSource)
            .pipe(bump({type: importance}))
            .pipe(gulp.dest('./'))
            .pipe(git.commit(commitMessage(importance)))
            .pipe(filter(newVersionFilter))
            .pipe(tagVersion(tagVersionArgs));
    };
    gulp.task('bump:patch', function() { return inc('patch'); });
    gulp.task('bump:minor', function() { return inc('minor'); });
    gulp.task('bump:major', function() { return inc('major'); });
};
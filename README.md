# gulp-semver-tasks
Semver Management Tasks for Gulp

Adapted from https://github.com/ikari-pl/gulp-tag-version

*Gulpfile.js*
```js
var gulp = require('gulp');
require('gulp-semver-tasks')(gulp);
// or
require('gulp-semver-tasks')(gulp, {versionSource: ['./package.json', './bower.json']});
```

```bash
# This will adjust semver or the configured files, then commit and tag the update.
gulp bump:patch
gulp bump:minor
gulp bump:major
```

[![Code Climate](https://codeclimate.com/github/atsid/gulp-semver-tasks/badges/gpa.svg)](https://codeclimate.com/github/atsid/gulp-semver-tasks)
[![Dependency Status](https://david-dm.org/atsid/gulp-semver-tasks.svg)](https://david-dm.org/atsid/gulp-semver-tasks)
[![Dev Dependency Status](https://david-dm.org/atsid/gulp-semver-tasks/dev-status.svg)](https://david-dm.org/atsid/gulp-semver-tasks)

[![NPM](https://nodei.co/npm/gulp-semver-tasks.png)](https://nodei.co/npm/gulp-semver-tasks/)

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
# This will adjust semver on the configured files, then commit and tag the update.
gulp bump:patch
gulp bump:minor
gulp bump:major
```

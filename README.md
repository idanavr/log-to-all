# Log-To-All
[![NPM Version](https://img.shields.io/npm/v/log-to-all.svg?branch=master)](https://www.npmjs.com/package/log-to-all)
[![CircleCI Status](https://circleci.com/gh/idanavr/log-to-all/tree/master.svg?style=svg)](https://circleci.com/gh/idanavr/log-to-all/tree/master)


## Installation

```
npm install log-to-all
```

or

```
yarn add log-to-all
```

## Try it out to see how simple it is

[![Sample project for using the package](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/node-js-jvwuf)

## Basic example
This example use two of the implemented loggers:

``` js
const ConsoleLogger = require('log-to-all/lib/defaultLoggers/console');
const FileLogger = require('log-to-all/lib/defaultLoggers/file');
const logger = require('log-to-all').init([
  new ConsoleLogger(),
  new FileLogger(`${__dirname}/logs`)
]);
logger.info('♫♪♫♪!');
```

## Implemented Loggers

Name| Description
-------|-------------------
console | Write the logs to the console
file | Write the logs to files in the given path

&nbsp;

``` js
const ConsoleLogger = require('log-to-all/lib/defaultLoggers/console');
const FileLogger = require('log-to-all/lib/defaultLoggers/file');
```

## Add your own logger
In order to add your own logger all you have to do is to create new class with the functions:

- Info(msg, params)
- Warn(msg, params)
- Error(msg, params)

Then add it to the array of init function like this:

``` js
require('log-to-all').init([
  new YourLogger()
]);
```

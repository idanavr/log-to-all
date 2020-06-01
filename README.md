# Logger-JS

## Installation

```
npm install logger-js
```

or

```
yarn add logger-js
```

## Try it out to see how simple it is

[![Sample project for using the package](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/node-js-jvwuf)

## Basic example
This example use two of the implemented loggers:

``` js
const ConsoleLogger = require('logger-js/defaultLoggers/console');
const FileLogger = require('logger-js/defaultLoggers/file');
const logger = require('logger-js').init([
  new ConsoleLogger(),
  new FileLogger(`${__dirname}/logs`)
]);
```

## Implemented Loggers

Name| Description
-------|-------------------
console | Write the logs to the console
file | Write the logs to files in the given path

``` js
const ConsoleLogger = require('logger-js/defaultLoggers/console');
const FileLogger = require('logger-js/defaultLoggers/file');
```

## Add your own logger
In order to add your own logger all you have to do is to create new class with the functions:

- Info(msg, params)
- Warn(msg, params)
- Error(msg, params)

Then add it to the array of init function like this:

``` js
require('logger-js').init([
  new YourLogger()
]);
```

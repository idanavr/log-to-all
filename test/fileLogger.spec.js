const { expect } = require('chai');
const fs = require('fs');
const logger = require('../lib');
const FileLogger = require('../lib/defaultLoggers/file');
const LOGS_PATH = `${__dirname}/logs`;
const fileLogger = new FileLogger(LOGS_PATH);

describe('FileLogger', function () {
    it('Initialize FileLogger with no path, should throw an error', function () {
        expect(() => {
            logger.init([
                new FileLogger()
            ]);
        }).to.throw();
    });

    describe('debug', function () {
        it('Should fail insert "[Debug]" log in the log file', function (done) {
            logger.init([
                fileLogger
            ]);

            testLogType('debug', '[Debug]', false).then(() => {
                done();
            });
        });

        it('Should insert "[Debug]" log in the log file', function (done) {
            logger.init([
                fileLogger
            ], true);

            testLogType('debug', '[Debug]').then(() => {
                done();
            });
        });
    });

    describe('info', function () {
        it('Should insert "[Info]" log in the log file', function (done) {
            logger.init([
                fileLogger
            ]);

            testLogType('info', '[Info]').then(() => {
                done();
            });
        });
    });

    describe('warn', function () {
        it('Should insert "[Warn]" log in the log file', function (done) {
            logger.init([
                fileLogger
            ]);

            testLogType('warn', '[Warn]').then(() => {
                done();
            });
        });
    });

    describe('error', function () {
        it('Should insert "[Error]" log in the log file', function (done) {
            logger.init([
                fileLogger
            ]);

            testLogType('error', '[Error]').then(() => {
                done();
            });
        });
    });

    after(function () {
        fs.unlinkSync(fileLogger.getCurrentFilePath());
    });

    function testLogType(type, insertedText, isTextExist = true) {
        const loggersResult = logger[type]('random message');
        if (isTextExist) {
            return Promise.all(Object.values(loggersResult)).then((res) => {
                const filePath = res[0];
                expect(fs.existsSync(filePath)).to.be.eql(true);
                expect(fs.readFileSync(filePath, { encoding: 'utf-8' })).to.include(insertedText);
            });
        }
        return new Promise((resolve) => {
            expect(loggersResult).to.be.null;
            return resolve();
        });
    }
});
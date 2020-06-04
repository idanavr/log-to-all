/* eslint no-undef: 0 */
const { expect } = require('chai');
const fs = require('fs');
const FileLogger = require('../lib/defaultLoggers/file');
const LOGS_PATH = `${__dirname}/logs`;
const logger = require('../lib');

describe('FileLogger', () => {
    it('Should throw an error since there is no path to FileLogger', () => {
        expect(() => {
            logger.init([
                new FileLogger()
            ])
        }).to.throw();
    });

    const fileLogger = new FileLogger(LOGS_PATH);
    logger.init([
        fileLogger
    ]);

    describe('info', () => {
        it(`Should insert '[Info]' log in the log file`, (done) => {
            testLogType('info', '[Info]').then(() => {
                done();
            });
        });
    });

    describe('warn', () => {
        it(`Should insert '[Warn]' log in the log file`, (done) => {
            testLogType('warn', '[Warn]').then(() => {
                done();
            });
        });
    });

    describe('error', () => {
        it(`Should insert '[Error]' log in the log file`, (done) => {
            testLogType('error', '[Error]').then(() => {
                done();
            });
        });
    });

    after(() => {
        fs.unlinkSync(fileLogger.getCurrentFilePath());
    });

    function testLogType(type, insertedText) {
        const loggersResult = logger[type]('random message');
        return Promise.all(Object.values(loggersResult)).then((res) => {
            const filePath = res[0];
            expect(fs.existsSync(filePath)).to.be.eql(true);
            expect(fs.readFileSync(filePath, { encoding: 'utf-8' })).to.include(insertedText);
        });
    }
});
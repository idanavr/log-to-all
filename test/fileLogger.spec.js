/* eslint no-undef: 0 */
const { expect } = require('chai');
const fs = require('fs');
const FileLogger = require('../lib/defaultLoggers/file');
const LOGS_PATH = `${__dirname}/logs`;
const logger = require('../lib');

describe('FileLogger', () => {
    after(() => {
        fs.unlink(LOGS_PATH, (err) => {
            if (err)
                console.error(err);
        });
    });

    it('Should throw an error since there is no path to FileLogger', () => {
        expect(() => {
            logger.init([
                new FileLogger()
            ])
        }).to.throw();
    });

    logger.init([
        new FileLogger(LOGS_PATH)
    ]);

    describe('info', () => {
        const type = 'info';
        it(`Should insert '${type}' log in a file`, () => {
            logger[type]('random message');
            expect(fs.existsSync(LOGS_PATH)).to.be.eql(true);
        });
    });

    describe('warn', () => {
        const type = 'warn';
        it(`Should insert '${type}' log in a file`, () => {
            logger[type]('random message');
            expect(fs.existsSync(LOGS_PATH)).to.be.eql(true);
        });
    });

    describe('error', () => {
        const type = 'error';
        it(`Should insert '${type}' log in a file`, () => {
            logger[type]('random message');
            expect(fs.existsSync(LOGS_PATH)).to.be.eql(true);
        });
    });
});
/// <reference path="../typings/chai/chai.d.ts" />

import assertsImport = require('chai');
var assert = assertsImport.assert;

describe('Array', () => {

    describe('#indexOf()', () => {

        it('should return -1 when the value is not present', () => {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });

    });
});
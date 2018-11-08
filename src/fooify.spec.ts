import { expect } from 'chai';
import fooify from './fooify';

describe('fooify', () => {

    ([

        [null, null],
        [undefined, undefined],
        ['', ' - foo'],
        ['bar', 'bar - foo']

    ] as [string | null | undefined, string | null | undefined][]).forEach(test => {
        const [input, expected] = test;
        it(`input: |${input}| -> expected output: |${expected}|`, () => expect(fooify(input)).to.be.equal(expected));
    })

});

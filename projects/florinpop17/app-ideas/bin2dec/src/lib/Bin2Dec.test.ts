import { describe, expect, it } from 'vitest';
import { Bin2Dec } from './Bin2Dec';

it('snapshot', () => {
  const got = Bin2Dec('11111111');
  expect(got).toMatchInlineSnapshot('"255"');
});

describe('Bin2Dec validation', () => {
  it('should be error with not 8 digits binary', () => {
    const want = '';
    const inputs = ['00001111a', 'a00001111', '1111', '12345678', 'aaaabbbb'];

    inputs.forEach(input => {
      const got = Bin2Dec(input);
      expect(got).toEqual(want);
    });
  });

  it('should be fine with 8 digits binary', () => {
    const inputs = ['00001111', '00000000', '11111111'];

    inputs.forEach(input => {
      const got = Bin2Dec(input);
      expect(got).not.toEqual('');
    });
  });
});

describe('Bin2Dec functionality', () => {
  it('should convert binary to decimal', () => {
    const tests = [
      {
        input: '00000000',
        want: '0',
      },
      {
        input: '00000001',
        want: '1',
      },
      {
        input: '10000000',
        want: '128',
      },
      {
        input: '11111111',
        want: '255',
      },
    ];

    tests.forEach(({ input, want }) => {
      const got = Bin2Dec(input);
      expect(got).toEqual(want);
    });
  });
});

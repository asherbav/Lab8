const formatVolumeIconPath = require('../assets/scripts/main');

describe('checks if volume level returns the correct icon', () => {
    test('volume is greater than 66', () => {
      expect(formatVolumeIconPath(75)).toContain('volume-level-3');
    });
  
    test('volume is between 33 and 67 exclusive', () => {
        expect(formatVolumeIconPath(50)).toContain('volume-level-2');
    });

    test('volume is between 0 and 34 exclusive', () => {
        expect(formatVolumeIconPath(25)).toContain('volume-level-1');
      });

      test('volume is 0', () => {
        expect(formatVolumeIconPath(0)).toContain('volume-level-0');
      });
  });
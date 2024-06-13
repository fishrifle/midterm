const {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace, 
    addToObj,
    duplicateElements
} = require('./main.js');

describe('ageToAbilities', () => {

    it('returns a proper message for kids', () => {
        expect(ageToAbilities(0)).toBe('You can\'t drive.');
        expect(ageToAbilities(5)).toBe('You can\'t drive.');
        expect(ageToAbilities(15)).toBe('You can\'t drive.');
    });

    it('returns a proper message for young drivers', () => {
        expect(ageToAbilities(16)).toBe('You can drive but not vote.');
        expect(ageToAbilities(17)).toBe('You can drive but not vote.');
    });

    it('returns a proper message for young voters', () => {
        expect(ageToAbilities(18)).toBe('You can vote but not rent a car.');
        expect(ageToAbilities(20)).toBe('You can vote but not rent a car.');
        expect(ageToAbilities(23)).toBe('You can vote but not rent a car.');
        expect(ageToAbilities(24)).toBe('You can vote but not rent a car.');
    });

    it('returns a proper message for 25+ year olds', () => {
        expect(ageToAbilities(25)).toBe('You can do pretty much anything.');
        expect(ageToAbilities(50)).toBe('You can do pretty much anything.');
        expect(ageToAbilities(100)).toBe('You can do pretty much anything.');
    });
});

describe('oddIndices', () => {

    it('returns the values at odd indices for non-empty arrays', () => {
        expect(oddIndices([0, 2, 4, 6, 8, 10])).toStrictEqual([2, 6, 10]);
        expect(oddIndices([1, 2, 3, 2, 4, 7])).toStrictEqual([2, 2, 7]);
        expect(oddIndices([1, 1, 1, 1, 1, 1])).toStrictEqual([1, 1, 1]);
        expect(oddIndices([2, 2, 2, 2, 2, 2])).toStrictEqual([2, 2, 2]);
    });

    it('returns the values at odd indices for single value arrays', () => {
        expect(oddIndices([0])).toStrictEqual([]);
        expect(oddIndices([1])).toStrictEqual([]);
        expect(oddIndices([2])).toStrictEqual([]);
    });

    it('returns the values at odd indices for empty arrays', () => {
        expect(oddIndices([])).toStrictEqual([]);
        expect(oddIndices([])).toStrictEqual([]);
        expect(oddIndices([])).toStrictEqual([]);
    });
});

describe('numOddValues', () => {

    it('should count odds when only odds are present', () => {
        expect(numOddValues([1, 3, 5])).toBe(3);
        expect(numOddValues([1])).toBe(1);
        expect(numOddValues([9, 9, 9, 11, 13])).toBe(5);
    });

    it('should count odds when only evens are present', () => {
        expect(numOddValues([2, 4, 6])).toBe(0);
        expect(numOddValues([0])).toBe(0);
        expect(numOddValues([8, 8, 8, 10, 12])).toBe(0);
    });

    it('should count odds when odds and evens are present', () => {
        expect(numOddValues([1, 4, 3])).toBe(2);
        expect(numOddValues([0, 1])).toBe(1);
        expect(numOddValues([9, 8, 7, 5, 12])).toBe(3);
    });

    it('should count odds in an empty array', () => {
        expect(numOddValues([])).toBe(0);
    });
});

describe('averageStringLength', () => {

    it('should get the average string length', () => {
        expect(averageStringLength(['oh', 'hello', 'there'])).toBe(4);
        expect(averageStringLength(['oh'])).toBe(2);
        expect(averageStringLength(['best', 'test', 'ever!!!'])).toBe(5);
    });

    it('should get the average string length when the average is a decimal', () => {
        expect(averageStringLength(['oh', 'hello'])).toBe(3.5);
        expect(averageStringLength(['i', 'am'])).toBe(1.5);
    });

    it('should return 0 if the array is empty', () => {
        expect(averageStringLength([])).toBe(0);
    });
});

describe('firstPunctuationIndex', () => {

    it('should return the index of the first punctuation', () => {
        expect(firstPunctuationIndex('!')).toBe(0);
        expect(firstPunctuationIndex('wow!')).toBe(3);
        expect(firstPunctuationIndex('wow! that is so crazy')).toBe(3);
        expect(firstPunctuationIndex('wow? that is so crazy')).toBe(3);
        expect(firstPunctuationIndex('wow that is so crazy.')).toBe(20);
    });

    it('should return the index of the first punctuation (when multiple are present)', () => {
        expect(firstPunctuationIndex('wow? that is so crazy!!!!')).toBe(3);
        expect(firstPunctuationIndex('wow that is so crazy....')).toBe(20);
        expect(firstPunctuationIndex('wow. that? is! so. crazy?!??!...')).toBe(3);
    });

    it('should return -1 if no punctuation was found', () => {
        expect(firstPunctuationIndex('wow that is so crazy')).toBe(-1);
        expect(firstPunctuationIndex('')).toBe(-1);
    });
});
describe('getPlace', () => {

    it('should work for 1st place', () => {
        expect(getPlace([0], 1)).toBe('1st place');
        expect(getPlace([90, 50, 30], 100)).toBe('1st place');
        expect(getPlace([10, 4, 3, 2, 1, 0], 23)).toBe('1st place');
    });

    it('should work for 2nd place', () => {
        expect(getPlace([3, 0], 1)).toBe('2nd place');
        expect(getPlace([230, 90, 50, 30], 100)).toBe('2nd place');
        expect(getPlace([24, 10, 4, 3, 2, 1, 0], 23)).toBe('2nd place');
    });

    it('should work for 3rd place', () => {
        expect(getPlace([4, 3, 0], 1)).toBe('3rd place');
        expect(getPlace([400, 230, 90, 50, 30], 100)).toBe('3rd place');
        expect(getPlace([40, 24, 10, 4, 3, 2, 1, 0], 23)).toBe('3rd place');
    });

    it('should work for 4th - 6th places', () => {
        expect(getPlace([10, 4, 3, 0], 1)).toBe('4th place');
        expect(getPlace([600, 500, 400, 230, 90, 50, 30], 100)).toBe('5th place');
        expect(getPlace([100, 99, 98, 40, 24, 10, 4, 3, 2, 1, 0], 23)).toBe('6th place');
    });

    it('should work for 99th place', () => {
        let highScores = [];
        for (let i = 0; i < 98; i++) {
            highScores.push(10);
        }
        expect(getPlace(highScores, 1)).toBe('99th place');
    });

    it('should work for 101st place', () => {
        let highScores = [];
        for (let i = 0; i < 100; i++) {
            highScores.push(10);
        }
        expect(getPlace(highScores, 1)).toBe('101st place');
    });
    
    it('should work for 102nd place', () => {
        let highScores = [];
        for (let i = 0; i < 101; i++) {
            highScores.push(10);
        }
        expect(getPlace(highScores, 1)).toBe('102nd place');
    });

    it('should work for 103rd place', () => {
        let highScores = [];
        for (let i = 0; i < 102; i++) {
            highScores.push(10);
        }
        expect(getPlace(highScores, 1)).toBe('103rd place');
    });
});

describe('addToObj', () => {
    let obj;
  
    beforeEach(() => {
      // Reset the object before each test
      obj = {
        user: 'teacher',
        birthday: 'January 1st',
        favoriteColor: 'yellow',
      };
    });
  
    it('should add a new key-value pair to the object', () => {
      addToObj(obj, 'homeState', 'tennessee');
      expect(obj).toEqual({
        user: 'teacher',
        birthday: 'January 1st',
        favoriteColor: 'yellow',
        homeState: 'tennessee',
      });
    });
  
    it('should modify an existing key in the object', () => {
      addToObj(obj, 'user', 'student');
      expect(obj).toEqual({
        user: 'student', // Value should be updated
        birthday: 'January 1st',
        favoriteColor: 'yellow',
      });
    });
  
    it('should not modify other keys in the object', () => {
      addToObj(obj, 'homeState', 'tennessee');
      expect(obj.favoriteColor).toEqual('yellow'); // favoriteColor should remain unchanged
    });
  
    it('should add a key with an empty string as a value', () => {
      addToObj(obj, 'newKey', '');
      expect(obj.newKey).toEqual(''); // Value should be an empty string
    });
    it('should add a new key with an object as its value', () => {
        const newObjValue = {
          city: 'Nashville',
          state: 'Tennessee',
        };
    
        addToObj(obj, 'address', newObjValue);
    
        expect(obj).toEqual({
            user: 'teacher',
            birthday: 'January 1st',
            favoriteColor: 'yellow',
            address: {
                city: 'Nashville',
                state: 'Tennessee',
            },
        });
    });

    it('should return error message if no key is given', () => {
    expect(addToObj(obj)).toEqual('Function must be called with a valid key.'); // favoriteColor should remain unchanged
    });

    it('should return error message if no valid key is given', () => {
    expect(addToObj(obj, [1, 2, 3])).toEqual('Function must be called with a valid key.'); // favoriteColor should remain unchanged
    });
});

describe('duplicateElements', () => {
    it('should return an empty array when given an empty array', () => {
        const inputArray = [];
        const result = duplicateElements(inputArray);
        expect(result).toEqual([]);
    });
  
    it('should return an empty array when there are no repeating elements', () => {
        const inputArray = [1, 2, 3, 4, 5];
        const result = duplicateElements(inputArray);
        expect(result).toEqual([]);
    });
  
    it('should return an array of repeating elements', () => {
        const inputArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
        const result = duplicateElements(inputArray);
        expect(result).toEqual([2, 4, 6]);
    });
  
    it('should handle negative numbers and zero', () => {
        const inputArray = [-1, 0, 1, -1, 2, 0, 2];
        const result = duplicateElements(inputArray);
        expect(result).toEqual([-1, 0, 2]);
    });
});
  
  
  


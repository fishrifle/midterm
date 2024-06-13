# Term 1 - Midterm Exam


## Tips

* You may use the internet to look up anything you want (string methods, array methods, etc.)
* If you're feeling stuck, skip it and come back to it later.
* It's okay if you don't finish
* You can go in any order
* It's better to show a little work on each problem than a lot of work on one problem
* Relax and have fun!

## Problems

### Problem 1: `ageToAbilities`

Write a function, `ageToAbilities` that takes a person's age and returns a message of their abilities according to the table below:

```
┌──────────┬────────────────────────────────────┐
│ age      │ message                            │
├──────────┼────────────────────────────────────┤
│ under 16 │ 'You can't drive.'                 │
│ 16 to 17 │ 'You can drive but not vote.'      │
│ 18 to 24 │ 'You can vote but not rent a car.' │
│ 25 plus  │ 'You can do pretty much anything.' │
└──────────┴────────────────────────────────────┘
```

**Examples**
```
ageToAbilities(10) => 'You can't drive.'
ageToAbilities(25) => 'You can do pretty much anything.'
```

---

### Problem 2: `oddIndices`

Write a function, `oddIndices`, that takes in an array of numbers and returns only the ones that are located at odd indices (indices is plural of index). Recall that the index of the first value in an array (or string) is 0.

**Examples**
```
oddIndices([0, 2, 4, 6, 8, 10]) => [2, 6, 10]
oddIndices([1]) => []
oddIndices([100, 101, 102]) => [101]
```

---

### Problem 3: `numOddValues`

Write a function, `numOddValues`, that takes in an array of numbers and returns the quantity of odd values in that array.

**Examples**
```
numOddValues([0, 1, 2, 3]) => 2
numOddValues([5, 5, 5, 5]) => 4
numOddValues([]) => 0
```

---

### Problem 4: `averageStringLength`

Write a function, `averageStringLength`, that takes in an array of strings and returns the average length of the strings. An average is calculated by first summing X values, then dividing the sum by X.

**Examples**
```
averageStringLength(['oh', 'hello']) => 3.5
averageStringLength([]) => 0
averageStringLength(['a', 'pleasant', 'string']) => 5
```

---

### Problem 5: `firstPunctuationIndex`

Write a function, `firstPunctuationIndex`, that returns the index of the first appearance of a period, question mark, or exclamation mark in the given string. If none are found, return `-1`.

**Examples**
```
firstPunctuationIndex('wow! goodness me.') => 3
firstPunctuationIndex('I love taking tests?') => 19
firstPunctuationIndex('...hello?') => 0
firstPunctuationIndex('alright alright alright') => -1
```

---

### Problem 6: `getPlace`

Write a function, `getPlace`, that takes in two parameters, a **sorted** list of high scores (highest first, loweset last)
and a new `score`. The function should return a human readable string indicating which 
place the new score fits into the given list of high scores.

> Note 1: You are not required to insert `score` into the `highScores` array 

> Note 2: We will assume that the new score is not already in the high scores array
so that we don't have to handle ties

**Examples**
```
getPlace([60, 30, 10], 90)     => '1st place'
getPlace([60, 30, 10], 50)     => '2nd place'
getPlace([60, 30, 10], 15)     => '3rd place'
getPlace([500, 300, 200], 100) => '4th place'
```

### Problem 7: `addToObj`

Write a function, `addToObj`, that takes in three parameters, a person object, a key, and a value,. The function should change or add the key and value to the object.

> Note 1: You are should not be returning anything from this function, the changes in the object should be saved.

> Note 2: If not given a string in place of the key, return the string 'Function must be called with a valid key.'


**Examples**
```
let obj = {
    user: 'teacher',
    birthday: 'January 1st',
    favoriteColor: 'yellow'
}

addToObj(obj, 'homeState', 'tennessee') => object would add the key 'homeState' and have the value of 'tennessee'
addToObj(obj, 'parentsNames', {mother: 'Janine', father: 'Robert'}) => object would add the key 'parentsNames' and have the value of a nested object
addToObj(obj, 'user', 'student')     => object would redefine the key 'user' to have the value 'student'
addToObj(obj, 'user', 'student')     => 'Function must be called with a valid key.'
```

### Stretch Problem: `duplicateElements`

Write a function called duplicateElements that takes an array of numbers as input and returns a new array containing only numbers from the input array that repeat at least once and should not be repeated in the result.


**Examples**
```
const inputArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

uniqueElements(inputArray) => [2, 4, 6]

```
# midterm

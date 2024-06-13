// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities(age) {
    if (age < 16) {
        return "You can't drive."
   } else if (age >= 16 && age <= 17) {
    return "You can drive but not vote."
   } else if (age >= 18 && age <= 24) {
    return "You can vote but not rent a car."
   } else {
    return "You can do pretty much anything."
   }
}

function oddIndices(arr) { 
    let result = [];
    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i]);
        }
    return result;    
    }
        
    function numOddValues(arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                count++
            }
        }
    return count;
    }
     
    



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
};

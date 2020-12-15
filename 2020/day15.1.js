var input = `1,12,0,20,8,16`;

var numbers = input.split(',');

var spokenNumbers = numbers.slice();

for (i = numbers.length-1; i < 2019; i++){
    var numberToLookFor = spokenNumbers[i];
    var arrayWithoutLastEntry = spokenNumbers.slice(0, i);
    var foundIndex = arrayWithoutLastEntry.lastIndexOf(numberToLookFor);
    if (foundIndex != -1) {
        var distance = (i) - foundIndex;
        spokenNumbers.push('' + distance);
    } else {
        spokenNumbers.push('0');
    }
}

console.log('The 2020th spoken number is:', spokenNumbers[spokenNumbers.length-1], 'for input', numbers);
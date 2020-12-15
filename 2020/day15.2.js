var input = `1,12,0,20,8,16`;

// I brute-forced this for hours, but tomcant's map solution was infinitely better!

var targetNum = 30000000;
var numbers = input.split(',');

var spokenNumbers = new Map(
    numbers.flatMap((num, idx) =>
        idx < numbers.length - 1
            ? [[num, idx]]
            : []
    )
);

var currentNumber = numbers[numbers.length - 1];

for (var i = numbers.length; i < targetNum; ++i) {
    var distanceOrZero =
        spokenNumbers.has(currentNumber)
            ? '' + (i - spokenNumbers.get(currentNumber) - 1)
            : '0';
    spokenNumbers.set(currentNumber, i - 1);
    currentNumber = distanceOrZero;
}

console.log(currentNumber);

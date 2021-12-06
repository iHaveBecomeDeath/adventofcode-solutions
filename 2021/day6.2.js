var fishInTheSea = [1,3,1,5,5,1,1,1,5,1,1,1,3,1,1,4,3,1,1,2,2,4,2,1,3,3,2,4,4,4,1,3,1,1,4,3,1,5,5,1,1,3,4,2,1,5,3,4,5,5,2,5,5,1,5,5,2,1,5,1,1,2,1,1,1,4,4,1,3,3,1,5,4,4,3,4,3,3,1,1,3,4,1,5,5,2,5,2,2,4,1,2,5,2,1,2,5,4,1,1,1,1,1,4,1,1,3,1,5,2,5,1,3,1,5,3,3,2,2,1,5,1,1,1,2,1,1,2,1,1,2,1,5,3,5,2,5,2,2,2,1,1,1,5,5,2,2,1,1,3,4,1,1,3,1,3,5,1,4,1,4,1,3,1,4,1,1,1,1,2,1,4,5,4,5,5,2,1,3,1,4,2,5,1,1,3,5,2,1,2,2,5,1,2,2,4,5,2,1,1,1,1,2,2,3,1,5,5,5,3,2,4,2,4,1,5,3,1,4,4,2,4,2,2,4,4,4,4,1,3,4,3,2,1,3,5,3,1,5,5,4,1,5,1,2,4,2,5,4,1,3,3,1,4,1,3,3,3,1,3,1,1,1,1,4,1,2,3,1,3,3,5,2,3,1,1,1,5,5,4,1,2,3,1,3,1,1,4,1,3,2,2,1,1,1,3,4,3,1,3];

var fishCount = {
  zero: fishInTheSea.filter(f => f == 0).length,
  one: fishInTheSea.filter(f => f == 1).length, 
  two: fishInTheSea.filter(f => f == 2).length,
  three: fishInTheSea.filter(f => f == 3).length,
  four: fishInTheSea.filter(f => f == 4).length,
  five: fishInTheSea.filter(f => f == 5).length,
  six: fishInTheSea.filter(f => f == 6).length,
  seven: fishInTheSea.filter(f => f == 7).length,
  eight: 0,
  total: fishInTheSea.length
};

for (var day = 0; day < 256; day++) {
  var zeroCount = fishCount.zero;

  fishCount.zero = fishCount.one;
  fishCount.one = fishCount.two;
  fishCount.two = fishCount.three;
  fishCount.three = fishCount.four;
  fishCount.four = fishCount.five;
  fishCount.five = fishCount.six;
  fishCount.six = fishCount.seven + zeroCount;
  fishCount.seven = fishCount.eight;
  fishCount.eight = zeroCount;
  
  fishCount.total = fishCount.zero + fishCount.one + fishCount.two + fishCount.three + fishCount.four + fishCount.five + fishCount.six + fishCount.seven + fishCount.eight;
}

console.log(fishCount.total);

var earliestTimestamp = 1005526;
var inputBuses = `37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,587,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,13,19,x,x,x,23,x,x,x,x,x,29,x,733,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17`;

var buses = inputBuses.split(',').filter(b => b != 'x').map(b => b*1);
var resultingBus = 0;
var resultingTimestamp = 0;

for (var i = earliestTimestamp; i < earliestTimestamp + Math.max(...buses); i++){
    var currentTimestampArray = [];
    for (var j = 0; j < buses.length - 1; j++){
        if (i % buses[j] == 0){
            resultingBus = buses[j];
            resultingTimestamp = i;
        }
    }
    if (resultingBus > 0){
        break;
    }
}

console.log('waiting time', resultingTimestamp - earliestTimestamp, 'for bus', resultingBus, 'gives the answer', (resultingTimestamp - earliestTimestamp) * resultingBus)

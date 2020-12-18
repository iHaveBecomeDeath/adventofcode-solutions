var inputBuses = `37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,587,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,13,19,x,x,x,23,x,x,x,x,x,29,x,733,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17`;

var buses = [];

inputBuses.split(',').map((busLine, distance) => {
    if (busLine != 'x') {
        buses.push({ 
            line: busLine*1, 
            distance: distance
        });
    }
}); 

var i = 0, step = 1;
buses.forEach(b => {
    while ((i + b.distance) % b.line != 0){
        i += step
    }
    step *= b.line
});

console.log(i)
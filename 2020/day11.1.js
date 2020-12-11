var input = `LLLLLLLLLLL.LLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLL.LLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL,LLLLLL.LLLLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL,LLLLLLLLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLL,LLLLLL.LLLLLLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLL.LLLLLLL.LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLLLLLLLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL,.L..LLL...L....LLLL.L..L...............LLLLLL..LL.L.....L.....L.L.L.L.L...LLL.....L.L....LLL.LL..,LLLLLL.LLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLL.LL.LLLLL.LLLL.LLLLLLLL.LLLLL.LLLLLLLL.LLLL,LLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.L.LLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLL.L.LLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLL.LLLLLLLLLLLLLLLL..LLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLLLLLLLLL,LLLLLLLLLLL.LLLLL.LLLLLL.LLLL..LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL,.LLLLL.LLLL.LLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL,LLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.L.LLLLLLLLLLLL.LLLLLLLLLLL.LLLL.LL.LLLLLLLLLLLLLLLLLLL,L.....L..L...LL.L....LLL.L..L.....LLLL.L.L.L.L...L..LLLLL.L..LL..L..L....L.LLL.L.LL.........L..L.,LLLLLLLLLL.LLLLLL.LLLLLL..LLLL..LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL,LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL,LLLLLLLLLLLLLLLLL.LLLLLLLLLLL..LLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LL.LLLLL.LLLLLLL.LLLLLLLL.LLLLLLLLLL,LL.LLL.LLLL.LLLLL.LLLL.L.LLLLL.LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLL.L.LLL.L.LLLLLLLLLLL,..L.L.L....L.LL.L....LL.............L.L.LLL...L.L.L......L...L..L.......LL....L...L...L....LL.L.L,LLLLLL..LLL.LLLLLLLLLLLLLLLLLL.LLLLLLL..LLLL.LLLLLLLLL.LLLL.LLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLL.LLLL.LLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLL.LLL.LLLLL.LLLLLLLLLLLLL,LLLLLLLLLLL.LLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.L.LLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLL.LLL..LL.LLLLL.LLLLLLLLLLLLL,L.L.LLLLLLL.LLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL..LLLLL.LLLLLLLLLLLLL,LLLLLL.LLLLLLLLLL.LLLLLLLLL.LL.LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LL.LLLLLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL.L.LLLLLLL,L.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLL.LLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLL.LLLLLLL,...L.L..LL...L.L.L......LL..L.L.L..L..L.LL...L............L...L.....LLL..LL.LLL.LL..L.LLL....LL..,LLLLLL.LLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLL.LLLL..LLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLL.LLLL.LLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLL.LLLL.LLLLLLLLLLLL..LLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLL.LLLLLLLLLL.LLLLLL.LLLLL.LLLLLLLLL.LLL.LLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLL.LLLLLLLLLLLLL..L.LLLLLL.LL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLL..LLLL.LLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLLLLLLLL..LLLLLL.L.LLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLL..LLLLLLLLLLLLL,L.L.L.LL.LL..L...L....L........L.L..L...LLLLLL...L........L..LLLLLLL.LLL...L.L............L.L..L.,LL.LLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL,LLLLLLLLL.L.LLLLL.LLLLLL.LLLLL.LLLLLLLLLL.LL.LLLLLLLLL.LLLLLLLL.LL.LL..LLLLLL.LLLLLLLLLLLLLLLLLLL,LLLLLL.LLL..LLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.L.LLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL,LLLLLL.LLLLLLLLLLLLLLLLL..LLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL,LLLLLL.LLLLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLL.LL.LLLLL,LLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLL,.....L..L...LL....LLLLLL.....L..L..L.LL.L.L.LL...L....L.L..L...L..L.L..LL..LLL...L.L.L...L.LLL...,LLLLLLLLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLL.L,LLLLLL.LLLL.LLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLL.L.LLLLL.LLLLLLL.LLLLL.L.LLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLL..LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLL..LLLLLLLLLLLLLLLLLLL,LLLLLL.LLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL,LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLL..LLLLLLLLLLLLL,L..........L...L.......L.LLLLLL...LL.....L..L.LL....L..L.L...L..L.....LL..L..LL..L.L...L..L.L..L.,.LLLLL..LLL.LLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLL.L.LLLL.LLLLLLLLLLLL.LLLLL.LLL.LLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL,LLLLLLLLLLL.LLLLL.LLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL,LLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLL.LLLLL.LL.LLLLLLLLLL,LLL.L....L..L..L..L......L...LL.L..L...LLL...L.....L.LL.LLL........LL..L.L.LL.L..L..L..LLLL.LL...,LLLLLL.LLLL.LLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LL.LL.LL.LLL.LLLLLL,LLLLLLLLLLL.LLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLL..LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL,LLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLL..LLLLLLLLLLLL,LLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLL.LLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL,....L....L.....L.....LLLL.......LL.L..L...L.........L.....L......L..L..L.LL.....L..L.L.L.LL...L.L,LLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLL.LL.LL.LLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL,LLLLLLLLLLL.LLLLLLLLLL.L.LLLLLLLLLLLLL.LLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL,LLLLLL.LLLLLLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLL.LL.LL.LLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL,LLLLLLLLLLLLLL.LL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLLLLLLLLLLLLL.LLLLLL.LL.LL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL,...L.L....L.LL....L..LLLL.....L.L.LLL.....L.L.LL.LL......LLL.L.....L..LL.LL.L...L.L..LLL..LL.....,LLLLLL.LLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLL,LLLLLL.LLLL.LLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLLLLLLL.LL..LLLLLLLLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLL.LL.LLLLLL.LLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL,LLLLLL.LLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LL.LLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL,LLLLLLLLLL..LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLL.LLLL.LLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLL.LLLL.LLLLLLLLLLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLLLL.LLL,.L...LL.LLL...L.LL.LL..L......LL.....LL..L..............L....L........LLL...L.L..LL...L....L.....,LLLLLL.LLLLLLLLLL..LLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLL.LL.LLLLLL.LLLLLLLL.LLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLL.LL.LLLLLLL.L.LLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLLL.LLLLL.LLLLLLLLLLLLL,LLLLLLLLLLL.LLLLLLLLLLLLLLL.LL.LLLLLLLL..LLL.LLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLL.LLLLL.LLLLLLLLLLLLL`;

var rows = input.split(',');

function GetAdjacentOccupiedSeats(arrayOfRows, rowIndex, seatIndex) {
    var possibleRows = [rowIndex], possibleSeats = [seatIndex];
    var occupiedCount = 0;

    if (rowIndex < arrayOfRows.length - 1) {
        possibleRows.push(rowIndex + 1);
    }
    if (rowIndex > 0) {
        possibleRows.push(rowIndex - 1);
    }
    if (seatIndex < arrayOfRows[rowIndex].length - 1) {
        possibleSeats.push(seatIndex + 1);
    }
    if (seatIndex > 0) {
        possibleSeats.push(seatIndex - 1);
    }

    for (var ri = 0; ri < possibleRows.length; ri++) {
        for (var si = 0; si < possibleSeats.length; si++) {
            if (possibleRows[ri] == rowIndex && possibleSeats[si] == seatIndex) {
                continue;
            }
            try {
                var x = arrayOfRows[possibleRows[ri]][possibleSeats[si]];
                if (x && x == '#') {
                    occupiedCount++;
                }
            } catch (error) {
                console.log(error, ri, si, possibleRows, possibleSeats)
            }
        }
    }
    return occupiedCount;
}

function LoopThroughRows(rowsToLoop) {
    var newRows = [];
    var changedSeats = 0;

    for (var i = 0; i < rowsToLoop.length; i++) {
        var row = rowsToLoop[i].slice(), newRow = '';
        for (var r = 0; r < row.length; r++) {
            var occupiedCount = GetAdjacentOccupiedSeats(rowsToLoop, i, r);
            var newLetter = row[r];

            if (row[r] == 'L' && occupiedCount == 0) {
                newLetter = '#';
                changedSeats++;
            }
            if (row[r] == '#' && occupiedCount >= 4) {
                newLetter = 'L';
                changedSeats++;
            }
            newRow += newLetter;
        }
        newRows.push(newRow);
    }
    return {
        rowArray: newRows,
        seatsImpacted: changedSeats 
    };
}

function GetOccupiedCount(plan) {
    var totalOccupied = 0;
    for (var i = 0; i < plan.length; i++) {
        totalOccupied += (plan[i].match(/\#/g) || []).length;
    }
    return totalOccupied;
}

var loopRows = rows;
while (true) {
    var newResult = LoopThroughRows(loopRows);

    if (newResult.seatsImpacted == 0) {
        console.log(newResult.rowArray);
        console.log('final plan: ', GetOccupiedCount(newResult.rowArray), ' seats occupied');
        break;
    }
    loopRows = newResult.rowArray;
}

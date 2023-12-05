const fs = require('node:fs');

fs.readFile('./input/day5', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var lines = data.split('\n\n')
  //console.log(lines);
  var seeds = lines[0].split(':')[1].split(' ').filter(el => el).map(x => parseInt(x));
  console.log(seeds);
  var seedToSoilMap = lines[1].split(':')[1].split('\n').filter(el => el)
  .map(elm => {
    elm = elm.split(' ').filter(el => el);
    return { seed: parseInt(elm[1]), soil: parseInt(elm[0]), range : parseInt(elm[2])}
  });
  console.log(seedToSoilMap);
  var soilToFertilizerMap = lines[2].split(':')[1].split('\n').filter(el => el)  .map(elm => {
    elm = elm.split(' ').filter(el => el);
    return { soil: parseInt(elm[1]), fertilizer: parseInt(elm[0]), range : parseInt(elm[2])}
  });
  var fertilizerToWaterMap = lines[3].split(':')[1].split('\n').filter(el => el)
  .map(elm => {
    elm = elm.split(' ').filter(el => el);
    return { fertilizer: parseInt(elm[1]), water: parseInt(elm[0]), range : parseInt(elm[2])}
  });
  var waterToLightMap = lines[4].split(':')[1].split('\n').filter(el => el)  .map(elm => {
    elm = elm.split(' ').filter(el => el);
    return { water: parseInt(elm[1]), light: parseInt(elm[0]), range : parseInt(elm[2])}
  });
  var lightToTemperatureMap = lines[5].split(':')[1].split('\n').filter(el => el)  .map(elm => {
    elm = elm.split(' ').filter(el => el);
    return { light: parseInt(elm[1]), temperature: parseInt(elm[0]), range : parseInt(elm[2])}
  });
  var temperatureToHumidityMap = lines[6].split(':')[1].split('\n').filter(el => el)  .map(elm => {
    elm = elm.split(' ').filter(el => el);
    return { temperature: parseInt(elm[1]), humidity: parseInt(elm[0]), range : parseInt(elm[2])}
  });
  var humidityToLocationMap = lines[7].split(':')[1].split('\n').filter(el => el)  .map(elm => {
    elm = elm.split(' ').filter(el => el);
    return { humidity: parseInt(elm[1]), location: parseInt(elm[0]), range : parseInt(elm[2])}
  });
  //console.log(temperatureToHumidityMap)

  var mappedSeeds = seeds.map(seed => {
    var soilValue = seed;
    var fertValue = seed;
    var waterValue = seed;
    var lightValue = seed;
    var tempValue = seed;
    var humidValue = seed;
    var locationValue = seed;

    seedToSoilMap.forEach(sts => {
      if (seed <= sts.seed + sts.range && seed >= sts.seed) {
        soilValue = sts.soil + (seed - sts.seed);
        console.log('seed', seed, 'sts', sts, 'soilValue', soilValue);
      }
    });
    fertValue = soilValue;
    soilToFertilizerMap.forEach(stf => {
      if (soilValue <= stf.soil + stf.range && soilValue >= stf.soil) {
        fertValue = stf.fertilizer + (soilValue - stf.soil);
        console.log('soilValue', soilValue, 'stf', stf, 'fertValue', fertValue);
      }
    });
    waterValue = fertValue;
    fertilizerToWaterMap.forEach(ftw => {
      if (fertValue <= ftw.fertilizer + ftw.range && fertValue >= ftw.fertilizer) {
        waterValue = ftw.water + (fertValue - ftw.fertilizer);
        console.log('fertValue', fertValue, 'ftw', ftw, 'waterValue', waterValue);
      }
    });
    lightValue = waterValue;
    waterToLightMap.forEach(wtl => {
      if (waterValue <= wtl.water + wtl.range && waterValue >= wtl.water) {
        lightValue = wtl.light + (waterValue - wtl.water);
        console.log('waterValue', waterValue, 'wtl', wtl, 'lightValue', lightValue);
      }
    });
    tempValue = lightValue;
    lightToTemperatureMap.forEach(ltt => {
      if (lightValue <= ltt.light + ltt.range && lightValue >= ltt.light) {
        tempValue = ltt.temperature + (lightValue - ltt.light);
        console.log('lightValue', lightValue, 'ltt', ltt, 'tempValue', tempValue);
      }
    });
    humidValue = tempValue;
    temperatureToHumidityMap.forEach(tth => {
      if (tempValue <= tth.temperature + tth.range && tempValue >= tth.temperature) {
        humidValue = tth.humidity + (tempValue - tth.temperature);
        console.log('tempValue', tempValue, 'tth', tth, 'humidValue', humidValue);
      }
    });
    locationValue = humidValue;
    humidityToLocationMap.forEach(htl => {
      if (humidValue <= htl.humidity + htl.range && humidValue >= htl.humidity) {
        locationValue = htl.location + (humidValue - htl.humidity);
        console.log('humidValue', humidValue, 'htl', htl, 'locationValue', locationValue);
      }
    });

    return { seed, soilValue, fertValue, waterValue, lightValue, tempValue, humidValue, locationValue }

  });

  console.log(mappedSeeds.sort((a, b) => { return b.locationValue - a.locationValue }));

});

function mowYard(name, callback) {
  setTimeout(function () {
    console.log(`${name} mowed the yard.`);
    callback();
  }, 2000);
}

function weedEat(name, callback) {
  setTimeout(function () {
    if (Math.random() < 0.3) {
      console.log(`${name} fell asleep.`);
    } else {
      console.log(`${name} finished using the weed eater`);
      callback();
    }
  }, 1500);
}

function trimHedges(name, callback) {
  setTimeout(function () {
    if (Math.random() < 0.5) {
        console.log(`${name} fell asleep.`);
    } else {
    console.log(`${name} finished trimming the hedges.`);
    callback();
    }
  }, 1000);
}

function collectWood(name, callback) {
  setTimeout(function () {
    if (Math.random() < 0.6) {
        console.log(`${name} fell asleep.`);
    } else {
    console.log(`${name} finished collecting wood.`);
    callback();
    }
  }, 2500);
}

function waterGarden(name, callback) {
  setTimeout(function () {
    if (Math.random() < 0.7) {
        console.log(`${name} fell asleep.`);
    } else {
    console.log(`${name} finished watering garden.`);
    callback();
    }
  }, 500);
}

function doSummerChores(name) {
  mowYard(name, function () {
    weedEat(name, function () {
      trimHedges(name, function () {
        collectWood(name, function () {
          waterGarden(name, function () {
            console.log(`${name} finished all summer chores!`);
          });
        });
      });
    });
  });
}

doSummerChores('Chris');
function mowYard(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                console.log(`${name} fell asleep.`);
                reject(new Error(`${name} fell asleep.`));
            } else {
                console.log(`${name} finished mowing the yard.`);
                resolve();
            }
            }, 2000);
        });
  }


function weedEat(name, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${name} fell asleep.`));
            } else {
                console.log(`${name} finished using the weed eater.`);
                resolve();
            }
            }, 1500);
        });
}

function trimHedges(name, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${name} fell asleep.`));
            } else {
                console.log(`${name} finished trimming the hedges.`);
                resolve();
            }
            }, 1000);
        });
}

function collectWood(name, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${name} fell asleep.`));
            } else {
                console.log(`${name} finished collecting the wood.`);
                resolve();
            }
            }, 2500);
        });
}

function waterGarden(name, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${name} fell asleep.`));
            } else {
                console.log(`${name} finished watering garden.`);
                resolve();
            }
            }, 500);
        });
}

function doSummerChores(name) {
    mowYard(name)
        .then(() => weedEat(name))
        .then(() => trimHedges(name))
        .then(() => collectWood(name))
        .then(() => waterGarden(name))
        .then(() => {
            console.log(`${name} finished all summer chores!`);
        })
        .catch((error) => {
            console.log(error.message);
        });
}

doSummerChores("Chris");
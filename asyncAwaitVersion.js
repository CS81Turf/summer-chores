function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
                console.log(`${name} finished mowing the yard.`);
                resolve();
            }, 2000);
        });
    }
  


function weedEat(name) {
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

function trimHedges(name) {
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

function collectWood(name) {
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

function waterGarden(name) {
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

async function doSummerChores(name) {
    try {
        await mowYard(name);
        await weedEat(name);
        await trimHedges(name);
        await collectWood(name);
        await waterGarden(name);
        console.log(`${name} finished all chores!`);
    } catch (error) {
        console.error(error.message);
    }
}

doSummerChores("Chris");
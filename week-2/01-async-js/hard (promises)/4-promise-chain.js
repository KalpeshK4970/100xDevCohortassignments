/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

// function wait1(t) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), t * 1000);
//     });
// }

// function wait2(t) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), t * 1000);
//     });
// }

// function wait3(t) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), t * 1000);
//     });
// }

// function calculateTime(t1, t2, t3) {
//     const start = Date.now();
    
//     return wait1(t1)
//         .then(() => wait2(t2))
//         .then(() => wait3(t3))
//         .then(() => {
//             const end = Date.now();
//             return end - start;
//         });
// }

// module.exports = calculateTime;

function wait1(t) {
    const p = new Promise((res, rej) => {
        setTimeout(() => res(), t * 1000);
    });

    return p;
}

function wait2(t) {
    const p =  new Promise((res, rej) => {
        setTimeout(() => res(), t * 1000);
    });

    return p;
}

function wait3(t) {
    const p = new Promise((res, rej) => {
        setTimeout(() => res(), t * 1000);
    });

    return p;
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();

    // Sequentially call the promises
    return wait1(t1)
        .then(() => wait2(t2))
        .then(() => wait3(t3))
        .then(() => {
            const end = Date.now();
            const elapsed = end - start;
            return elapsed;
        });
}

module.exports = calculateTime;

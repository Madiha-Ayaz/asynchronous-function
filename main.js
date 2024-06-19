"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Its nice to meet you. ...");
        }, 2000);
    });
}
let P1 = fetchGreeting();
P1.then((res) => {
    console.log(res);
});
function simulateTask() {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task completed");
    }, 1000);
}
simulateTask();
function fetchData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
let p2 = fetchData1();
p2.then((res) => {
    console.log(res);
});
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldResolve = true;
            if (shouldResolve) {
                resolve("Data fetched sucessfully");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
let promise1 = fetchWithError();
promise1.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 1000);
    });
}
function processData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Data processed failed");
        }, 2000);
    });
}
function executeSequentially(fetchDataCallback, processDataCallback) {
    fetchDataCallback().then((res) => {
        console.log(res);
        return processDataCallback();
    }).catch((rej) => {
        console.log(rej);
    });
}
executeSequentially(fetchData, processData);

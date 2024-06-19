 // Question 1: Write a simple asynchronous TypeScript function fetchGreeting that returns a 
//greeting message after a 2-second delay using setTimeout.
 
 
 async function fetchGreeting (){
return new Promise((resolve) => {
    setTimeout (()=>{
resolve("Its nice to meet you. ...");
    },2000)
});
}
 let P1 = fetchGreeting()
 P1.then((res)=>{
    console.log(res)
 })






//Question 2: Write a function simulateTask that simulates a task by logging "Task started", 
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay


function simulateTask(){
    console.log("Task started")
setTimeout(()=>{
console.log("Task completed")
    },1000)
}
simulateTask()







//QUESTION 3: Write a function fetchData that returns a Promise which resolves with the string 
// "Data fetched successfully!" after a delay of 1 second

function fetchData1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
resolve("Data fetched successfully!")
        },1000)
    })
}
let p2=fetchData1()
p2.then((res)=>{
    console.log(res)
})






//Question 4: Write a function fetchWithError that returns a Promise. It should randomly either 
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a 
// delay of 1 second. Handle the rejection using .catch

function fetchWithError(){
return new Promise ((resolve, reject) => {
 
    setTimeout(()=>{
        let shouldResolve = true; 
         if(shouldResolve){
            resolve("Data fetched sucessfully")
        }
    else{
        reject("Data fetch failed!")
    }
    },1000)
})
}
let promise1 = fetchWithError();
promise1.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});





//Qyuestion 5: Write a function executeSequentially that executes two functions fetchData and 
//processData sequentially using Promises, and logs the results in the order they are 
//called

function fetchData(){
    return new Promise((resolve, reject) =>{

        setTimeout(()=>{
            resolve("Data fetched successfully")
        },1000)
    })
}

function processData(){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject("Data processed failed")
        },2000)
    })
}
function executeSequentially(fetchDataCallback:any,processDataCallback:any){

    fetchDataCallback().then((res:string)=>{
         console.log(res)  
         return processDataCallback()
        }) .catch((rej:string)=>{
            console.log(rej)
           
        })
    }
    executeSequentially(fetchData,processData)
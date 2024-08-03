/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const before = new Date().getTime();
     let res = 0;
    for(let i = 1 ;i <= n ;i++){
            res += i;
    }
    const after = new Date().getTime();
    
    let totalTime = after-before;
    console.log(totalTime);
    return totalTime ;
}

calculateTime(1e5);
calculateTime(1e6);
calculateTime(1e7);
calculateTime(1e9);
calculateTime(100000000000000); // takes alot of time increases exponentially
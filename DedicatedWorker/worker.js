onmessage = function (){
    let sum = 0;
    for (let i = 0; i < 50000000000; i++) {
        sum += i;
        
    }
    postMessage(`Finished! Sum is ${sum}`)
};
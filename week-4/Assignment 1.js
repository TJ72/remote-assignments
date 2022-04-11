// Callback Function

function delayedResult(n1, n2, delayTime, callback) {
    const result = n1 + n2;
    window.setTimeout(callback, delayTime, result);
}

// Sample Input 1:
delayedResult(4, 5, 3000, function(result) {
    console.log(result);
});

// Sample Input 2:
delayedResult(-5, 10, 2000, function(result){
    window.alert(result);
});
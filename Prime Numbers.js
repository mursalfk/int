var outerForLoopOne=0;
var innerForLoopOne=0;
var outputforloop=0;
function primeNumbers() {
	console.log("First 10 prime numbers are:")
    prime = [];
    for (var i = 2; prime.length < 10; i++) {
		var notPrime = false;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                notPrime = true;
                break;
            }
        innerForLoopOne=innerForLoopOne+1
        }
        if (notPrime === false) {
            prime.push(i);
        }
    outerForLoopOne=outerForLoopOne+1;
    }
    for(var j=0;j<prime.length;j++)
	{
		console.log("No."+(j+1)+':      '+prime[j]);
        outputforloop=outputforloop+1;
    }
}

primeNumbers();
console.log("The Outer For Loop is being executed "+outerForLoopOne+" times.");
console.log("The Inner For Loop is being executed "+innerForLoopOne+" times.");
console.log("The Output For Loop is being executed "+outputforloop+" times.");
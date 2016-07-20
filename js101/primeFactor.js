function facPrime(n){

var lp = 0;         // largest prime
var prime = true;   


for( i = 1; i < Math.sqrt(n); i++){  // check for every number til sqrt of the given number
	if( n%i === 0){                    // must be a divisor
		prime = true; 	                 // Set prime to true
		
		for( j=2; j < Math.sqrt(i); j+=1 ){ //if divisable is not a prime
			if( i%j === 0){
				prime = false;
			}
		}
		if(prime){
			lp = i;
		}
	}
}
return lp;
}

facPrime(600851475143);

function evenFibo(num){
  var n1=1;
  var n2=2;
  var naux=0;
  var r=0;
  
  while (n2 < num){
    if (n2 % 2 == 0){
      r += n2;
    }
  
    naux = n1;
    n1 = n2;
    n2 = naux + n2;
  }
  return r;
}

evenFibo(4000000);

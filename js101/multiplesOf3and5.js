function m35(num){
  var r=0;
  
  for (var i=1; i<num; i++){
    if (i % 3 == 0){
      r += i;
      
    }else if(i % 5 == 0){
      r +=i;
    }
  }
  document.write(r);
  return r;
}

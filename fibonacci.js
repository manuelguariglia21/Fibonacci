function fibonacci(posizione){
   let rs = null;
   if(posizione === 1 || posizione === 2){
      rs = 1;
   }
   else if(posizione === 3){
      rs = 2;
   }
   else{
      let n1 = 1;
      let n2 = 1;
      for(let p = 3; p < posizione; p++){
         let z = n1 + n2;
         n1 = n2;
         n2 = z;
         rs = n1 + n2;
      }    
   }
   
   return rs;
}

// randomly created id for each customer and id start shope name "OPTICAL EXPRESS".
//its start from "OPEX"+ 7 digits randmon numbers.  

//https://script.google.com/home/projects/1f88TAMD92o273VhhhBzMDxm5xqKJEAsj5vHZsVc_L6V33n4-gqRLJkUv/edit

function membership_Id(len){

  
  const numbers="0123456789";
  
  let id="OPEX";
  
  console.log(len);
  
  if(!Number(len)){
    
      throw new Error("The Length need to be on integer");
    
  }
  
  for(var i=0;i<len;i++){
   
    id +=numbers.charAt(Math.floor(Math.random() * numbers.length));
    
  }
  
  return id;
}

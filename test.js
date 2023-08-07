function changeQuantity(id , isPositive, isChange){
        //  const id = document.getElementById(id).id;
        let finalNumber;
         const idNumber = parseInt(id);
         if (isPositive == true && isChange == true){
             finalNumber = idNumber+1;
         }
         else if (isPositive == false && isChange == true){
             finalNumber = idNumber-1;
         }
         else if (isPositive == true && isChange == false || isPositive == false && isChange == false  )
            {
          finalNumber = idNumber;
             }
        //  document.getElementById(id).id = finalNumber;;
         return finalNumber;
      }
      
 var isWork = changeQuantity(5,false,true);
 console.log(isWork);

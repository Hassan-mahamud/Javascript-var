 
 var number = document.getElementById('num');
 
  
  function go() {
  
   var rondomNumber = Math.random();
   rondomNumber = Math.floor(rondomNumber * 101);
   
   if (rondomNumber > 50) {
    number.innerText = rondomNumber + '%';
    number.style.background = 'green';
    }   else {
     number.innerText = rondomNumber + '%';
     number.style.background = 'red';
    }
   
   
  }
  

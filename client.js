 console.log('Client-side code running');
// const button = document.getElementById('myButton');


//  button.addEventListener('click', function(e) {
//  var email = document.getElementById('email');
 
//       var mailSprava = document.getElementById('sprava');
//    var obj = new Object();
//   obj.Email = email.value;
//   obj.sprava = mailSprava.value;
//  var string = JSON.stringify(obj);
// console.log(JSON.parse(string));
//  });
  
  
   
  

var myform_el = document.getElementById("myForm")
myform_el.addEventListener("submit", function(evt){
  evt.preventDefault();

   var email = document.getElementById('email')
    var Sprava =  document.getElementById('sprava')
    var subject = document.getElementById('predmet')

    
  const data = {
    Email : email.value,
    predmet : subject.value,
    sprava : Sprava.value 
  };
  
console.log(data)


  fetch('http://localhost:8080', {

    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  
  })


  

  .then(response => response.json())
  
  .then(data => {
    console.log(data);
    if(data.status === "Ok") {
      alert("Úspešne poslané:" );
    }
    else alert("Daco zle." );
  })

  .catch((error) => {
    alert("Niečo nie je v poriadku")
    console.error('Error:', error);
  });    
});

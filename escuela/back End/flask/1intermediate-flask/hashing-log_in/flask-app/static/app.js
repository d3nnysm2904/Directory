window.addEventListener("load", function(){
    let checkbox  = document.getElementById('check');
    let x = document.getElementById('password');
    checkbox.addEventListener('change', function() {
        if(this.checked) {
            x.type = 'text'; 
        } else {
            x.type = 'password'; 
        }
    });
  });


// 
//   window.addEventListener("load", function(){
//     var checkbox  = document.getElementById('{{form.check.id}}');
//     var x = document.getElementById('{{form.password.id}}');
//     checkbox.addEventListener('change', function() {
//         if(this.checked) {
//             x.type = 'text'; 
//         } else {
//             x.type = 'password'; 
//         }
//     });
// });


// {% block content %}
// {{ form.checkbox(onchange="doStuff()") }}
// {{ form.required() }}
// <script>
// function doStuff(){
//   var checked = document.getElementById('checkbox').checked
//   if (checked){
//     document.getElementById('required').disabled = true
//   } else {
//     document.getElementById('required').disabled = false
//   }
// }
// doStuff()
// </script>

// {% endblock %}
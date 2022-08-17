//adding object to localStorage

// const preferences = {
//     fontSize:'18px',
//     favoriteColor:'purple'
// }

// localStorage.setItem('preferences',JSON.stringify(preferences))

// //when u look at console it gives back an string "[object,Object]"
// //JSON.stringify({a:1, b:true })

// const obj =JSON.parse(localStorage.getItem('preferences'))

// const {favoriteColor}=JSON.parse(localStorage.preferences)
// document.body.style.backgroundColor= favoriteColor

const toggleSwitch = document.querySelector('input[type="checkbox"]');

// CHECK TO SEE IF DARK MODE ENABLED IS IN LOCAL STORAGE!
if (localStorage.getItem('darkModeEnabled')) {
  document.body.className = 'dark';
  toggleSwitch.checked = true;
}

// When we click the switch, update local storage & change the className on the body
toggleSwitch.addEventListener('click', function (e) {
  const { checked } = toggleSwitch;
  if (checked) {
    localStorage.setItem('darkModeEnabled', true);
  } else {
    localStorage.removeItem('darkModeEnabled');
  }
  document.body.className = checked ? 'dark' : ''

})

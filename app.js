
function DayOfBirth() {
  let today = new Date();
  console.log(today);
  
  let enterDay = prompt('Enter your day of birth: ');
  let enterMonth = prompt('Enter your month of birth: ');
  
  if (enterDay === today.getDate() && enterMonth === today.getMonth()) {
    console.log("Happy Birthday!");
  } else {
    console.log("Your birth is not today.");
  }
}











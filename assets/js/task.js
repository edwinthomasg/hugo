document.addEventListener('DOMContentLoaded', () => {
    console.log("page gets loaded ...")
    console.log("Task executed from asset directory")
})

// add two numbers
function addNumbers(a,b) {
    return a+b;  
  }
  // subtract two numbers
  function subNumbers(a,b) {
    return a-b;
  }
  // display name
  function displayName(name) {
    console.log("Name : ",name);
  }
  
  addNumbers(10,20);
  subNumbers(20,30);
  displayName("edwin");

  let name = prompt("Please enter your name");
   let result = document.getElementById('myName').innerHTML = name;
 
  
  let days = [
    "pazar",
    "pazartesi",
    "salı",
    "çarşamba",
    "perşembe",
    "cuma",
    "cumartesi",
  ];

  function showTime() {
    let date = new Date();
    document.getElementById("myClock").innerHTML =
      date.toLocaleTimeString() + " " + days[date.getDay()];
    setTimeout(showTime, 1000);
  }
  showTime();
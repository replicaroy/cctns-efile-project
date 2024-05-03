document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
      document.querySelector('.loader').style.display = 'none'
      document.querySelector('.loader-body').style.display = 'none'
      document.getElementById('overlay').style.display = 'block';
  }, 1000);

  document.getElementById('overlay').addEventListener("click", function () {
      document.querySelector('#overlay').style.display = 'none';
  });
});

document.getElementById("close-btn").addEventListener("click", function () {
  document.querySelector('#overlay').style.display = 'none';
});




document.addEventListener("DOMContentLoaded", function() {
    openForm('form1');
  });
  
  function openForm(formName) {
    var i, formContainer;
    formContainer = document.getElementsByClassName("form");
    for (i = 0; i < formContainer.length; i++) {
      formContainer[i].style.display = "none";
    }
    document.getElementById(formName).style.display = "block";
  
    var buttons = document.getElementsByClassName("main-btn2");
    for (i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");     
    }
       document.querySelector('[onclick="openForm(\'' + formName + '\')"]').classList.add("active");

  }
  

function opens(){
  let ul = document.querySelector('.navbar ul') 
    ul.style.right = 0
}

function closes(){
  let ul = document.querySelector('.navbar ul') 
    ul.style.right = '-300px'
 
}

// watch function ///
function updateClock() {
  // Get the current date and time
  var now = new Date();

  // Format the time components (hours, minutes, seconds)
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Pad single digit minutes and seconds with leading zeros
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Display the time in HH:MM:SS format
  var timeString = hours + ':' + minutes + ':' + seconds;

  // Update the HTML element with id="clock" with the current time
  document.getElementById('clock').textContent = timeString;
}

// Call updateClock every second (1000 milliseconds)
setInterval(updateClock, 1000);


// date function

function updateClockAndDate() {
  var now = new Date();

  // Format the time components (hours, minutes, seconds)
 
  // Format the date components (day, month, year)
  var day = now.getDate();
  var month = now.getMonth() + 1; // Months are zero-based
  var year = now.getFullYear();

  // Pad single digit day and month with leading zeros
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;

  // Display the date and time
  var dateTimeString =  day + '-' + month + '-' + year;

  // Update the content of the div with id "dateTimeContainer" with the current date and time
  document.getElementById('dateTimeContainer').textContent = dateTimeString;
}

// Call updateClockAndDate every second (1000 milliseconds)
setInterval(updateClockAndDate, 1000);


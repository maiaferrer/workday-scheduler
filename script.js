// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. --- loads the page only and if jquery is able to be ran -- done

$(document).ready(function () {
  // current day function that uses dayjs for formatting
  $("#currentDay").text(dayjs().format('dddd, MMMM D, YYYY'));

// Calls on the .time-block class and performs the function to apply past, present and future style classes
$(".time-block").each(function(){
// changes the format from a string in the html to an integer and day js for fromating the hour
  var currentHour = parseInt(dayjs().format('H')); 
// splits the hours into an array, nd again changes to integers
  var blockHour = parseInt($(this).attr("id").split("-")[1]);
// if statement for box styling
  if(blockHour < currentHour)
  {
    $(this).addClass("past");
  }
  else if(blockHour === currentHour)
  {
     $(this).removeClass("past");
     $(this).addClass("present");
  }
  else{
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
})



  // trying to saves responses to local storage:
  $("button").click(function () {
    var userInput = $('#input').text();
    localStorage.getItem("todo",userInput)
  });
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
});

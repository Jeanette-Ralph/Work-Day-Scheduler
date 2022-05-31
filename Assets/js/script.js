// defining variables globally
var currentDate = moment().format("dddd, MMMM Do YYYY");
var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var rowTimeRef = moment().format("HH:mm:ss a");
var saveBtn = $('#saveBtn');

// current time being displayed in header
$(function currentDate() {
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
    console.log(currentDate);
});

// function to check if a row time block area is in the past/ present or future
$(function timeChecker() {
    // need a reference variable to the current time
    // made it 24 hr time so it is easy to compare
    var rowTimeRef = moment().format("HH:mm:ss A");
    // need to create a var that will trach the row id numbers

    // create an if statement to check if time is past 
        // call the past style to display
    if ( rowTime < rowTimeRef) {
        eventRow == 'past';
    }

    // create an if statement to check if time is present
        // call the present style to display
    if (rowTime = rowTimeRef) {
        eventRow == 'present';
    }

    // create an if statement to check if time is future
        // call the future style to display
    if (rowTime = rowTimeRef) {
        eventRow == 'future';
    }

});

// saving to local storage function
saveBtn.on('click', function()
{
    // saving the value to local storage 
    var eventInput = $('#event');
    localStorage.setItem('eventToDo', eventInput.val());

    // calling it by eventToDo
    var storedEvent = localStorage.getItem("eventToDo");
    return storedEvent;
}
);

// making sure thee input stays on the page after it is refreshed

$(function pageRefresh() {
    document.getElementById('event').innerHTML = localStorage.getItem('eventToDo');

});

window.onload = pageRefresh; 

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I refresh the page
// THEN the saved events persist 
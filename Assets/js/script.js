// defining variables globally
var currentDate = moment().format("dddd, MMMM Do YYYY");
var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var rowTime = moment().format("HH:mm:ss a");
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
    var rowTime = moment().format("HH:mm:ss A");

    // create an if statement to check if time is past 
        // call the past style to display
    if ( eventRow < rowTime) {
        eventRow == 'past';
    }

    // create an if statement to check if time is present
        // call the present style to display
    if (eventRow = rowTime) {
        eventRow == 'present';
    }

    // create an if statement to check if time is future
        // call the future style to display
    if (eventRow = rowTime) {
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


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I refresh the page
// THEN the saved events persist 
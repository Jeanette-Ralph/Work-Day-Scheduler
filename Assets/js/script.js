$(document).ready(function () {

    // defining variables globally
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    var rowTimeRef = moment().hour();
    var saveBtn = $('.save-button');
    var rowTime = $('.hour');

    // current time being displayed in header
    function displayDate() {
        var currentDate = moment().format("dddd, MMMM Do YYYY");
        $("#current-day").text(currentDate);
        console.log(currentDate);
    };


    // function to check if a row time block area is in the past/ present or future
    function timeChecker() {

        // using a for each loop to grab each id for the hour block
        rowTime.each(function () {


            // getting the value of the unique id for the time
            var hourTime = $(this).attr('id');
            var hourNumber = parseInt(hourTime, 10);

            // getting the text area that will change color
            var textBlock = $(this).siblings('.note-box');

            // checking if hour number is less than our referance var
            // adding the past class
            if (hourNumber < rowTimeRef) {
                textBlock.addClass('past');
            }

            // checking if hour number is equal to our referance var
            // removing the past class and adding the present class
            if (hourNumber === rowTimeRef) {
                textBlock.removeClass('past');
                textBlock.addClass('present');
            }

            // checking if hour number is greater than our referance var
            // removing the other styles and adding the future style
            if (hourNumber > rowTimeRef) {
                textBlock.removeClass('past');
                textBlock.removeClass('present');
                textBlock.addClass('future');
            }
        })
    };

    displayDate();
    timeChecker();



    // saving to local storage function + keeping input on page
    // for each loop like above
    // update save button to select class
    // get text input same as button
    // select the one that matches

    saveBtn.on('click', function savingInput() {
        // added form-control class to the save button in index

        // selecting the class on the input tag
        var inputs = $(".form-control");

        // added the same time id to the button and the form, but not the button div

        // doing a for each loop
        // need to select the siblings of the div
        // divs dont have their own value
        inputs.each(function () {
            var value = $(this).siblings().value;
            var time = $(this).siblings().attr('id');
            localStorage.setItem(time, value);

        })

    });

    function getInput() {
        // selecting the class on the input tag
        var inputs = $(".form-control");

        // added the same time id to the button and the form, but not the button div

        // doing a for each loop
        inputs.each(function () {
            var time = $(this).attr('id');
            // getting input for this time

            // get item from local storage
            var value = localStorage.getItem(time);
        })

    }
    getInput();

});








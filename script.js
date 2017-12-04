/*
 * Author: Juan Daccarett
 * Date: 12/03/2017
 * Company: Revolution Prep
*/

/**
 * Detects the proper length is passed in input in Real time.
 * @funcName detect_maxlength
 * @param {String} element of input to validate (#id) or (.class);
 * @param {int} the number of max chars desired.
 * @param {String} element we are changing when input is valid.
 */
function detect_maxlength(element, maxchars, elementToChange) {
    $(element).keyup(function () {
        if ($(element).val().length > 0 && $(element).val().length <= maxchars) {
            $(elementToChange).css({
                'color': 'lawngreen'
            });
        }
        else $(elementToChange).css({
            'color': 'red'
        });
    });
}
/**
 * Detects input is passed only letters in Real time.
 * @funcName detect_onlyLetters
 * @param {String} element of input to validate (#id) or (.class);
 * @param {String} element we are changing when input is valid.
 */
function detect_onlyLetters(element, elementToChange) {
    $(element).keyup(function () {
        if (/^[a-zA-Z]+$/.test($(element).val())) {
            $(elementToChange).css({
                'color': 'lawngreen'
            });
        }
        else $(elementToChange).css({
            'color': 'red'
        });
    });
}
/**
 * In Real time it detects the input is a valid email using Regex.
 * @funcName detectValidEmail
 * @param {String} element of input to validate (#id) or (.class);
 * @param {String} element we are changing when input is valid.
 */
function detectValidEmail(element, elementToChange) {
    $(element).keyup(function () {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test($(element).val()) === true) {
            $(elementToChange).css({
                'color': 'lawngreen'
            });
        }
        else $(elementToChange).css({
            'color': 'red'
        });
    });
}

// Display Thank You Message when form is valid and submitted.
$(document).ready(function() {
    $('.form_cont').submit(function() {
        $.ajax({
            //type: 'POST',
            url: " ",
            data: $(".form_cont").serialize(),
            success: function( ) {
                var d = document.getElementById("message");
                d.className += " slideDown";
            }
        })
        return false;
    });
});

//Function Calls for form validation in Real time.
detect_maxlength("#name", 40, ".nameMaxChar_err");
detect_maxlength("#email", 50, ".emailMaxChar_err");
detect_onlyLetters("#name", ".letterOnly_err");
detectValidEmail("#email", ".validEmail_err");









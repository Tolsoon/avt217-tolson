$(document).ready(function() {

    lever();

    $('.switch').click(function() {

      lever();

    });


});



function lever(){

        var slotArray1 = [".seven", ".square" , ".circle"];
        var slotArray2 = [".seven2", ".square2" , ".circle2"];
        var slotArray3 = [".seven3", ".square3" , ".circle"];

        var number1 = Math.floor(Math.random() * 3);
        var number2 = Math.floor(Math.random() * 3);
        var number3 = Math.floor(Math.random() * 3);

        $(slotArray1[number1]).removeClass('hidden');
        $(slotArray2[number2]).removeClass('hidden');
        $(slotArray3[number3]).removeClass('hidden');

      }

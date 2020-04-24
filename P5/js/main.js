$(document).ready(function() {
   var number1 = Math.floor(Math.random() * 3);
   var number2 = Math.floor(Math.random() * 3);
   var number3 = Math.floor(Math.random() * 3);

   	console.log(number1);
    console.log(number2);
    console.log(number3);

    var slotArray1 = [".seven", ".square", ".circle"];
    var slotArray2 = [".seven2", ".square2", ".circle2"];
    var slotArray3 = [".seven3", ".square3", ".circle3"];

    console.log(slotArray1[number1]);
    console.log(slotArray2[number2]);
    console.log(slotArray3[number3]);

    $(slotArray1[number1]).toggleClass('hidden');
    $(slotArray2[number2]).toggleClass('hidden');
    $(slotArray3[number3]).toggleClass('hidden');








});

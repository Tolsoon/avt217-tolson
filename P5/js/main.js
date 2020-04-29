$(document).ready(function() {

    lever();

    $('.switch').click(function() {

      lever();

    });


});


function addHidden(array){

  $(array[0]).addClass('hidden');
  $(array[1]).addClass('hidden');
  $(array[2]).addClass('hidden');


}

function checkWin(number1,number2,number3){
  if(number1 == number2 && number1 == number3){
      return true;
    }

}

function lever(){
      var number1 = Math.floor(Math.random() * 3);
      var number2 = Math.floor(Math.random() * 3);
      var number3 = Math.floor(Math.random() * 3);
      console.log(number1);
      console.log(number2);
      console.log(number3);

        var slotArray1 = [".seven", ".square" , ".circle"];
        var slotArray2 = [".seven2", ".square2" , ".circle2"];
        var slotArray3 = [".seven3", ".square3" , ".circle3"];
        $('.win').addClass('hidden');
        if (number1 == 0){
          addHidden(slotArray1);
          $(slotArray1[0]).removeClass('hidden');
        }
        else if (number1 == 1){
          addHidden(slotArray1);
          $(slotArray1[1]).removeClass('hidden');
        }
        else if (number1 == 2){
          addHidden(slotArray1);
          $(slotArray1[2]).removeClass('hidden');
        }

        if (number2 == 0){
          addHidden(slotArray2);
          $(slotArray2[0]).removeClass('hidden');
        }
        else if (number2 == 1){
          addHidden(slotArray2);
          $(slotArray2[1]).removeClass('hidden');
        }
        else if (number2 == 2){
          addHidden(slotArray2);
          $(slotArray2[2]).removeClass('hidden');
        }

        if (number3 == 0){
          addHidden(slotArray3);
          $(slotArray3[0]).removeClass('hidden');
        }
        else if (number3 == 1){
          addHidden(slotArray3);
          $(slotArray3[1]).removeClass('hidden');
        }
        else if (number3 == 2){
          addHidden(slotArray3);
          $(slotArray3[2]).removeClass('hidden');
        }

        if(checkWin(number1,number2,number3)){
          $('.win').removeClass('hidden');
        }




      }

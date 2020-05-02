$(document).ready(function() {

    lever();


    $('.switch').click(function() {

      spin()
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

function spin(){

    var counter = 0;
    var i = 0;


    var slotArray1 = [".seven", ".square" , ".circle"];
    var slotArray2 = [".seven2", ".square2" , ".circle2"];
    var slotArray3 = [".seven3", ".square3" , ".circle3"];

    for ( i in slotArray1){
      addHidden(slotArray1);
      $(slotArray1[i]).removeClass('hidden');
      addHidden(slotArray1);
      addHidden(slotArray2);
      $(slotArray2[i]).removeClass('hidden');
      addHidden(slotArray2);
      addHidden(slotArray3);
      $(slotArray3[i]).removeClass('hidden');
      addHidden(slotArray3);
      i++;
      counter++;
      if (counter > slotArray1.length){
        i = 0;
        counter = 0;
        break;
      }
    }

    for ( i in slotArray2){
      addHidden(slotArray2);
      $(slotArray2[i]).removeClass('hidden');
      addHidden(slotArray2);
      addHidden(slotArray3);
      $(slotArray3[i]).removeClass('hidden');
      addHidden(slotArray3);
      i++;
      counter++;
      if (counter > slotArray2.length){
        break;
      }
    }

    for ( i in slotArray3){
      addHidden(slotArray3);
      $(slotArray3[i]).removeClass('hidden');
      addHidden(slotArray3);
      i++;
      counter++;
      if (counter > slotArray3.length){
        break;
      }
    }

  


}


function lever(){
      var number1 = Math.floor(Math.random() * 3);
      var number2 = Math.floor(Math.random() * 3);
      var number3 = Math.floor(Math.random() * 3);


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

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
    var lcd = new five.LCD({
            pins: [7, 8, 9, 10, 11, 12],
            backlight: 13,
            rows: 2,
            cols: 16
        });

var led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 4
    }
  });

var temp = new five.Thermometer({
      controller: 'TMP36',
      pin: 'A0'
  })



 temp.on('change', function ()

 {

  
  setTimeout(function(){

     if(temp.celsius >= 25){
        lcd.clear();
        lcd.print("zu warm" + " " + temp.celsius + " " + "Grad");
        led.color("#FF0000");
        }

     else if(temp.fahrenheit <= 22){
         lcd.clear();
         lcd.print("zu kalt" + " " + temp.celsius + " " + "Grad");
         led.color('#0000ff');
     }

     else{
          lcd.clear();
          lcd.print("perfekt" + " " + temp.celsius + " " + "Grad");
          led.color('#00cc00');
     }
    console.log(temp.celsius);
      
    }, 3000);


});

});
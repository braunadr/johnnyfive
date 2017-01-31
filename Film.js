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

    lcd.print("Temperatur: 23 C");
    lcd.setCursor(0,1);
    lcd.print("Luftfeuchte: 53%");
    led.color('#00cc00');
   

    setTimeout(function(){
    lcd.clear();
    lcd.print("Temperatur: 28 C");
    lcd.setCursor(0,1);
    lcd.print("Luftfeuchte: 20%");
    led.color('#FF0000');
    }, 10000)


});


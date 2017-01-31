var five = require("johnny-five");


five.Board().on("ready", function() {

 
  var led = new five.Led.RGB({
    pins: {
      red: 11,
      green: 10,
      blue: 9
    }
  });

  var temp = new five.Thermometer({
      controller: 'TMP36',
      pin: 'A0'
  })

  temp.on('change',function(){
     if(temp.celsius >= 25){
        led.color("#FF0000");
     }

     else if(temp.celsius <= 22){
        led.color('#0000ff');
     }

     else{
         led.color('#00cc00');
     }
       console.log(temp.celsius);
  });
  led.on();
});
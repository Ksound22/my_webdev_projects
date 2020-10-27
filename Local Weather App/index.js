$(document).ready(function(){
    $(".short").hide();
    if(navigator.geolocation) {
        var currentPosition = '';
        navigator.geolocation.getCurrentPosition(function(position){
            currentPosition = position;
            // set lat and lon
            var latitude = currentPosition.coords.latitude;
            var longitude = currentPosition.coords.longitude;
            //console.log(latitude, longitude)
            // console.log(currentPosition);
            var url = 'http://api.weatherstack.com/current?access_key=6a8ac2bdfd790106946af1152811931c&query=Ado-Ekiti';
            $.getJSON(url + latitude + "," + longitude, function(data){
                console.log(data);
               // JSON.stringify turns a JS object into
                // JSON text and stores the JSON text in a string
                var data = JSON.stringify(data);

                // JSON.parse turns a string of JSON text into a JS object 
                var json = JSON.parse(data);  

                var country = json.location.country;
                var city = json.location.name;   
                var state = json.location.region;

                var temp = json.current.temperature;
                //var temp = json.current.temp_f;
                var last_updated = json.current.last_updated//.replace('-', '');

                var cloudy = json.current.cloudcover;
                var pres = json.current.pressure;
                var water = json.current.precip;
                var ultra = json.current.uv_index;
                var humidity = json.current.humidity;
                var time = json.location.localtime.split(' ')[1]; 
                console.log(data);    
                $('#weather').html(city + ", " + state + ", " + country);

                if (temp < 18) {
                    $('.grey-jumbo').css({
                        backgroundImage: 'url(cold.jpg)'
                    });
                    $('.bgtext').html("Its a Cold Day...")
                } else if (temp > 10 && temp < 28) {
                    $('.grey-jumbo').css({
                        backgroundImage: 'url(sunny.jpg)'
                    });
                    $('.bgtext').html("Its a Sunny Day...")
                } else {
                    $('.grey-jumbo').css({
                        backgroundImage: 'url(gobi.jpg)'
                    });
                    $('.bgtext').html("Its a Really Hot Day...")
                }

                $("#info1").html("Time <br> " + time); 
                $("#info3").html("Temperature <br>" + temp + '&#8451');
                $("#info4").html("Presure <br> " + pres + "pa");
                $(".short").show();
                $("#info6").html("UV Index <br> " + ultra + "mW/sq Meter");
                //$("#info6").html("Pressure <br> " + pres + "pa");
                $("#num2").html("Precipitation <br> " + water + "mm");
                // Showing sky status
                if (cloudy <= 30) {
                    $("#info5").html('Clear Sky' + '<br>' + "Humidity " + humidity + '%');
                } else {
                    $('#info5').html('Cloudy Sky' + '<br>' + "Humidity " + humidity + '%')
                }
            })
        })
    }
})

// http://api.weatherstack.com/current?access_key=6a8ac2bdfd790106946af1152811931c&query=NewYork
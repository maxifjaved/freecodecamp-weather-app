(function ajaxWeatherRequest() {
    if (!navigator.geolocation) {
        alert('geo location not supported');
    } else {
        navigator
            .geolocation
            .getCurrentPosition(function (position) {
                var latitude = parseInt(position.coords.latitude);
                var longitude = parseInt(position.coords.longitude);
                $.ajax({
                    type: "GET",
                    url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=510f8aaba90b55aa4352ed533f7885d4',
                    success: function (result, status, xhr) {
                        console.log(result, status, xhr);
                        document
                            .getElementById('cityName')
                            .innerHTML = result.name + ', ' + result.sys.country;
                        document
                            .getElementById('temprature')
                            .innerHTML = Math.round(10 * (result.main.temp - 273.15)) / 10 + ' °C'; //Math.round((result.main.temp * 9) / 5 + 32);
                        document
                            .getElementById('tempratureType')
                            .innerHTML = result.weather[0].main; //Math.round((result.main.temp * 9) / 5 + 32);
                    }
                });
            });
    }

}());
var url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
	

$('#search').on('click', function() {
	searchCities();
});

function searchCities() {
	var cityName = $('#city-name').val(),
	    appid = "&APPID=296f7a5708ace85d40abe8fe971314b8",
	    units = "&units=metric",
	    language = "&lang=pl";


	$.ajax({
  		url: url + cityName + units + language + appid,
  		method: 'GET',
  		success: showCityWeather
  	});

    $('.container').show();
}

function showCityWeather(resp) {
    var result = '';

	$('#cities').append('<p>' + resp.city.name + '</p>');

	for (var i = 0; i < 40; i++) {
	   result += ' \
        <div class="row"> \
            <div class="col-lg-4"> \
                <p>' + resp.list[i].dt_txt + ' </p> \
            </div> \
            <div class="col-lg-4"> \
                <p>' + resp.list[i].main.temp + ' &degC</p> \
            </div> \
            <div class="col-lg-4"> \
                <p>' + resp.list[i].wind.speed + ' km/h</p> \
            </div> \
        </div>';
	}

    $('#weather-result').append(result);
}
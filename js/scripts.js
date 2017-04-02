var url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
	

$('#search').on('click', function() {
	searchCities();
});

function searchCities() {
	var cityName = $('#city-name').val(),
	appid = "&APPID=296f7a5708ace85d40abe8fe971314b8"

	$.ajax({
  		url: url + cityName + appid,
  		method: 'GET',
  		success: showCityWeather
  	});
}

function showCityWeather (resp) {
	$('#cities').append('<p>' + resp.city.name + '</p>');
}
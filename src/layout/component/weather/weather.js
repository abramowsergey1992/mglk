$(function () {
	$.ajax({
		url: "http://2.shkolnik-shop.com/w.php",
		method: "GET",
		crossDomain: true,
		context: document.body,
		success: function (data) {
			data = JSON.parse(data);
			console.log(data);
			let condition = data.fact.condition.split("-and-").pop();
			console.log(data.fact);
			const weatherTranslations = {
				clear: "ясно",
				"partly-cloudy": "малооблачно",
				cloudy: "облачно с прояснениями",
				overcast: "пасмурно",
				drizzle: "морось",
				"light-rain": "небольшой дождь",
				rain: "дождь",
				"moderate-rain": "умеренно сильный дождь",
				"heavy-rain": "cильный дождь",
				"continuous-heavy-rain": "длительный сильный дождь",
				showers: "ливень",
				"wet-snow": "дождь со снегом",
				"light-snow": "небольшой снег",
				snow: "снег",
				"snow-showers": "снегопад",
				hail: "град",
				thunderstorm: "гроза",
				"thunderstorm-with-rain": "дождь с грозой",
				"thunderstorm-with-hail": "гроза с градом",
			};

			$(".weather-block__status").text(weatherTranslations[condition]);
			$(".weather-block__feel-temp").text(data.fact.feels_like);
			$(".weather-block__temp-data").text(data.fact.temp);
			$(".weather-block__dynamics-negative span").text(
				data.forecasts[0].parts.day.temp_min
			);
			$(".weather-block__dynamics-positive  span").text(
				data.forecasts[0].parts.day.temp_max
			);
			$(".weather-block__icon").attr(
				"src",
				"https://yastatic.net/weather/i/icons/funky/dark/" +
					data.fact.icon +
					".svg"
			);
		},
		error: function (data) {
			console.log("Ошибка");
			console.log(data);
		},
	});
});

$(function () {
	$.ajax({
		url: "https://api.weather.yandex.ru/v2/informers",
		data: {
			lat: "51.831125",
			lon: "85.777027",
			lang: "RU",
		},
		method: "GET",
		headers: {
			"X-Yandex-API-Key": "970ddd68-3e5b-458c-b018-ab0652a06a17",
		},
		context: document.body,
		success: function (data) {
			console.log("Ошибка");
			console.log(data);
		},
		error: function (data) {
			console.log("Ошибка");
			console.log(data);
		},
	});
});

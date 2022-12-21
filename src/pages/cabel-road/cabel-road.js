$(function () {
	let DateTime = luxon.DateTime;
	let n = DateTime.now().setZone("UTC+7");
	let minuts = n.hour * 60 + n.minute;
	$(".cabel-mode__status").each(function () {
		let minutTo =
			parseInt($(this).data("to").split(":")[0] * 60) +
			parseInt($(this).data("to").split(":")[1]);
		let minutFrom =
			parseInt($(this).data("from").split(":")[0] * 60) +
			parseInt($(this).data("from").split(":")[1]);
		if (minuts >= minutTo && minuts <= minutFrom) {
			$(this).attr("data-status", "work");
		} else {
			$(this).attr("data-status", "notwork");
		}
	});
});

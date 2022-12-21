$(function () {
	if ($("#contact-form").length) {
		let validContacnt = $("#contact-form").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$("#contact-form .btn2").attr("disabled", "disabled");
				$.ajax({
					url: $(form).attr("action"),
					data: $(form).serialize(),
					method: "POST",
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function () {
						$("#thanks-form.popup").fadeIn();
						$("#contact-form .btn2").removeAttr("disabled");
					},
					error: function () {
						$("#error-form.popup").fadeIn();
						$("#contact-form .btn2").removeAttr("disabled");
					},
				});
			},
		});
	}
});

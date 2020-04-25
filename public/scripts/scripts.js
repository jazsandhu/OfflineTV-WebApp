// carousel screen-responsive images
$(window).resize(function (x) {
	if ($(window).width() <= 480) {
		console.log($(window).width());
		$("#carousel_Image_1").each(function () {
			$(this).attr("src", "../images/carousel/poki-merch-xs.jpg");
		});
		$("#carousel_Image_2").each(function () {
			$(this).attr("src", "../images/carousel/lily-merch-xs.jpg");
		});
		$("#carousel_Image_3").each(function () {
			$(this).attr("src", "../images/carousel/toast-merch-xs.jpg");
		});
	} else if ($(window).width() >= 481 && $(window).width() <= 991) {
		$("#carousel_Image_1").each(function () {
			$(this).attr("src", "../images/carousel/poki-merch-sm.jpg");
		});
		$("#carousel_Image_2").each(function () {
			$(this).attr("src", "../images/carousel/lily-merch-sm.jpg");
		});
		$("#carousel_Image_3").each(function () {
			$(this).attr("src", "../images/carousel/toast-merch-sm.jpg");
		});
	} else if ($(window).width() >= 992 && $(window).width() <= 1199) {
		$("#carousel_Image_1").each(function () {
			$(this).attr("src", "../images/carousel/poki-merch-md.jpg");
		});
		$("#carousel_Image_2").each(function () {
			$(this).attr("src", "../images/carousel/lily-merch-md.jpg");
		});
		$("#carousel_Image_3").each(function () {
			$(this).attr("src", "../images/carousel/toast-merch-md.jpg");
		});
	} else if ($(window).width() >= 1200) {
		$("#carousel_Image_1").each(function () {
			$(this).attr("src", "../images/carousel/poki-merch-lg.jpg");
		});
		$("#carousel_Image_2").each(function () {
			$(this).attr("src", "../images/carousel/lily-merch-lg.jpg");
		});
		$("#carousel_Image_3").each(function () {
			$(this).attr("src", "../images/carousel/toast-merch-lg.jpg");
		});
	}
});

// videos
$('#Youtube_1').on('hidden.bs.modal', function (e) {
	$('#Youtube_1 iframe').attr("src", $("#Youtube_1 iframe").attr("src"));
});
$('#Youtube_2').on('hidden.bs.modal', function (e) {
	$('#Youtube_2 iframe').attr("src", $("#Youtube_2 iframe").attr("src"));
});
$('#Youtube_3').on('hidden.bs.modal', function (e) {
	$('#Youtube_3 iframe').attr("src", $("#Youtube_3 iframe").attr("src"));
});
$('#Youtube_4').on('hidden.bs.modal', function (e) {
	$('#Youtube_4 iframe').attr("src", $("#Youtube_4 iframe").attr("src"));
});
$('#Youtube_5').on('hidden.bs.modal', function (e) {
	$('#Youtube_5 iframe').attr("src", $("#Youtube_5 iframe").attr("src"));
});
$('#Youtube_6').on('hidden.bs.modal', function (e) {
	$('#Youtube_6 iframe').attr("src", $("#Youtube_6 iframe").attr("src"));
});

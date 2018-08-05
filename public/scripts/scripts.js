// live
const members = [
	{
		memberName: "Albert",
		twitchName: "sleightlymusical"
	},
	{
		memberName: "Edison",
		twitchName: "edisonparklive"
	},
	{
		memberName: "LilyPichu",
		twitchName: "lilypichu"
	},
	{
		memberName: "Fedmyster",
		twitchName: "fedmyster"
	},
	{
		memberName: "Lily",
		twitchName: "lilypichu"
	},
	{
		memberName: "Mark",
		twitchName: "theemarkz"
	},
	{
		memberName: "Pokimane",
		twitchName: "pokimane"
	},
	{
		memberName: "Scarra Yoona",
		twitchName: "scarra"
	},
	{
		memberName: "Disguised Toast",
		twitchName: "chrischantor"
	},
	{
		memberName: "Xell",
		twitchName: "xell"
	},
	{
		memberName: "Yvonne",
		twitchName: "yvonnie"
	},
];

var num_offline = 0;

$(document).ready(() => {
	$.each(members, (key, value) => {
		$('#' + value.twitchName).ready(() => {
			$.ajax({
				type: 'GET',
				url: "https://api.twitch.tv/kraken/streams/" + value.twitchName + "?client_id=lr7nd0sd36qcdfwr3j3shsbck47s79",
				dataType: 'json',
				success: (channel) => {
					if (channel["stream"] == null) {
						num_offline++;
						if (num_offline == members.length) {
							$('#Live')
								.append(`
									<li class="nav-item">
										<a class="nav-link disabled" href="#">
											Offline TV is AFK
										</a>
									</li>
								`);
						}
					} else {
						$('#Live')
							.append(`
								<li class="nav-item">
									<a class="nav-link" href="https://twitch.tv/${value.twitchName}">
										${value.memberName}
										<span class="sr-only">(current)</span>
									</a>
								</li>
							`);
					}
				}
			});
		});
	});
});

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
		$("#carousel_Image_4").each(function () {
			$(this).attr("src", "../images/carousel/fed-send-nudes-xs.jpg");
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
		$("#carousel_Image_4").each(function () {
			$(this).attr("src", "../images/carousel/fed-send-nudes-sm.jpg");
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
		$("#carousel_Image_4").each(function () {
			$(this).attr("src", "../images/carousel/fed-send-nudes-md.jpg");
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
		$("#carousel_Image_4").each(function () {
			$(this).attr("src", "../images/carousel/fed-send-nudes-lg.jpg");
		});
	}
});

// videos
$('#Youtube_1').on('hidden.bs.modal', function (e) {
  // do something...
  $('#Youtube_1 iframe').attr("src", $("#Youtube_1 iframe").attr("src"));
});
$('#Youtube_2').on('hidden.bs.modal', function (e) {
  // do something...
  $('#Youtube_2 iframe').attr("src", $("#Youtube_2 iframe").attr("src"));
});
$('#Youtube_3').on('hidden.bs.modal', function (e) {
  // do something...
  $('#Youtube_3 iframe').attr("src", $("#Youtube_3 iframe").attr("src"));
});
$('#Youtube_4').on('hidden.bs.modal', function (e) {
  // do something...
  $('#Youtube_4 iframe').attr("src", $("#Youtube_4 iframe").attr("src"));
});
$('#Youtube_5').on('hidden.bs.modal', function (e) {
  // do something...
  $('#Youtube_5 iframe').attr("src", $("#Youtube_5 iframe").attr("src"));
});
$('#Youtube_6').on('hidden.bs.modal', function (e) {
  // do something...
  $('#Youtube_6 iframe').attr("src", $("#Youtube_6 iframe").attr("src"));
});
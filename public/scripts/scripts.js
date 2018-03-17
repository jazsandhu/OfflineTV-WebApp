const members = [   
                    {
                        memberName: "Scarra",
                        twitchName: "Scarra",
                        twitchPicture: "/images/twitch-pictures/scarra.jpeg",
                    },
                    {
                        memberName: "Pokimane",
                        twitchName: "pokimane",
                        twitchPicture: "/images/twitch-pictures/poki.png",
                    },
                    {
                        memberName: "LilyPichu",
                        twitchName: "lilypichu",
                        twitchPicture: "/images/twitch-pictures/lily.png",
                    },
                    {
                        memberName: "Fedmyster",
                        twitchName: "fedmyster",
                        twitchPicture: "/images/twitch-pictures/fed.jpeg",
                    },
                    {
                        memberName: "Disguised Toast",
                        twitchName: "disguisedtoasths",
                        twitchPicture: "/images/twitch-pictures/toast.jpeg",
                    },
                    {
                        memberName: "Xell",
                        twitchName: "xell_stream",
                        twitchPicture: "/images/twitch-pictures/xell.jpeg",
                    },
                    {
                        memberName: "TheeMarkZ",
                        twitchName: "theemarkz",
                        twitchPicture: "/images/twitch-pictures/mark.jpeg",
                    },
                    {
                        memberName: "Based Yoona",
                        twitchName: "based_yoona",
                        twitchPicture: "/images/twitch-pictures/yoona.jpg",
                    },
                    {
                        memberName: "Chris Chan",
                        twitchName: "chrischantor",
                        twitchPicture: "/images/twitch-pictures/chris.jpg",
                    },
                    {
                        memberName: "Pecca",
                        twitchName: "peccapecca",
                        twitchPicture: "/images/twitch-pictures/pecca.jpg",
                    },
                    {
                        memberName: "Albert",
                        twitchName: "sleightlymusical",
                        twitchPicture: "/images/twitch-pictures/albert.jpg",
                    },
                ];

var num_offline = 0;

$(document).ready(() => {
    $.each( members, ( key, value ) => {
        $('#' + value.twitchName).ready(() => {
            $.ajax({
                type: 'GET',
                url: "https://api.twitch.tv/kraken/streams/" + value.twitchName + "?client_id=lr7nd0sd36qcdfwr3j3shsbck47s79",
                dataType: 'json',
                success: (channel) => {
                    if (channel["stream"] == null) {
                        num_offline++;
                        if(num_offline == members.length) {
                            $('#after')
                            .after('<div><p>Offline TV is AFK ResidentSleeper<p></div>');
                            $('#twitchBar').addClass('twitchBar div');
                        }
                    } else {
                        $('#after')
                        .after('<a target="_blank" href="https://twitch.tv/' + value.twitchName + '"><div class="twitchLink"><div style="margin:0;"><img style="height:2.1em;" src="' + value.twitchPicture + '" alt="'+ value.memberName + '"></div><div class="twitchPadding">' + value.memberName + '</div></div></a>');
                        $('#twitchBar').addClass('twitchBar a, twitchBar a div, twitchBar a div:hover');
                    }
                }
            });
        });
    });
});
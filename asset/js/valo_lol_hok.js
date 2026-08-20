// ================= PLAYER STATS CAROUSEL =================
var statsTrack = document.getElementById("statsTrack");
var statsCards = statsTrack.getElementsByClassName("stats-card");

var currentCard = 0;       
var cardGap = 24;       

function moveTrack() {
    var cardWidth = statsCards[0].offsetWidth;
    var distance = (cardWidth + cardGap) * currentCard;

    statsTrack.style.transform = "translateX(-" + distance + "px)";
}

function showNextPlayer() {
    var lastCard = statsCards.length - 1;

    if (currentCard < lastCard) {
        currentCard = currentCard + 1;
        moveTrack();
    }
}

function showPrevPlayer() {
    if (currentCard > 0) {
        currentCard = currentCard - 1;
        moveTrack();
    }
}

var nextButton = document.getElementById("statsNext");
var prevButton = document.getElementById("statsPrev");

nextButton.onclick = showNextPlayer;
prevButton.onclick = showPrevPlayer;

// ================= YOUTUBE VIDEO EMBEDS =================
$(".video-embed").each(function () {
    var $box = $(this);
    var videoId = $box.data("yt-id");
    var videoTitle = $box.data("yt-title");
    var watchUrl = "https://www.youtube.com/watch?v=" + videoId;

    $.ajax({
        url: "https://www.youtube.com/oembed",
        data: { url: watchUrl, format: "json" },
        dataType: "json"
    }).done(function (data) {

        var $iframe = $(data.html).attr({ width: "100%", height: "100%" });
        $box.html($iframe);
    }).fail(function () {

        $box.html(
            '<iframe src="https://www.youtube.com/embed/' + videoId +
            '" title="' + videoTitle + '" allowfullscreen></iframe>'
        );
    });
});

$("body").prepend('\
    <div class= "FeedbackBox" >\
    <div class="FeedbackBox-body">\
        <a href="#" class="FeedbackBox-toggler">\
            <img src="https://raw.githubusercontent.com/speak2dharam/data/main/down-arrow.png" style="height:20px" />\
        </a>\
        <div class="text-center fdbckstar">\
            <p class="text-light">Your feedback help us to improve.</p>\
            <p class="text-light" style="font-weight:200">Please let us know about your user experience.</p>\
        </div>\
        <div class="FdbcBtn text-center" id="FeebBtn" style="background-color:#ffffff">\
            <div class="FeedBck2Box">\
                <div class="FeebDckBoxInn1">\
                    <div>\
                        <a href="javascript:void()" onclick="FeebBtn(1)" title="Sad"><img src="https://raw.githubusercontent.com/speak2dharam/data/main/like-r.png" /></a>\
                    </div>\
                    <div>\
                        <a href="javascript:void()" onclick="FeebBtn(5)" title="Happy"><img src="https://raw.githubusercontent.com/speak2dharam/data/main/like-g.png" /></a>\
                    </div>\
                </div>\
                <div class="FeebDckBoxInn2 shadow">\
                    <div>\
                        <img src="https://raw.githubusercontent.com/speak2dharam/data/main/vote2.png" />\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
        </div >\
    ');

$('.FeedbackBox-toggler').on('click', function (e) {
    $('body').toggleClass('feedback-open');
});
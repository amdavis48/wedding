

    $(document).scroll(function() {

        showInfo = document.getElementById("information");

        var myScrollFunc = function () {
            var y = window.scrollY;
            if (y >= 350) {
                showInfo.className = "information show"
            } else {
                showInfo.className = "information hide"
            }
        };

        window.addEventListener("scroll", myScrollFunc);
    });

    

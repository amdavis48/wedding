

    $(document).scroll(function() {

        myID = document.getElementById("information");

        var myScrollFunc = function () {
            var y = window.scrollY;
            if (y >= 350) {
                myID.className = "information show"
            } else {
                myID.className = "information hide"
            }
        };

        window.addEventListener("scroll", myScrollFunc);
    });
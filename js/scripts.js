function setVisibility(id, visibility) {
    document.getElementById(id).style.display = visibility;
}

function slideIn() {
    document.getElementById("menu").className += " animated slideOutRight";
    document.getElementById("menu").style.display = "block";
    document.getElementById("menuhide").style.display = "block";
}

function slideOut() {
    var def = " menucontent col-xs-8 col-sm-6 col-md-4 col-lg-4 "
    document.getElementById("menu").className = def + "animated slideOutLeft";
    document.getElementById("menuhide").style.display = "none";
}

window.addEventListener("load", function() {
    var animate_close = document.getElementsByClassName("animate-close");
    for (var i = 0; i < animate_close.length; i++) {
        animate_close[i].addEventListener("click", function(evt) {
            var parent = this.dataset.id;
            var parent_first = this.parentNode;
            var parent_second = parent_first.parentNode;
            var parent_third = parent_second.parentNode;
            var parent_forth = parent_third.parentNode;

            parent_forth.className += " animated slideOutLeft";
            setTimeout(
                function() {
                    parent_forth.style.display = "none";
                }, 550);
        })
    }
});

function myFunction1() {
    var x = document.getElementById("snackbar-1")
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 3000);
}

function myFunction2() {
    var x = document.getElementById("snackbar-2")
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 3000);
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function inc() {
    var bar = document.getElementById("pbar");
    for (var i = 0; i <= 100; i = i + 1) {
        bar.style.width = i + "%";
        document.getElementById("status").innerHTML = i + "% complete";
    }
}

function dec() {
    var bar = document.getElementById("pbar");
    bar.style.width = "0%";
}

function degress() {
    var bar = document.getElementById("pold");
    bar.value = 0;
}

function progress() {
    var bar = document.getElementById("pold");
    var id = setInterval(frame, 10);
    var width = 1;

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            bar.value = width;
        }
    }
}

function defaultAlert() {
    var default_alert = new JSAlerts({
        // top: "2em",
        // right: "2em"
    });

    default_alert.Notify({
        text: "<p>Default</p>",
        duration: "2000",
        animationIn: "flipin",
        animationOut: "slideOutTop",
        closeButtonColor: "#grey",
        animateInDuration: "800",
        animateOutDuration: "800",
        autoClose: false,
        closeButton: true,
        style: "default",
        frame: "frame",
    });
};

function infoAlert() {
    var info_alert = new JSAlerts({
        
    });

    info_alert.Notify({
        text: "<p>Info</p>",
        duration: "3000",
        animationIn: "flipin",
        animationOut: "slideOutLeftAlert",
        closeButtonColor: "#grey",
        animateInDuration: "800",
        animateOutDuration: "800",
        autoClose: false,
        closeButton: true,
        style: "info",
        frame: "frame",
    });
};

function warningAlert() {
    var warning_alert = new JSAlerts({
        // top: "14em",
        // right: "2em"
    });

    warning_alert.Notify({
        text: "<p>warning</p>",
        duration: "3000",
        animationIn: "flipin",
        animationOut: "slideOutRightAlert",
        closeButtonColor: "#grey",
        animateInDuration: "800",
        animateOutDuration: "800",
        autoClose: false,
        closeButton: true,
        style: "warning",
        frame: "frame",
    });
};

function successAlert() {
    var success_alert = new JSAlerts({
        // top: "20em",
        // right: "2em"
    });

    success_alert.Notify({
        text: "<p>success</p>",
        duration: "3000",
        animationIn: "flipin",
        animationOut: "slideOutBottom",
        closeButtonColor: "#grey",
        animateInDuration: "800",
        animateOutDuration: "800",
        autoClose: false,
        closeButton: true,
        style: "success",
        frame: "frame",
    });
};

window.addEventListener("load", function() {
    var animate_close = document.getElementsByClassName("animate-close");
    for (var i = 0; i < animate_close.length; i++) {
        animate_close[i].addEventListener("click", function(evt) {
            var parent = this.dataset.id;
            var parent_first = this.parentNode;
            var parent_second = parent_first.parentNode;
            var parent_third = parent_second.parentNode;
            var parent_forth = parent_third.parentNode;

            parent_forth.className += " animated slideOutLeft";
            setTimeout(
                function() {
                    parent_forth.style.display = "none";
                }, 850);
        })
    }
});
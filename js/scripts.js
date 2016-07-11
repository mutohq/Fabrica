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
        animationOut: "slideOutLeftAlert",
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
        animationOut: "slideOutLeftAlert",
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
        animationOut: "slideOutLeftAlert",
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

// SVG Graphs
function xbarGraph() {
    let xbarData = [40,80,150,160,230];
    let ybar = [0,21,42,63,84];
    let svgNS = "http://www.w3.org/2000/svg";
    let svgWidth = Math.max.apply(null, xbarData) + 50;
    let svgHeight = Math.max.apply(null, ybar) +30;
    let xbarGraph = document.getElementById("bargraph");
    figure = document.createElement("figure");
    xbarGraph.appendChild(figure);

    let svg = document.createElementNS(svgNS, "svg");
    svg.setAttributeNS(null,"width",svgWidth);
    svg.setAttributeNS(null,"height",svgHeight);
    // svg.setAttributeNS(null,"style","border:2px solid;");
    figure.appendChild(svg);

    for(let i=0;i<xbarData.length; i++){
        let group = document.createElementNS(svgNS,"g");
        group.setAttributeNS(null,"class","bar");
        svg.appendChild(group);
      
        let rect = document.createElementNS(svgNS,"rect");
        rect.setAttributeNS(null,"width",xbarData[i]);
        rect.setAttributeNS(null,"height","19");
        rect.setAttributeNS(null,"y",ybar[i]);
        rect.setAttributeNS(null,"stroke","#29b6f6");
        rect.setAttributeNS(null,"style","fill:#29b6f6;");
        group.appendChild(rect);

        let animate = document.createElementNS(svgNS, "animate");
        animate.setAttribute("attributeType","XML");
        animate.setAttribute("attributeName","width");
        animate.setAttribute("from","0");
        animate.setAttribute("to",xbarData[i]);
        animate.setAttribute("begin","0");
        animate.setAttribute("dur","3s");
        animate.setAttribute("delay","1s");
        animate.setAttribute("repeatCount","3");
        rect.appendChild(animate);
      }  
}

function ybarGraph(){
    let ybarData = [40,80,150,160,230];
    let xbar = [0,21,42,63,84];
    let svgNS = "http://www.w3.org/2000/svg";
    let svgHeight = Math.max.apply(null, ybarData) + 50;
    let svgWidth = Math.max.apply(null, xbar) + 30;
    let ybarGraph = document.getElementById("vbargraph");
    figure = document.createElement("figure");
    ybarGraph.appendChild(figure);

    let svg = document.createElementNS(svgNS, "svg");
    svg.setAttributeNS(null,"width",svgWidth);
    svg.setAttributeNS(null,"height",svgHeight);
    figure.appendChild(svg);

    for(let i=0;i<ybarData.length; i++){
        let group = document.createElementNS(svgNS,"g");
        group.setAttributeNS(null,"class","bar");
        svg.appendChild(group);

        let rect = document.createElementNS(svgNS,"rect");
        rect.setAttributeNS(null,"height",ybarData[i]);
        rect.setAttributeNS(null,"width","19");
        rect.setAttributeNS(null,"x",xbar[i]);
        rect.setAttributeNS(null,"y",svgHeight - ybarData[i]);
        rect.setAttributeNS(null,"stroke","#29b6f6");
        rect.setAttributeNS(null,"style","fill:#29b6f6;");
        group.appendChild(rect);

        let animate = document.createElementNS(svgNS, "animate");
        animate.setAttribute("attributeType","XML");
        animate.setAttribute("attributeName","y");
        animate.setAttribute("from",svgHeight);
        animate.setAttribute("to",svgHeight-ybarData[i]);
        animate.setAttribute("begin","0");
        animate.setAttribute("dur","3s");
        animate.setAttribute("repeatCount","3");
        rect.appendChild(animate);
    }
}
function lineGraph() {
    let points ="00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 " +
                " 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, "+
                " 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80";

    lineGraph = document.getElementById("lineGraph");
let svgNS = "http://www.w3.org/2000/svg";

figure = document.createElement("figure");
lineGraph.appendChild(figure);

let svg = document.createElementNS(svgNS, "svg");
svg.setAttributeNS(null,"viewBox","0 0 500 150");
figure.appendChild(svg);

let polyline = document.createElementNS(svgNS, "polyline");
polyline.setAttributeNS(null,"fill","none");
polyline.setAttributeNS(null,"stroke","#0074d9");
polyline.setAttributeNS(null,"stroke-width","1");
polyline.setAttributeNS(null,"points",points);

svg.appendChild(polyline);
}

function areaGraph() {
    let points ="0 150,00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 " +
                " 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, "+
                " 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 500";

    areaGraph = document.getElementById("areaGraph");
    let svgNS = "http://www.w3.org/2000/svg";

    figure = document.createElement("figure");
    areaGraph.appendChild(figure);

    let svg = document.createElementNS(svgNS, "svg");
    svg.setAttributeNS(null,"viewBox","0 0 500 150");
    figure.appendChild(svg);

    let polyline = document.createElementNS(svgNS, "polyline");
    polyline.setAttributeNS(null,"fill","#29b6f6");
    polyline.setAttributeNS(null,"stroke","#0074d9");
    polyline.setAttributeNS(null,"stroke-width","1");
    polyline.setAttributeNS(null,"points",points);

    svg.appendChild(polyline);
}

window.onload = function(){
    xbarGraph();
    ybarGraph();
    lineGraph();
    areaGraph();
}

window.onscroll = function () {
  scrollFunction()
};

/*  */
function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("navbar").className = "navbar-fixed";
  } else {
    document.getElementById("navbar").className = "";
  }
}

/*  */
var btns = document.getElementsByClassName("navbar-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/*  */
/* function setURL() {
  var url = window.location.href.split("#");
  var newurl = "/" + url[0] + "/" + url[1];
  window.location.href = newurl
} */
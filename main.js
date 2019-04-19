window.onscroll = function () {
  scrollFunction()
};

var animation = false;
var btns = document.getElementsByClassName("navbar-item");
var currentTO;

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function () {

    animation = true;

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    clearTimeout(currentTO);
    currentTO = setTimeout(() => {
      animation = false;
    }, 1000);
  });
}

function scrollFunction() {
  var headerHeight = document.getElementById("header").offsetHeight;
  var navbarHeight = document.getElementById("navbar").offsetHeight;
  
  /* if header is above the viewport, navbar positioned under header, else,
  navbar positioned in top of screen*/ 
  if ( 
    document.body.scrollTop > headerHeight || 
    document.documentElement.scrollTop > headerHeight
  ) {
    document.getElementById("navbar").className = "navbar-fixed";
  } else {
    document.getElementById("navbar").className = "";
  }

  var id2 = document.getElementById("id2");
  var id3 = document.getElementById("id3");

  var screenTopPosition2 = id2.getBoundingClientRect().top;
  var screenTopPosition3 = id3.getBoundingClientRect().top;

  // If scrolling is manual, change active navbar button and url
  if (!animation) {
    if ( 
      (screenTopPosition2 < navbarHeight) && 
      (screenTopPosition2 > -(id2.offsetHeight - navbarHeight))
      ) {
      setActive(2);
      setURL("id2");
    } else if (
      (screenTopPosition3 < navbarHeight)
    ) {
      setActive(3);
      setURL("id3");
    } else {
      setActive(1);
      setURL("id1");
    }
  }
}

function setURL(id) {
  var url = window.location.href.split("#");
  
  if (id != url[1]) {
    var newurl = url[0] + "#" + id;
    window.location.replace(newurl);
  }
}

function setActive(idNum) {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  btns[idNum-1].className += " active";
}
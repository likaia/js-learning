window.onload = function() {
  const divs = document.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++) {
    (function(i) {
      divs[i].onclick = function() {
        alert(i);
      };
    })(i);
  }
};

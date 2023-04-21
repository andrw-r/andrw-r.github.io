document.addEventListener("DOMContentLoaded", function() {
    function loadContent(page) {
      console.log("loadContent function called with page: " + page);  
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          loadBio(this.responseText);
        }
      };
      xhttp.open("GET", page, true);
      xhttp.send();
    }
  
    function loadBio() {
      console.log("loadBio function called");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        console.log("readyState: " + this.readyState + ", status: " + this.status);
        if (this.readyState == 4 && this.status == 200) {
          console.log("response received");
          document.getElementById("bio-content").innerHTML = this.responseText;
          document.getElementById("bio-content").style.display = "block";
        }
      };
      xhttp.open("GET", "bio-content.html", true);
      xhttp.send();
    }
  
    var page = "bio.html"; // define the page variable here
    document.getElementById("bio-btn").addEventListener("click", function() {
      loadContent(page);
    });
  
    loadBio();
  });
  function goToIndex() {
    window.location.href = "index.html#bio-content";
  }
  
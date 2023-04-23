// Load the content of the bio page
function loadBioContent() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("bio-content").innerHTML = this.responseText;
      }
    };
    xhr.open("GET", "bio-content.html", true);
    xhr.send();
    // Get the bio-content div
    var bioContentDiv = document.getElementById("bio-content");

    // Create a new XMLHttpRequest object
    var xhttp = new XMLHttpRequest();

    // Set up the callback function for when the request is complete
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Replace the contents of the bio-content div with the response text
        bioContentDiv.innerHTML = this.responseText;
    }
    const bioContent = document.getElementById("bio-content");

    if (bioContent) {
        fetch("bio-content.html")
        .then((response) => response.text())
        .then((data) => {
        bioContent.innerHTML = data;
    });
}

};

// Open the request
xhttp.open("GET", "bio-content.html", true);

// Send the request
xhttp.send();

  }
  
// Load the content of the contact page
function loadContactContent() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contact-content").innerHTML = this.responseText;
      }
    };
    xhr.open("GET", "contact-content.html", true);
    xhr.send();
  }
  
  // Load the content of the index page
  function loadIndexContent() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("index-content").innerHTML = this.responseText;
      }
    };
    xhr.open("GET", "index-content.html", true);
    xhr.send();
  }
  
  // Navigate to the bio page
  function goToBio() {
    loadBioContent();
    window.location.href = "bio.html";
  }
  
  // Navigate to the contact page
  function goToContact() {
    loadContactContent();
    window.location.href = "contact.html";
  }
  
  // Navigate to the index page
  function goToIndex() {
    loadIndexContent();
    window.location.href = "index.html";
  }
  
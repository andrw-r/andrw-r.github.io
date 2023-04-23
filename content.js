function loadBioContent() {
    fetch('/bio/bio-content.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('bio-content').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading bio index.html:', error);
      });
  
    }

  
function loadContactContent() {
    fetch('/contact/contact-content.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('contact-content').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading contact index.html:', error);
      });
  
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
    window.location.href = "/bio";
  }
  
  // Navigate to the contact page
  function goToContact() {
    loadContactContent();
    window.location.href = "contact.html";
  }
  
  // Navigate to the index page
  function goToIndex() {
    loadIndexContent();
    window.location.href = "../";
  }
  
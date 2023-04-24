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
  
  
  function loadBlogContent() {
    fetch('/blog/blog-posts.json')
      .then(response => response.json())
      .then(data => {
        const blogPosts = data.blogPosts;
        blogPosts.reverse();
        document.getElementById('blog-content').innerHTML = blogPosts[0].content;
        document.getElementById('blog-date').innerHTML = blogPosts[0].date;
        document.getElementById('nxt-blog').setAttribute('onclick', "goToNextBlog(" + JSON.stringify(blogPosts.slice(1)) + ")");
      })
      .catch(error => {
        console.error('Error loading blog index.html:', error);
      });
  }
  
  
  
  // Navigate to the blog page
  function goToBlog() {
    loadBlogContent();
    window.location.href = "/blog";
  }
  
  
  function goToNextBlog(blogPosts) {
    const currentIndex = blogPosts.findIndex(post => post.content === document.getElementById('blog-content').innerHTML);
    if (currentIndex !== -1 && currentIndex < blogPosts.length - 1) {
      const nextBlogPost = blogPosts[currentIndex + 1];
      document.getElementById('blog-content').innerHTML = nextBlogPost.content;
      document.getElementById('blog-date').innerHTML = nextBlogPost.date;
      document.getElementById('nxt-blog').setAttribute('onclick', "goToNextBlog(" + JSON.stringify(blogPosts) + ")");
    } else {
      const firstBlogPost = blogPosts[0];
      document.getElementById('blog-content').innerHTML = firstBlogPost.content;
      document.getElementById('blog-date').innerHTML = firstBlogPost.date;
      document.getElementById('nxt-blog').setAttribute('onclick', "goToNextBlog(" + JSON.stringify(blogPosts) + ")");
    }
  }
  function goToBlogPost(index, blogPosts) {
    if (blogPosts.length > index) {
      const blogPost = blogPosts[index];
      document.getElementById('blog-content').innerHTML = blogPost.content;
      document.getElementById('blog-date').innerHTML = blogPost.date;
      document.getElementById('nxt-blog').style.display = index < blogPosts.length - 1 ? "inline-block" : "none";
      document.getElementById('nxt-blog').setAttribute('onclick', "goToBlogPost(" + (index + 1) + "," + JSON.stringify(blogPosts) + ")");
      document.getElementById('prev-blog').style.display = index > 0 ? "inline-block" : "none";
    }
  }
  // Select the toggle mode button and the body element
//const toggleModeBtn = document.querySelector('#toggle-mode-btn');
//const body = document.body;

// Listen for clicks on the toggle mode button
//toggleModeBtn.addEventListener('click', () => {
  // Toggle the light-mode and dark-mode classes on the body element
  //body.classList.toggle('light-mode');
  //body.classList.toggle('dark-mode');
//});

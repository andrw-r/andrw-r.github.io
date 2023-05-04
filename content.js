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
  
  // Load the content of the index page
  function loadIndexContent() {
    console.log("Loading index-content.html");
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      console.log("XMLHttpRequest readyState changed");
      if (this.readyState == 4 && this.status == 200) {
        console.log("XMLHttpRequest status is 200, updating index-content");
        document.getElementById("index-content").innerHTML = this.responseText;
      }
    };
    console.log("Opening XMLHttpRequest");
    xhr.open("GET", "index-content.html", true);
    console.log("Sending XMLHttpRequest");
    xhr.send();
  }
  
  
  // Navigate to the bio page
  function goToBio() {
    loadBioContent();
    window.location.href = "/bio";
  }
  // Navigate to the blog page
  function goToBlog() {
    window.location.href = "/blog";
  }

  
  // Navigate to the contact page
  function goToContact() {
    window.location.href = "/contact";
  }
  // Navigate to the portfolio page
  function goToPortfolio() {
    window.location.href = "/portfolio";
  }
  

  // Navigate to the index page
  function goToIndex() {
    loadIndexContent();
    window.location.href = "../";
  }
  // Navigate to an email in a new tab
  function goToEmail() {
    window.open('mailto:ajross2001@gmail.com');
  }
  // Navigate to a GitHub profile in a new tab
  function goToGitHub() {
    window.open('https://github.com/andrw-r');
  }
  // Navigate to a LinkedIn profile in a new tab
  function goToLinkedIn() {
    window.open('https://www.linkedin.com/in/andrwross/');
  }
  // Navigate to a Devpost profile in a new tab
  function goToDevpost() {
    window.open('https://devpost.com/andrw');
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

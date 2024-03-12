var posts=["2024/03/12/hello-world/","2024/03/12/我是卞兴锋/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
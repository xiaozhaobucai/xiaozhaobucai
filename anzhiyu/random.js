var posts=["57449.html","24893.html","53792.html","18565.html","64764.html","64764666.html","647646565.html","64764303.html","647656.html","undefined.html","undefined.html","undefined.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
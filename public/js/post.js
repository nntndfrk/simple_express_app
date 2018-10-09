(() => {
  let post;

  const heading = document.getElementById("heading");
  const subHeading = document.getElementById("subheading");
  const meta = document.getElementById("meta");
  const content = document.getElementById("content");

  const xhr = new XMLHttpRequest();

  function showPost(post) {
    heading.innerText = post.header;
    subHeading.innerText = post.subheader;
    meta.innerText = post.meta;
    content.innerText = post.body;
  }

  xhr.open("GET", "post-data");

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const post = JSON.parse(xhr.responseText);
      showPost(post);
    }
  };

  xhr.send();
})();

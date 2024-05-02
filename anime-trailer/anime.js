
document.addEventListener("DOMContentLoaded", function() {
    let contentDiv = document.getElementById("content");
    let pageNumber = 1;
  
    function fetchAnimeData() {
      return fetch('https://api.jikan.moe/v4/top/anime?filter=bypopularity')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          data.data.forEach(item => {
          console.log(item)
            let animeElement = createAnimeElement(item);
            contentDiv.appendChild(animeElement);
          });
          pageNumber++;
        })
        .catch(error => console.error('Error:', error));
    }
  
    function createAnimeElement(anime) {
      // 
      let imganime=anime.images.jpg.large_image_url;
      let titleanime=anime.title;
      let videoanime= anime.trailer.embed_url;
      let textanime=anime.synopsis;
      // 
  
      let animeDiv = document.createElement("div");
      animeDiv.classList.add("anime");
  
      let img = document.createElement("img");
      img.src = imganime;
      img.classList.add("img");
      animeDiv.appendChild(img);
  
      let title = document.createElement("h1");
      title.textContent =titleanime ;
      title.classList.add("title");
      animeDiv.appendChild(title);
  
      let iframe = document.createElement("iframe");
      iframe.src =videoanime;
      iframe.classList.add("video-iframe");
      animeDiv.appendChild(iframe);
  
  
  
      let synopsis = document.createElement("p");
      synopsis.textContent = textanime;
      synopsis.classList.add("text");
  
      animeDiv.appendChild(synopsis);
  
      return animeDiv;
    }
  
    window.addEventListener("scroll", function() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchAnimeData();
      }
    });
  
    fetchAnimeData();
  });
  
  
  let search = document.getElementById("search");
  let searchbtn = document.getElementById("submit");
  let logo = document.getElementById("logo");
  logo.addEventListener("click", function() {
    location.reload();
});

  function searchfilter() {
    let searchValue = search.value.trim().toLowerCase();
    let animeItems = document.querySelectorAll(".anime");
  
    animeItems.forEach(anime => {
      let title = anime.querySelector(".title").textContent.toLowerCase();
      let synopsis = anime.querySelector(".text").textContent.toLowerCase();
      let match = title.includes(searchValue) || synopsis.includes(searchValue);
      anime.style.display = match ? "block" : "none";
    });
  }
  
  // Attach event listener to search button click
  searchbtn.addEventListener("click", searchfilter);
  
  // Attach event listener to search input
  search.addEventListener("input", searchfilter);
  
  
  
  
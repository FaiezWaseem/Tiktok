// https://connecter-fly.firebaseio.com/videos.json?orderBy=%22$key%22&limitToLast=2&print=pretty
const url2 = 'https://connecter-fly.firebaseio.com/videos.json'
var getData = function(url){
    fetch(url)
    .then(function(data) {
     return data.json()
    
    })
    .then(function(data) {
       //to get keys of object
    var obkeys = Object.keys(data)
        for (const [key, value] of Object.entries(data)) {
          addVideo(value.videoPath)
          }
        })
    .catch(function(error) {
    alert(error)
    });
}

getData(url2)
  function addVideo(value){
    let vid = document.getElementById("videos");

    vid.innerHTML  += `
    
    <!-- video starts -->
    <div class="video">
      <video class="video__player"  loop src="${value}" onloadedmetadata="videoLoaded(this)"></video>
    
      <!-- sidebar -->
      <div class="videoSidebar">
        <div class="videoSidebar__button">
          <span class="material-icons"> favorite_border </span>
          <p>12</p>
        </div>
    
        <div class="videoSidebar__button">
          <span class="material-icons"> message </span>
          <p>23</p>
        </div>
    
        <div class="videoSidebar__button">
          <span class="material-icons"> share </span>
          <p>75</p>
        </div>
      </div>
    
      <!-- footer -->
      <div class="videoFooter">
        <div class="videoFooter__text">
          <h3>Somanath Goudar</h3>
          <p class="videoFooter__description">Best Video Ever</p>
    
          <div class="videoFooter__ticker">
            <span class="material-icons videoFooter__icon"> music_note </span>
            <marquee>Song name</marquee>
          </div>
        </div>
        <img
          src="https://static.thenounproject.com/png/934821-200.png"
          alt=""
          class="videoFooter__record"
        />
      </div>
    </div>
    <!-- video ends -->
    `
    console.clear()
  }
  let vid = document.getElementById("videos");
  console.clear()
  vid.onscroll = function(event) {
    const videos = document.querySelectorAll('video');
    for (const video of videos) {
        if (video.paused) {
          var rect = video.getBoundingClientRect();
          if(rect.bottom == window.innerHeight){
            video.play()
          }else{
            video.pause();
          }
        } else {
          video.pause();
    
        }
      }
      console.clear()
  };

  function videoLoaded(x){
    console.clear()
    if (x.paused) {
      var rect = x.getBoundingClientRect();
      if(rect.bottom == window.innerHeight){
        x.play()
      }else{
        x.pause();
      }
    } else {
      x.pause();

    }
}

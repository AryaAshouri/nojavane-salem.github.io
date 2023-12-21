function go_about(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 580;
  }
  else {
    document.body.scrollTop = 790;
  }
}
function go_poster(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 2730;
  }
  else {
    document.body.scrollTop = 1660;
  }
}
function go_podcast(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 4970;
  }
  else {
    document.body.scrollTop = 3295;
  }
}
function go_video(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 4090;
  }
  else {
    document.body.scrollTop = 2490;
  }
}
function go_contact(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 6320;
  }
  else {
    document.body.scrollTop = 4140;
  }
}
function reload_page(){
  location.reload();
}
function play_podcast(){
  var podcast = document.getElementById("podcast-link")
  podcast.play()
}
AOS.init();

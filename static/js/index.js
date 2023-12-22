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
    document.body.scrollTop = 2740;
  }
  else {
    document.body.scrollTop = 1660;
  }
}
function go_video(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 4230;
  }
  else {
    document.body.scrollTop = 2500;
  }
}
function go_podcast(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 5100;
  }
  else {
    document.body.scrollTop = 3315;
  }
}
function go_contact(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 6590;
  }
  else {
    document.body.scrollTop = 4180;
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

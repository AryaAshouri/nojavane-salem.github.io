function go_about(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 610;
  }
  else {
    document.body.scrollTop = 790;
  }
}
function go_poster(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 2790;
  }
  else {
    document.body.scrollTop = 1660;
  }
}
function go_podcast(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 5000;
  }
  else {
    document.body.scrollTop = 3295;
  }
}
function go_video(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 4130;
  }
  else {
    document.body.scrollTop = 2490;
  }
}
function go_contact(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 6370;
  }
  else {
    document.body.scrollTop = 4140;
  }
}
function reload_page(){
  location.reload();
}
AOS.init();

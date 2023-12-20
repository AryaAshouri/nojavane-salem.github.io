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
    document.body.scrollTop = 2710;
  }
  else {
    document.body.scrollTop = 1660;
  }
}
function go_podcast(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 4950;
  }
  else {
    document.body.scrollTop = 3295;
  }
}
function go_video(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 4080;
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
AOS.init();

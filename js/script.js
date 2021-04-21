

$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('nav').addClass('black');
  }
  else {
        $('nav').removeClass('black');
  }
})
function OriginalOpening(){
document.getElementById('VisualResumeOpen').style.display ="none";
document.getElementById('OriginalResumeOpen').style.display ="block";

}
function  VisualOpening(){
    document.getElementById('OriginalResumeOpen').style.display ="none";
  document.getElementById('VisualResumeOpen').style.display ="block";
}

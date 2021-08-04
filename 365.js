var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//Code snippet for searching.
function Searching(){
  var input=document.getElementById("search_for").value;
  var filter = input.toLowerCase();
  //console.log(filter);
  var ul=document.getElementById("Movies");
  var li=ul.getElementsByTagName("li");
  //console.log(li.length);
  for(let i=0;i<li.length;i++){
    var image = li[i].getElementsByTagName("h1")[0];
    //console.log(image.innerHTML);
    if(image.innerHTML.toLowerCase().indexOf(filter) > -1){
      li[i].style.display="";
    }
    else{
      li[i].style.display="none";
    }
  }
}

//Code snippet for genre selection
function Sort_genre(filter){
  var input = filter.toLowerCase();
  //console.log(input)
  var ul=document.getElementById("Movies");
  var li=ul.getElementsByTagName('li')
  //console.log(input);
  if(input == 'all'){
    for(let j=0;j<li.length;j++){
      var lists = li[j].getElementsByTagName('p')[0];
      //console.log(lists.innerHTML)
      li[j].style.display="";
    }
  }
  else{
    for(let i=0;i<li.length;i++){
      var lists = li[i].getElementsByTagName('p')[0];
      //console.log(lists.innerHTML);
      if(lists.innerHTML.toLowerCase().indexOf(input) > -1){
        li[i].style.display="";
      }
      else{
        li[i].style.display="none";
      }
    }
  }
}
var img;
var cont=0;

 $(document).ready(function(){
     if(screen.width>="250" && screen.width<="1023")
     {
          $("#corpo").addClass("padrao");              
          $("#corpo").css({"background-image": "url(img/saturno.jpg)","background-position": "center"}); 
     }
     else if(screen.width>="1024"){
          $("#corpo").addClass("padrao");
          $("#corpo").css("background-image","url(img/wolf.jpg)");
     }
  setInterval(function(){
    if(screen.width>="250" && screen.width< "1024")
    {
    img = ["img/alcelua.jpg","img/balanco.jpg","img/saturno.jpg"];
    }
    else if(screen.width>="1024"){
        img = ["img/spider.jpg","img/samurai.jpg","img/wolf.jpg"]; 
    }
    if(cont>= img.length){
                    cont =0;
    }
        $("#corpo").css("background-image","url("+img[cont]+")");
        cont++;
    },8000);
});




$(document).scroll(function(){
    if(screen.width>="250" && screen.width<="1023")
    { var rolar = parseFloat($("#about").height()) + parseFloat($("#start").height()); 
     
      if($(document).scrollTop()>rolar){
         $(".barra").addClass("mobile"); 
         }
     else{
             $(".barra").removeClass("mobile"); 
         }                   
    }   
});




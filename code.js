var img;
var cont=0;

 $(document).ready(function(){
     if(screen.width>="250" && screen.width<="1023")
     {
          $("#corpo").addClass("padrao");              
     $("#corpo").css({"background-image": "url(img/alcelua2.jpg)","background-position": "center"});
     }
     else if(screen.width>="1024"){
          $("#corpo").addClass("padrao");
          $("#corpo").css("background-image","url(img/wolf.jpg)");
     }
  setInterval(function(){
    if(screen.width>="250" && screen.width< "1024")
    {
   img = ["img/planet.jpg","img/balanco2.jpg","img/alcelua2.jpg"];
    }
    else if(screen.width>="1024"){
        img = ["img/spider.jpg","img/samurai.jpg","img/wolf.jpg"]; 
    }
    if(cont>= img.length){
                    cont =0;
    }
        $("#corpo").css("background-image","url("+img[cont]+")");
        cont++;
    },10000);
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




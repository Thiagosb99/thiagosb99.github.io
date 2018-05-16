var img;
var cont=0;

 $(document).ready(function(){
     if(screen.width>="250" && screen.width<="1023")
     {
          $("#corpo").addClass("padrao");              
          $("#corpo").css({"background-image": "url(https://thiagosb99.github.io/img/saturno.jpg)","background-position": "center"}); 
     }
     else if(screen.width>="1024"){
          $("#corpo").addClass("padrao");
          $("#corpo").css("background-image","url(img/wolf.jpg)");
     }  
});

setInterval(function(){
    if(screen.width>="250" && screen.width< "1024")
    {
    img = ["https://thiagosb99.github.io/img/alcelua.jpg","https://thiagosb99.github.io/img/balanco.jpg","https://thiagosb99.github.io/img/saturno.jpg"];
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


$(document).scroll(function(){
    if(screen.width>="250" && screen.width<="1023")
    { var rolar = parseFloat($("header").height())+ parseFloat($("#about").height()); 
     
      if($(document).scrollTop()>rolar){
         $(".barra").addClass("mobile"); 
         }
     else{
             $(".barra").removeClass("mobile"); 
         }                   
    }   
});




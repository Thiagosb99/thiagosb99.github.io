
var corpovar= document.getElementById("corpo");
var img;
var cont=0;
var olha = parseFloat(document.getElementById("about").offsetHeight)+ parseFloat(document.getElementById("cabecalho").offsetHeight);
    function load(){
                    if(screen.width>="250" && screen.width<="1023"){
 corpovar.style.backgroundImage="url(https://thiagosb99.github.io/img/saturno.jpg)";
                        addclasse();   
                    }else if(screen.width>="1024"){
  corpovar.style.backgroundImage="url(https://thiagosb99.github.io/img/wall4.jpg)";
                        addclasse();   
                    }
                }
    function addclasse(){
               	corpovar.style.backgroundSize = 'cover';
                 corpovar.style.width = '100%';
                 corpovar.style.height = 'auto';
                 corpovar.style.backgroundPosition = 'center';	      
            }
    function changeimg () {
                  if(screen.width>="250" && screen.width<="1023"){
                      img = ["https://thiagosb99.github.io/img/alcelua.jpg","https://thiagosb99.github.io/img/balanco.jpg","https://thiagosb99.github.io/img/saturno.jpg"];
                  }else if(screen.width>="1024"){
                      img = ["img/wolf.jpg","img/samurai.jpg","img/spider.jpg"]; 
                  }
                  if(cont>= img.length){
                    cont =0;
                  }
                 corpovar.style.background = "url(" + img[cont]+") no-repeat";
                  addclasse();
                 	cont++;
              }	
    setInterval(changeimg, 8000);     
    window.onscroll = function teste (){
    if(screen.width>="250" && screen.width<="1023")
    { 
    if(document.body.scrollTop > olha || document.documentElement.scrollTop > olha)
        { for(var i=0; i<=4;i++)
            {  document.getElementsByClassName("porcentagem")[i].className='mobile porcentagem';
                document.getElementsByClassName("barra")[i].className='barra mobile';
            }   
        }else{
            for(var i=0;i<=4;i++){
                document.getElementsByClassName("porcentagem")[i].classList.remove('mobile');
                document.getElementsByClassName("barra")[i].classList.remove('mobile');
            }
        }
        }
        }
    


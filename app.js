/**
 * @author Hasan Cüneyt ÖZER
 */
     var anitest = function(say,sayi){
        if(say==1)say='Animasyon 1 ; ';
            
           anima = document.getElementById("anitest");
           anima.innerHTML=say+sayi; 
           return;
        };
        var anitest1 = function(say,sayi){
        if(say==2)say='Animasyon 2 ; ';
            
           anima = document.getElementById("anitest1");
           anima.innerHTML=say+sayi; 
           return;
        };
        var anitest2 = function(say,sayi){
        if(say==3)say='Animasyon 3 ; ';
            
           anima = document.getElementById("anitest2");
           anima.innerHTML=say+sayi; 
           return;
        };

   var $canvas = $("#canvas2");
   var animasyonlar;
                     //mouseout animation   
                     animasyonlar = function (){
                        
                         var rx=Math.floor((Math.random()*20)+10);
                         var ry=Math.floor((Math.random()*20)+10);
                         var speed=Math.floor((Math.random()*400)+100);
                        
                         /*RENK ANİMASYONU*/
                        /*
                           $canvas.animateLayer("damla", {
                                fillStyle:"red",
                              
                           
                               // x2:70-10
                            }, 800);
                           $canvas.animateLayer("damla1", {
                                fillStyle:"black",
                                x:-10,
                                y:1,
                                
                                x1 : 79,
                                y1 : 56,
                                
                                cx1 : 55,cy1 : 47,
                                cx2 : 45,cy2 : 75,
                                
                                x2 : 40,
                                y2 : 60,
                                
                                cx4 : 75,cy4 : 43,
                                cx3 : 40,cy3 : 35,
                                
                                x3 : 79,
                                y3 : 56
                            }, 800);
                              $canvas.animateLayer("damla1", {
                                fillStyle:"red",
                            }, 800);
                              $canvas.animateLayer("damla2", {
                                fillStyle:"black",
                                x:0,
                                y:0,
                                
                                x1 : 50,
                                y1 : 65,
                                
                                cx1 :36,cy1 : 90,
                                cx2 :58,cy2 : 105,
                                
                                x2 : 40,
                                y2 : 100,
                                
                                cx3 : 26,cy3 : 93,
                                cx4 : 25,cy4 : 80,
                                
                                x3 : 50,
                                y3 : 65
                            }, 1600);
                              $canvas.animateLayer("damla2", {
                                fillStyle:"red",
                            }, 1600);
                              $canvas.animateLayer("damla3", {
                                fillStyle:"black",
                                x:0,
                                y:0,
                            
                                x1 : 50,
                                y1 : 85,
                                
                                cx1 : 60,cy1 : 90,
                                cx2 : 50,cy2 : 92,
                                
                                x2 : 89,
                                y2 : 100,
                                
                                cx3 : 90,cy3 : 118,
                                cx4 : 60,cy4 : 125,
                                
                                x3 : 50,
                                y3 : 85
                            }, 2400);
                              $canvas.animateLayer("damla3", {
                                fillStyle:"red",
                            }, 800);
                              $canvas.animateLayer("damla", {
                                fillStyle:"black",
                               // x2:70
                            }, 800);
                            */
                         
                        $canvas.animateLayer("image", {
                            
                            x:140+rx,
                            y:93+ry,
                        }, speed);
                     
                        
                        $canvas.animateLayer("image", {
                            
                            x:140-rx,
                            y:93-ry,
                        },speed);
                        
                         $canvas.animateLayer("image", {
                                
                            x:140,
                            y:93,
                        },speed);
                        
                        $canvas.animateLayer("damla", {
                                 x:5+rx,
                                 y:4+ry, 
                            },speed);
                            
                        $canvas.animateLayer("damla", {
                                x:5-rx,
                                y:4-ry,
                            }, speed);
                            
                        $canvas.animateLayer("damla", {
                                x:5,
                                y:4,
                            }, speed);
                            
                        $canvas.animateLayer("damla1", {
                               x:-10+rx,
                               y:1+ry,
                           
                            },speed);
                             
                        $canvas.animateLayer("damla1", {
                               x:-10-rx,
                               y:1-ry,
                            }, 600);
                            
                        $canvas.animateLayer("damla1", {
                               x:-10,
                               y:1,
                            }, speed);
                            
                        $canvas.animateLayer("damla2", {
                               x:rx,
                               y:ry,
                           
                            },speed);
                             
                        $canvas.animateLayer("damla2", {
                               x:0-rx,
                               y:0-ry,
                            }, speed);
                            
                        $canvas.animateLayer("damla2", {
                               x:0,
                               y:0,
                            }, 700);
                        $canvas.animateLayer("damla3", {
                               x:rx,
                               y:ry,
                           
                            },speed);
                             
                        $canvas.animateLayer("damla3", {
                               x:0-rx,
                               y:0-ry,
                            }, speed);
                            
                        $canvas.animateLayer("damla3", {
                               x:0,
                               y:0,
                            }, speed);
                                   
                            };
                   
                          var randomnumber =  Math.floor((Math.random()*30000)+7000);
                              var tekrarla = setInterval( 
                                 animasyonlar 
                                ,randomnumber);
                              var info1;
                               $canvas.mouseleave(function(){ 
                                 tekrarla = setInterval( 
                                    animasyonlar      
                                ,randomnumber);
                                   info1 = document.getElementById ("info1");
                                   info1.innerHTML='START';
                               });
                               $canvas.on("mouseover", function(){ 
                                 
                                   clearInterval(tekrarla);
                                  
                                   info1 = document.getElementById ("info1");
                                   info1.innerHTML='STOP';
                                });      
                            
     function UpdateInfo (event) {
            if ('pageX' in event) { // all browsers except IE before version 9
                var pageX = event.pageX;
                var pageY = event.pageY;
            }
            else {  // IE before version 9
                var pageX = event.clientX + document.documentElement.scrollLeft;
                var pageY = event.clientY + document.documentElement.scrollTop;
            }
           var testt=0; 
           if(pageY>=500){
              
               //calistir(1);
               testt=1;
           }
           if(pageY<500){
             
               //calistir(2);
               testt=2;
             
           }
            var message = "screenX: " + event.screenX + ", screenY: " + event.screenY + "<br />";
            message += "clientX: " + event.clientX + ", clientY: " + event.clientY + "<br />";
            message += "pageX: " + pageX + ", pageY: " + pageY+'calistir : '+testt;

            var info = document.getElementById ("info");
           
            info.innerHTML = message;     
          
    };
                 
        function sayfayuklendiginde(){           
                var $canvas = $("#canvas2");
          // $canvas.on("mouseleave", function(){ setInterval( alert('oldu'),1000);});            
                    $canvas.drawImage({
                        draggable:true,
                        name:'image',
                          layer:true,
                          source: 'img/logoyazi.png',
                          x: 140, y: 93,width:170,height:80,
                          mouseup:function(){
                            $canvas.animateLayer('image', {
                                rotate:360,
                                x:140,
                                y:93,
                            }, 1000,$canvas.animateLayer('image', {
                                rotate:-360,
                                x:220,
                                y:93,
                            }, 1000));
                            $canvas.animateLayer('damla', {
                                x2 : 70,
                            }, 1000);
                            $canvas.animateLayer('damla1', {
                                    x2 : 40,    
                                }, 500);
                            },
                         mousedown:function(){
                            $canvas.animateLayer('damla', {
                                    x2 : 40,    
                                }, 500);
                            $canvas.animateLayer('damla1', {
                                    x2 : 20,    
                                }, 500);
                            }
                          
                    });
                          
                    $canvas.drawBezier({
                        layer : true,
                        name : "damla",
                        rounded : true,
                        //strokeStyle : "#000",
                        //strokeWidth : 7,
                        fillStyle : "black",
                        x:5,
                        y:4,
                        rotate:5,
                        x1 : 87,
                        y1 : 61,
                        cx1 : 83,
                        cy1 : 35,
                        cx2 : 50,
                        cy2 : 35,
                        cx3 : 77,
                        cy3 : 22,
                        x2 : 70,
                        y2 : 25,
                        cx4 : 100,
                        cy4 : 29,
                        cx5 : 85,
                        cy5 : 45,
                        x3 : 87,
                        y3 : 61
                    })
            
                    .drawBezier({
                        layer : true,
                        name : "damla1",
                        rounded : true,
                        //strokeStyle : "#000",
                        //strokeWidth : 1,
                        fillStyle : "red",
                        x:-10,
                        y:1,
                        
                        x1 : 79,
                        y1 : 56,
                        
                        cx1 : 55,cy1 : 47,
                        cx2 : 45,cy2 : 75,
                        
                        x2 : 40,
                        y2 : 60,
                        
                        cx4 : 75,cy4 : 43,
                        cx3 : 40,cy3 : 35,
                        
                        x3 : 79,
                        y3 : 56
                    })
                    .drawBezier({
                        layer : true,
                        name : "damla2",
                        rounded : true,
                        //strokeStyle : "#000",
                        //strokeWidth : 1,
                        fillStyle : "red",
                        x:0,
                        y:0,
                        
                        x1 : 50,
                        y1 : 65,
                        
                        cx1 :36,cy1 : 90,
                        cx2 :58,cy2 : 105,
                        
                        x2 : 40,
                        y2 : 100,
                        
                        cx3 : 26,cy3 : 93,
                        cx4 : 25,cy4 : 80,
                        
                        x3 : 50,
                        y3 : 65
                    })
                    
                    .drawBezier({
                        layer : true,
                        name : "damla3",
                        rounded : true,
                        //strokeStyle : "#000",
                        //strokeWidth : 1,
                        fillStyle : "red",
                        x:0,
                        y:0,
                    
                        x1 : 50,
                        y1 : 85,
                        
                        cx1 : 60,cy1 : 90,
                        cx2 : 50,cy2 : 92,
                        
                        x2 : 89,
                        y2 : 100,
                        
                        cx3 : 90,cy3 : 118,
                        cx4 : 60,cy4 : 125,
                        
                        x3 : 50,
                        y3 : 85
                    });
                    
                var damla = $canvas.getLayer("damla");
                var damla1 = $canvas.getLayer("damla1");
                var damla2 = $canvas.getLayer("damla2");
                var damla3 = $canvas.getLayer("damla3");
                    $canvas.drawArc({
                        name : "myLine2",
                        layer : true,
                        draggable : true,
                        x : 77,
                        y : 45,
                        opacity:0.5,
                        //fillStyle : "#c33",
                        //strokeStyle : "#900",
                        //strokeWidth : 2,
                        //width : 20,
                        //height : 20,
                        radius:12,
                        data : {
                            jointNumber : 2
                            
                        },
                        drag : function(dene) {
                            var j = dene.data.jointNumber;
                            damla["x" + j] = -30+dene.x;
                            damla["y" + j] = -20+dene.y;
                            damla["cx" + 3] = -13+dene.x;
                            damla["cy" + 3] = -23+dene.y;
                        },
                        mouseup : function(layer) {
                            var j = layer.data.jointNumber;
                            $(this).animateLayer(layer, {
                                x : 77,
                                y : 45
                            }, "slow");
                        
                            $canvas.animateLayer("damla", {
                                    x1 : 87,
                                    y1 : 61,
                                    cx1 : 83,
                                    cy1 : 35,
                                    cx2 : 50,
                                    cy2 : 35,
                                    cx3 : 77,
                                    cy3 : 22,
                                    x2 : 70,
                                    y2 : 25,
                                    cx4 : 100,
                                    cy4 : 29,
                                    cx5 : 85,
                                    cy5 : 45,
                                    x3 : 87,
                                    y3 : 61
                            }, "slow");
                        },
                
                        
                    })
                    .drawArc({
                        name : "myLine1",
                        layer : true,
                        draggable : true,
                        x:40,
                        y:55,
                        //fillStyle : "#c33",
                        radius:12,
                        opacity:0.5,
                        
                        data : {
                            jointNumber : 2
                        },
                        drag : function(dene) {
                            var j = dene.data.jointNumber;
                            damla1["x" + j] = dene.x;
                            damla1["y" + j] = dene.y;
                            damla1["cx" + 3] = 5+dene.x;
                            damla1["cy" + 3] = -15+dene.y;
                        },
                        mouseup : function(layer) {
                            var j = layer.data.jointNumber;
                            
                            $(this).animateLayer(layer, {
                                x:40,
                                y:55,
                            }, "slow");
                            $canvas.animateLayer("damla1", {
                                    x:-10,
                                    y:0,
                                    x1 : 79,
                                    y1 : 56,
                                    cx1 : 55,
                                    cy1 : 55,
                                    cx2 : 45,
                                    cy2 : 75,
                                    cx3 : 40,
                                    cy3 : 32,
                                    x2 : 40,
                                    y2 : 60,
                                    cx4 : 77,
                                    cy4 : 50,
                                    x3 : 79,
                                    y3 : 56
                            }, "slow");
                        },
                    })
                    .drawArc({
                        name : "myLine3",
                        layer : true,
                        draggable : true,
                        x:40,
                        y:90,
                        //fillStyle : "#c33",
                        radius:12,
                        opacity:0.5,
                        
                        data : {
                            jointNumber : 2
                        },
                        drag : function(dene) {
                            var j = dene.data.jointNumber;
                            damla2["x" + j] = dene.x;
                            damla2["y" + j] = dene.y;
                            damla2["cx" + 3] = dene.x;
                            damla2["cy" + 3] = dene.y;
                        },
                        mouseup : function(layer) {
                            var j = layer.data.jointNumber;
                            
                            $(this).animateLayer(layer, {
                                x:40,
                                y:90,
                            }, "slow");
                            $canvas.animateLayer("damla2", {
                                x:0,
                                y:0,
                                
                                x1 : 50,
                                y1 : 65,
                                
                                cx1 :36,cy1 : 90,
                                cx2 :58,cy2 : 105,
                                
                                x2 : 40,
                                y2 : 100,
                                
                                cx3 : 26,cy3 : 93,
                                cx4 : 25,cy4 : 80,
                                
                                x3 : 50,
                                y3 : 65
                            }, "slow");
                        },
                    })
                    .drawArc({
                        name : "myLine4",
                        layer : true,
                        draggable : true,
                        x:78,
                        y:105,
                        //fillStyle : "#c33",
                        radius:12,
                        opacity:0.5,
                        
                        data : {
                            jointNumber : 2
                        },
                        drag : function(dene) {
                            var j = dene.data.jointNumber;
                            damla3["x" + j] = dene.x;
                            damla3["y" + j] = dene.y;
                            damla3["cx" + 3] = dene.x;
                            damla3["cy" + 3] = dene.y;
                        },
                        mouseup : function(layer) {
                            var j = layer.data.jointNumber;
                            
                            $(this).animateLayer(layer, {
                                x:78,
                                y:105,
                            }, "slow");
                            $canvas.animateLayer("damla3", {
                                x:0,
                                y:0,
                            
                                x1 : 50,
                                y1 : 85,
                                
                                cx1 : 60,cy1 : 90,
                                cx2 : 50,cy2 : 92,
                                
                                x2 : 89,
                                y2 : 100,
                                
                                cx3 : 90,cy3 : 118,
                                cx4 : 60,cy4 : 125,
                                
                                x3 : 50,
                                y3 : 85
                            }, "slow");
                        },
                    });


                    var img =$canvas.getLayer("image");
                    var d4 = $canvas.getLayer("myLine4");
                    var d3 = $canvas.getLayer("myLine3");
                    var d1 = $canvas.getLayer("myLine2");
                    var d2 = $canvas.getLayer("myLine1");
                    var y1 = $canvas.getLayer("damla");
                    var y2 = $canvas.getLayer("damla1");
                    setInterval(function() {
                        document.getElementById("testci").innerHTML = 'X : ' + d1.x + ' Y : ' + d1.y+'<br>'+y2['x2'];
                    
                        
                        var w = $("#canvas2").width();
                        if (img.x < 15 || img.y < 15 || img.x > w || img.y > 132||d2.x < 15 || d2.y < 15 || d2.x > w || d2.y > 132||d1.x < 15 || d1.y < 15 || d1.x > w || d1.y > 132||d3.x < 15 || d3.y < 15 || d3.x > w || d3.y > 132||d4.x < 15 || d4.y < 15 || d4.x > w || d4.y > 132 )
                        {
                            
                            $canvas.animateLayer('image', {
                                rotate:360,
                                x:140,
                                y:93,
                            }, 1000);
                            $canvas.animateLayer('myLine1', {
                                x:40,
                                y:55,
                            }, 1000);
                            $canvas.animateLayer('myLine2', {
                                x : 77,
                                y : 45
                            }, 1000);
                            $canvas.animateLayer('myLine3', {
                                x:40,
                                y:90,
                            }, 1000);
                            $canvas.animateLayer('myLine4', {
                                x:78,
                                y:105,
                            }, 1000);
                            $canvas.animateLayer("damla", {
                                    x1 : 87,
                                    y1 : 61,
                                    cx1 : 83,
                                    cy1 : 35,
                                    cx2 : 50,
                                    cy2 : 35,
                                    cx3 : 77,
                                    cy3 : 22,
                                    x2 : 70,
                                    y2 : 25,
                                    cx4 : 100,
                                    cy4 : 29,
                                    cx5 : 85,
                                    cy5 : 45,
                                    x3 : 87,
                                    y3 : 61
                            }, "slow");
                            $canvas.animateLayer("damla1", {
                                    x:-10,
                                    y:0,
                                    x1 : 79,
                                    y1 : 56,
                                    cx1 : 55,
                                    cy1 : 55,
                                    cx2 : 45,
                                    cy2 : 75,
                                    cx3 : 40,
                                    cy3 : 32,
                                    x2 : 40,
                                    y2 : 60,
                                    cx4 : 77,
                                    cy4 : 50,
                                    x3 : 79,
                                    y3 : 56
                            }, "slow");
                            $canvas.animateLayer("damla2", {
                                x:0,
                                y:0,
                                
                                x1 : 50,
                                y1 : 65,
                                
                                cx1 :36,cy1 : 90,
                                cx2 :58,cy2 : 105,
                                
                                x2 : 40,
                                y2 : 100,
                                
                                cx3 : 26,cy3 : 93,
                                cx4 : 25,cy4 : 80,
                                
                                x3 : 50,
                                y3 : 65
                            }, "slow");
                            $canvas.animateLayer("damla3", {
                                x:0,
                                y:0,
                            
                                x1 : 50,
                                y1 : 85,
                                
                                cx1 : 60,cy1 : 90,
                                cx2 : 50,cy2 : 92,
                                
                                x2 : 89,
                                y2 : 100,
                                
                                cx3 : 90,cy3 : 118,
                                cx4 : 60,cy4 : 125,
                                
                                x3 : 50,
                                y3 : 85
                                    }, "slow");
                                }
                    }, 600);
                    
                    }
                window.document.body.onload = sayfayuklendiginde;

/*
$canvas.drawText({
    layer:true,
    name:'yazi',
  fillStyle: '#9cf',
  strokeStyle: '#25a',
  strokeWidth: 2,
  x: 150, y: 100,
  fontSize: 48,
  fontFamily: 'Verdana, sans-serif',
  text: 'infovas',
  bringToFront:true,
  opacity:1
}); 
*/


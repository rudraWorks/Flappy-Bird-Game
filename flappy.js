  var hit=new Audio();
			hit.src="hit.wav";


			   var wing=new Audio();
			wing.src="wing.wav";


			 var die=new Audio();
			die.src="die.wav";
			

			  if(localStorage.getItem("flagsy")!=0){

localStorage.clear();
localStorage.setItem("scory",0);
}


		     var over=document.getElementById("over");



			      var first=document.getElementById("first");
			first.style.left="0";
			first.style.top="0";
			first.style.width=innerWidth;
			first.style.height=innerHeight;


			  var can=document.getElementById("can");

			  var rply=document.getElementById("rply");

			  var sc=document.getElementById("sc");
			  var score=0;


			  document.getElementById("hsvalue").textContent=localStorage.getItem("scory");

			  var lv=document.getElementById("lv");
			  var lives=2;

			  var ctx=can.getContext("2d");
			  can.width=innerWidth;
	          can.height=innerHeight;

			  var main=document.getElementById("main");
			  var mainPos=main.getBoundingClientRect();

			  var fall=1,spd=1,x_pos=600,x_pos1=400,spd1=1;
			  var tempH1=350,tempH2=450,x_pos2=800,spd2=1;
			  var tempW2=100,tempW1=130,tempC1="green",tempC2="pink";
              var tempW=130,tempC="grey",tempH=200;

			   var tempH3=150,x_pos3=30,spd3=1;
			  var tempW3=100,tempC3="green";


			  var imgval="url('bg_5.png')";
			 	 var pl=new Audio();
			 pl.src="musicc.mp3";
			 pl.loop=true;
          function k(){

			pl.play();

			}


var tempo=0;

			  var f1=0,f2=0,f3=0,f4=0;

			  var flag=0;


			  function animation()
			  {


			  first.style.zIndex=-3;
				tempo+=.2;
				score=Math.round(tempo);
				ctx.beginPath();
			     ctx.clearRect(0,0,can.width,can.height);

				if(!(lives<=0))
				requestAnimationFrame(animation);

				  mainPos=main.getBoundingClientRect();

				 main.style.top=mainPos.y+fall;
		 can.style.backgroundImage=imgval;

		       sc.textContent=score;

			     fall+=2;
				 if(fall>3.2)
				  {
				    fall=1;
					
				  }

				if(mainPos.y>can.height-50)
                 		main.style.top=(can.height-50)+"px";

                  if(mainPos.y<10)
                 		main.style.top=(10)+"px";

////////////////1//////////////////////

			        ctx.beginPath();
                    ctx.rect(x_pos+40,0,tempW,tempH);
					ctx.fillStyle=tempC;
					ctx.fill();
					ctx.stroke();

					x_pos-=spd;
				  spd+=.04;
				  if(x_pos+40-spd<-140)
				  {  x_pos=innerWidth;;
				    spd=1;
				    tempW=Math.random()*90+80;
					tempH=Math.random()*70+200;
				   tempC="rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
				  }


             	    if((mainPos.x>(x_pos+40))&&mainPos.x<(x_pos+40+tempW)&&(mainPos.y<tempH))
                   { can.style.backgroundImage="url('hahakar.png')";

					  if(!f1)
					  { --lives;
					     f1=1;
						 
						hit.play();
					  }
					lv.textContent=lives;

					}

					else{
					  f1=0;

					}

////////////////////////////2/////////////////////////

			      ctx.beginPath();
                    ctx.rect(x_pos1+40,tempH1,tempW1,1000);
					ctx.fillStyle=tempC1;
					ctx.fill();
					ctx.stroke();

					x_pos1-=spd1;
				    spd1+=.04;
				
				  if(x_pos1+40-spd1<-140)
				  {  x_pos1=innerWidth;;
				   
					 spd1=1;
					 tempW1=Math.random()*90+80;
					tempH1=Math.random()*120+300;
					 tempC1="rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";

				  }

                     if((mainPos.x>(x_pos1+40))&&mainPos.x<(x_pos1+40+tempW1)&&(mainPos.y>tempH1-22))
					 {  can.style.backgroundImage="url('hahakar.png')";
				  
					 if(!f2)
					  { --lives;
					     f2=1;
						 
						 	hit.play();
					  }
					lv.textContent=lives;

					}

					else{
					  f2=0;

					}


				///////////////////////////3//////////////////////////


			  ctx.beginPath();
                    ctx.rect(x_pos2+40,tempH2,tempW2,1000);
					ctx.fillStyle=tempC2;
					ctx.fill();
					ctx.stroke();
					
					x_pos2-=spd2;
				    spd2+=.04;
			
				  if(x_pos2+40-spd2<-140)
				  {  x_pos2=innerWidth;;
				
					spd2=1;
					 tempW2=Math.random()*90+80;
					tempH2=Math.random()*100+299+40;
					 tempC2="rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";

				  }

               if((mainPos.x>(x_pos2+40))&&mainPos.x<(x_pos2+40+tempW2)&&(mainPos.y>tempH2-22))
			     {  can.style.backgroundImage="url('hahakar.png')";
				  
					 if(!f3)
					  { --lives;
					     f3=1;
						
							hit.play();
					  }
					lv.textContent=lives;

					}

					else{
					  f3=0;

					}

////////////////////////////4/////////////////////////

			      ctx.beginPath();
                    ctx.rect(x_pos3+40,0,tempW3,tempH3);
					ctx.fillStyle=tempC3;
					ctx.fill();
					ctx.stroke();

					x_pos3-=spd3;
				    spd3+=.04;
				 
				  if(x_pos3+40-spd3<-140)
				  {  x_pos3=innerWidth;;
				  
					 spd3=1;
					 tempW3=Math.random()*90+30;
					tempH3=Math.random()*50+180+90;
					tempC3="rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";

				  }

                    if((mainPos.x>(x_pos3+40))&&mainPos.x<(x_pos3+40+tempW3)&&(mainPos.y<tempH3))
                      {  can.style.backgroundImage="url('hahakar.png')";

					 if(!f4)
					  { --lives;
					     f4=1;
						
						 	hit.play();
					  }
					lv.textContent=lives;

					}

					else{
					  f4=0;

					}


				  if(!flag)flag=1;

				  else flag=0;

			


				  ///////////////game over ////////////


			  if(lives<=0)
		{

		
		   ctx.fillStyle="yellow";
			ctx.font="bold 41px serif";
			ctx.fillText("GAME OVER",can.width/5,89);
			main.style.transform="rotate(180deg)";
			rply.style.zIndex=1;
			
		   var tempsi=localStorage.getItem("scory");
			if(Math.abs(score)>tempsi){tempsi=score;
             localStorage.setItem("scory",tempsi);}
		   pl.pause();
		die.play();
				 var giring=1;
				  var inter=setInterval(gir,60);
				  function gir()
				  {
				     ++giring;
				      mainPos=main.getBoundingClientRect();
			         main.style.top=(mainPos.y+giring)+"px";
                     if(mainPos.y>=innerHeight-120)clearInterval(inter);
               }

		}

		if(score>180)imgval="url('middle.jpg')";
		if(score>540)imgval="url('less.jpg')";
		if(score>1007)imgval="url('more.png')";


			  }

			 can.addEventListener("click", function()
			  {
			    if(lives!=0)
			    {
			      mainPos=main.getBoundingClientRect();
			      main.style.top=(mainPos.y-40)+"px";
				}


			  });


		localStorage.setItem("flagsy",0);

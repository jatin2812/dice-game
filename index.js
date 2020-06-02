var randoMvariable1=Math.floor(Math.random()*6)+1;

var imageleft="images/dice"+randoMvariable1+".png";

var randoMvariable2=Math.floor(Math.random()*6)+1;

var imageright="images/dice"+randoMvariable2+".png";


document.getElementsByClassName('img1')[0].setAttribute("src",imageleft);


document.querySelector('.img2').setAttribute("src",imageright);



if(randoMvariable1>randoMvariable2)
{
  document.querySelector('h1').innerHTML="Player 1 Wins!";
}
else if(randoMvariable1==randoMvariable2)
{
  document.querySelector('h1').innerHTML="Draw!";
}
else {
  document.querySelector('h1').innerHTML="Player 2 Wins!";
}

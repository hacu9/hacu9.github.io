$(document).ready(function(){
  var $1 = $(".block1");
  var $2 = $(".block2"); 
  var $3 = $(".block3"); 
  var $4 = $(".block4"); 
  var $5 = $(".block5"); 
  var $6 = $(".block6"); 
  var $7 = $(".block7"); 
  var $8 = $(".block8");
  var $9 = $(".block9");
  var $10 = $(".block10"); 
   // T7eenLite.from(block,1 ,{autoAlpha:0,y:"-200px",ease: Bounce.easeOut});
   tl =new TimelineMax({delay:0.5, repeat:3, repeatDelay:2});

  tl
    .from($1,0.7 ,{autoAlpha:0,y:"-200px",ease: Bounce.easeOut},0.5)
    .from($2,0.7 ,{autoAlpha:0,y:"-200px",ease: Bounce.easeOut},1)
    .from($3,0.7 ,{autoAlpha:0,y:"-200px",ease: Bounce.easeOut},1)
    .from($4,0.7 ,{autoAlpha:0,y:"-200px",ease: Bounce.easeOut},0.9)
    .from($5,0.7 ,{autoAlpha:0,y:"-200px",ease: Bounce.easeOut},0.6)
    .from($6,0.7 ,{autoAlpha:0,y:"-200px",ease: Bounce.easeOut},0.9)
    .from($7,0.7 ,{autoAlpha:0,y:"-200px",ease: Bounce.easeOut},0.10)
    .from($8,0.7 ,{autoAlpha:0,y:"-200px",ease: Bounce.easeOut},0.7)
    .from($9,0.7 ,{autoAlpha:0,y:"-200px",ease: Bounce.easeOut},0.11)
    .from($10,0.7 ,{autoAlpha:0,y:"-200px",ease: Bounce.easeOut},0.1)
    

   for(var i = 0;i<11;i++){
   
  }
});
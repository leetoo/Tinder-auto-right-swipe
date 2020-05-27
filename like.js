var confirmBox = confirm('Start right swiper ?');
var seed = 1;
var randNormTime = 3412
var count = 1;
var like = function(){
    if (confirmBox){
      document.querySelector('[aria-label="Like"]').click();
      console.log('Liked ' + count);						  
        count++;
    };
    var x = Math.abs(Math.sin(seed++) * randNormTime);
    console.log('time to swipe ' + x); 
    setTimeout(like, x );
};

setTimeout(like, 300 );

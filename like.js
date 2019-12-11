var confirmBox = confirm('Start right swiper ?');
var count = 1;
var like = function(){
    if (confirmBox){
      document.querySelector('[aria-label="Like"]').click();
      console.log('Liked ' + count);						  
        count++;
    };
    setTimeout(like, 500);
};
setTimeout(like, 500);

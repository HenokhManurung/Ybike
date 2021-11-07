$(document).ready(function(){
    var currSlide = 1

    function nextSlide() {
        if(currSlide < 2){
            $('.slideContainer').animate({
                'left' : '-=100%'
            }, 4000)
            currSlide++;
        }
        else {
            $('.slideContainer').animate({
                'left' : '0'
            }, 4000)
            currSlide = 1
        }
        
    }

    setInterval(nextSlide, 6000);
})
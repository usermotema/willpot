
$("#menu").on('click', function(){

    $("#side_bar_menu").show(200);

});


$("#close_menu").on('click', function(){

    $("#side_bar_menu").hide(200);

});

$('.sign_up').on('click',function(){
    $("#side_bar_menu").hide(200);
    console.log('a');
    document.location.href = 'sign_up/';
});


var image_array = ['img/logo.png',
                            
                            'img/green.jpg',
                            'img/stock.JPG',
                            'img/first_badge.JPG',
                            'img/chilling.JPG',
                            'img/img_willpot.JPG'];

var i = 0;

$("#left_arrow").on('click', function(){
    
   

    
    if(i >= 0){
       console.log(image_array[i]);
        document.getElementById("carousel_image").src = image_array[i];
        
        if(i != 0){
            i--;
        }
    }

});

$("#right_arrow").on('click', function(){
    
    
    if(i < image_array.length){
        console.log(image_array[i]);
        document.getElementById("carousel_image").src = image_array[i];
        i++;
       if(i == (image_array.length-1)){
           i = 0;
       }
    }
});
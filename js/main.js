jQuery(document).ready(function($){

  $(function(){
      $("#slides").slides({
        next: 'next',
        prev: 'prev',
        generatePagination: false,
        play: 3000,
        pause: 1000,
        hoverPause: true
      });
      
      $('#slides-small').slides({
  			next: 'next',
        prev: 'prev',
        generatePagination: false,
        play: 3000,
        pause: 1000,
        hoverPause: true,
        effect: 'fade',
  			animationStart: function(current){
  				$('.caption').animate({
  					
  				},100);
  				
  			},
  			animationComplete: function(current){
  				$('.caption').animate({
  					
  				},200);
  				
  			},
  			slidesLoaded: function() {
  				$('.caption').animate({
  					bottom:0,
  					width: '145px;',
  					left: '330px',
  					top: '95px'
  				},200);
  				$('#slides-small .slides_container').css('overflow', 'visible');
  			}
  		});
  		
  		function minHeight(elem) { // min height function to set all heights equal to heighest value
        var minHeight = 0;
        var elem = $(elem);
        elem.each(function () {
          if ($(this).height() > minHeight) {
            minHeight = $(this).height();
          }
        });
        $(elem).height(minHeight); // set largest height
      }
      minHeight('footer ul')
      
      $(function(){
			// Subnav jQuery
  			if ($('#subnav').length > 0){
  				$('#subnav li:first').addClass('first');
  				$('#subnav li:last').addClass('last');
  				$('#subnav li a').mouseover(function(){
  					$(this).parent().prev().addClass('previous-current');
  					$(this).parent().next().addClass('next-current');
  				});
  				$('#subnav li a').mouseout(function(){
  					$(this).parent().prev().removeClass('previous-current');
  					$(this).parent().next().removeClass('next-current');
  					$('#subnav li.current_page_item').prev().addClass('previous-current');
  					$('#subnav li.current_page_item').next().addClass('next-current');
  				});
  				$('#subnav li.current_page_item').prev().addClass('previous-current');
  				$('#subnav li.current_page_item').next().addClass('next-current');
  			}
  		});
  		
  		  
  $("#subnav li:first-child").on({
    mouseenter: function(){
      $(this).parent().css('background-image', 'url(./images/secondary-left-bg.png)');
    },
    mouseleave: function(){
      $(this).parent().css('background-image', 'none');
    }
  });
  
  $("#subnav li:first-child.current_page_item").parent().css('background-image', 'url(./images/secondary-left-bg.png)');
  
  $("#subnav li:first-child.current_page_item").on({
    mouseenter: function(){
      $(this).parent().css('background-image', 'url(./images/secondary-left-bg.png)');
    },
    mouseleave: function(){
      $(this).parent().css('background-image', 'url(./images/secondary-left-bg.png)');
    }
  });

  });
  

  
});
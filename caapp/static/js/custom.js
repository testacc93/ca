jQuery(window).load(function () {
    "use strict";
   	jQuery("#status").fadeOut();
	jQuery("#preloader").delay(350).fadeOut("slow");
});

$(document).ready(function(e) {
	/* mail function */
	$('#em_sub').click(function(){
		var un=$('#uname').val();
		var em=$('#uemail').val();
		var meesg=$('#message').val();
		
		$.ajax({
			type: "POST",
			url: "ajaxmail.php",
			data: {
				'username':un,
				'useremail':em,
				'mesg':meesg,
				},
			success: function(msg) {
			var full_msg=msg.split("#");
				if(full_msg[0]=='1')
				{
					$('#uname').val("");
					$('#uemail').val("");
					$('#message').val("");
					$('#err').html( full_msg[1] );
				}
				else
				{
					$('#uname').val(un);
					$('#uemail').val(em);
					$('#message').val(meesg);
					$('#err').html( full_msg[1] );
				}
			}
		});
	});

	/*********color change script*******/
	$('.colorchange').click(function(){
		var color_name=$(this).attr('id');
		var new_style='css/color/'+color_name+'.css';
		$('#theme-color').attr('href',new_style);
	//document.cookie="colorname=" + color_name;
	//var allcookies = document.cookie;
	//cookiearray  = allcookies.split(';');
	//console.log(cookiearray);
	//for(var i=0; i<cookiearray.length; i++){
	//name = cookiearray[i].split('=')[0];	 
	//alert("Key is : " + name);
	//}
			   
	});
		
	$('.pattern_change').click(function(){
		var name=$(this).attr('id');
		var new_style='css/pattern/'+name+'.css';
		$('#theme-pattern').attr('href',new_style);
	});

	//rotate setting gear 
	$(function() {
		var $rota = $('#style-switcher .bottom a.settings img'),
			degree = 0,
			timer;
			
		function rotate() {    
			$rota.css({ transform: 'rotate(' + degree + 'deg)'});
			// timeout increase degrees:
			timer = setTimeout(function() {
				++degree;
				rotate(); // loop it
			},0);
		}

		rotate();    // run it!
	});

	$("#style-switcher .bottom a.settings").click(function(e){
		e.preventDefault();
		var div = $("#style-switcher");
		if (div.css("left") === "-161px") {
			$("#style-switcher").animate({
				left: "0px"
			}); 
		} else {
			$("#style-switcher").animate({
				left: "-161px"
			});
		}
	});
	/******color change script end******/
	// index main slider
	$(function(){
		$('.carousel1').carousel({
		  interval: 2000
		});
	});
	$(function(){
		$('#carousel').carousel({
		  interval: 8000
		});
	});	

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	// shortcodes tab scroll animation
	$('#sidebar-wrapper ul li a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	});

	// shortcodes sidebar-nav scroll fixed
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.sidebar-nav').css('position','fixed');
			$('.sidebar-nav').css('top','0px');
		} else {
			$('.sidebar-nav').css('position','absolute');
			$('.sidebar-nav').css('top','20px');
		}
	});

	var hhh = $('#page-content-wrapper').innerHeight() - 290;
	$(window).scroll(function(){
		if ($(this).scrollTop() > hhh) {
			$('.sidebar-nav').css('position','absolute');
			$('.sidebar-nav').css('top','20px');
		}
	});
	
	var h1 = $('.ca_slider2_typo').innerHeight() + 200 ;
	$('.ca_slider2_typo').css('height', h1);

	// smooth scroll
	// $.smoothScroll();
	// if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
	// 	window.onmousewheel = document.onmousewheel = wheel;
		 
	// 	function wheel(event) {
	// 		var delta = 0;
	// 		if (event.wheelDelta) delta = event.wheelDelta / 120;
	// 		else if (event.detail) delta = -event.detail / 3;
		 
	// 		handle(delta);
	// 		if (event.preventDefault) event.preventDefault();
	// 		event.returnValue = false;
	// 	}
		 
	// 	function handle(delta) {
	// 		var time = 500; // delay time
	// 		var distance = 300; // delta point 
	// 		// Dom where it will apply 
	// 		$('html, body').stop().animate({
	// 			scrollTop: $(window).scrollTop() - (distance * delta)
	// 		}, time );
	// 	}
	
	// gallery image hover effect
	if (Modernizr.touch) {
		$(".close-overlay").removeClass("hidden");
		$(".img").click(function(e){
			if (!$(this).hasClass("hover")) {
				$(this).addClass("hover");
			}
		});
		$(".close-overlay").click(function(e){
			e.preventDefault();
			e.stopPropagation();
			if ($(this).closest(".img").hasClass("hover")) {
				$(this).closest(".img").removeClass("hover");
			}
		});
	} 
	else {
		$(".img").mouseenter(function(){
			$(this).addClass("hover");
		})
		.mouseleave(function(){
			$(this).removeClass("hover");
		});
	}

	/*Appear Plugin*/
	$('.appear-progress').appear();
	$('.appear-progress').on('appear', function (e, i) {
		var dataWidth = $(this).data('width');
		$(this).find('.progress-bar').css({ width : dataWidth + '%' });
	});
	$('.appear').appear();
	$('.appear').on('appear', function (e, i) {
		var appearClass = $(this).data('appear-class');
		$(this).css('visibility', 'visible').addClass('animated ' + appearClass);
	});   
   
	// celandar 
	var d = new Date();
	if($("#date").length == 1){
	document.getElementById('date').innerHTML = d.getDate();
	}
	var d = new Date();
	var  weekday1 = new Array(7);
		weekday1[0]=  "Sunday";
		weekday1[1] = "Monday";
		weekday1[2] = "Tuesday";
		weekday1[3] = "Wednesday";
		weekday1[4] = "Thursday";
		weekday1[5] = "Friday";
		weekday1[6] = "Saturday";

	if($("#day").length == 1){	
	document.getElementById('day').innerHTML = weekday1[d.getDay()];
	}
	var weekday=new Array(7);
		weekday[0]="Monday";
		weekday[1]="Tuesday";
		weekday[2]="Wednesday";
		weekday[3]="Thursday";
		weekday[4]="Friday";
		weekday[5]="Saturday";	
		weekday[6]="Sunday";
				
	$( "#datepicker" ).datepicker({
	  onSelect: function(dateText, inst) { 
		var date = $(this).datepicker('getDate'),
			day  = date.getDate(),  
			month = date.getMonth() + 1,              
			year =  date.getFullYear();
		var dayOfWeek = weekday[date.getUTCDay()];
		
			document.getElementById('date').innerHTML = day;
			document.getElementById('day').innerHTML = dayOfWeek;
			//alert(dayOfWeek);
		}
	});
		
	// club photo image popup
	$('[data-fancybox]').fancybox({
	  image : {
		protect: true
	  }
	});
 
   // slider sidebar open
   $('.ca_slider_sidebar_open').click(function(){
	   $('.ca_slider_sidebar .carousel-indicators li span').css('display','block');
	   $('.ca_slider_sidebar').animate({width: "250px"}, 300 );
		$(this).hide(500);
		$('.ca_slider_sidebar_close').show(500);
	   
	   $('.ca_slider_sidebar > .ca_social').show();
	   $('.ca_slider_sidebar > h4').show();
	   $('.ca_slider_sidebar > img').show();
	   
	   $('.ca_slider_sidebar .carousel-indicators li').css('width','260px');
	   $('.ca_slider_sidebar .carousel-indicators li').css('text-align','left');
	   $('.ca_slider_sidebar .carousel-indicators li').css('padding-left','50px');
	   
	   $('.ca_slider_sidebar .carousel-indicators .active').css('width','260px');
	   $('.ca_slider_sidebar .carousel-indicators .active').css('text-align','left');
	   $('.ca_slider_sidebar .carousel-indicators .active').css('padding-left','50px');
	   
   });	
   
   //animate scroll down icon
	reanimate();
	function reanimate(){
		$('.scroll_down').animate({bottom:40},1000).animate({bottom:55},1000, function(){
			setTimeout(reanimate, 2000);
		});
	} //animate scroll down icon
	reanimate();
	function reanimate(){
		$('.scroll_down').animate({bottom:40},1000).animate({bottom:55},1000, function(){
			setTimeout(reanimate, 2000);
		});
	}
   
   // slider sidebar close
	$('.ca_slider_sidebar_close').click(function(){
	   $('.ca_slider_sidebar').animate({width: "62px"}, 300 );
		$(this).hide(500);
		$('.ca_slider_sidebar_open').show(500);
		
		$('.ca_slider_sidebar > .ca_social').hide();
		$('.ca_slider_sidebar > h4').hide();
		$('.ca_slider_sidebar > img').hide();
		
		$('.ca_slider_sidebar .carousel-indicators li span').css('display','none');
		
		$('.ca_slider_sidebar .carousel-indicators li').css('width','72px');
		$('.ca_slider_sidebar .carousel-indicators li').css('text-align','center');
		$('.ca_slider_sidebar .carousel-indicators li').css('padding-left','0px');
	   
		$('.ca_slider_sidebar .carousel-indicators .active').css('width','72px');
		$('.ca_slider_sidebar .carousel-indicators .active').css('text-align','center');
		$('.ca_slider_sidebar .carousel-indicators .active').css('padding-left','0px');
	});
    
	// sub menu 
	$('.ca_menu ul li').hover(function(){
		$(this).children('ul').addClass('animated fadeInDown').toggle();
	});
		
	// search bar show - hide	
	$('.ca_search_icon').on('click',function(){
		$('.ca_search_form').slideToggle(500);
	});		
	// blog category read more button click
	$('.ca_read_more_blog_cat a').click(function(){
		$(this).children('img').show();
		var elem = $(this).children('img');
		setTimeout(function(){
			elem.hide();        
		}, 2000); 
		$('.ca_hide_blog_cat').delay(2000).slideDown();
	});
			
	$('.ca_client_loadmore_btn').click(function(){
		$(this).children('img').show();
		var elem = $(this).children('img');
		setTimeout(function(){
			elem.hide();        
		}, 2000); 
		$('.ca_hide_blog_cat').delay(2000).slideDown();
	});

	//team image hover
	$('.ca_team_item').hover(function(){
		$(this).children('.ca_team_image_overlay').fadeToggle();
	});
		
	// over client page slider tab
	$('#ca_client_detail1').show();
	$('.ca_team_image_link ul li a.ca_our_client_tab').click(function(){
		var itm =$(this).attr("id");
		$('#ca_client_detail'+itm).show().addClass('animated fadeInDown');
		var cur_id='ca_client_detail'+itm;
			$('.ca_client_tb').each(function(){
				if($(this).attr("id")!=cur_id)
				$(this).hide();
			});
	});
	
	//home page client tab
	$('#client_detail_i1').show();
		$('.ca_our_clients #ca_our_clients_slider .ca_our_clients_slider_item .ca_our_clients_item').click(function(){
			var itm2 =$(this).attr("id");
			$('#client_detail_'+itm2).show().addClass('animated fadeInDown');
			var cur_id2='client_detail_'+itm2;
				$('.ca_big_jq').each(function(){
					if($(this).attr("id")!=cur_id2)
					$(this).hide();
				});
		});

	/* =========================================
	---- CountTo plugin
	=========================================== */
	if ($.fn.countTo) {
		$('.count').countTo();

	/* after appear event call again */
		$('.appear-count').appear();
		$('.appear-count').on('appear', function (e, i) {
			if (!$(this).hasClass('activated')) {
				$('.count').countTo();
				$(this).addClass('activated');
			}
		});
	}

	// price table active
	$('.ca_price_table').hover(function(){
		$(this).children('.ca_table').addClass('active');
		$(this).children('.ca_table').removeClass('active');
	});

});
		
//our capabilities slider home page		
$(document).ready(function() {
	var owl = $("#ca_our_capabilities_slider");
	$("#ca_our_capabilities_slider").owlCarousel({
		loop: true,
		items: 2,
		autoplay: true,
		autoplayTimeout:1000,
		smartSpeed: 1500,
		dots:false,
		nav: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:2
			}
		}
	});
  // Custom Navigation Events
});	

//testimonials slider home page
$(document).ready(function() {
  var owl = $("#ca_testimonials_slider");
	$("#ca_testimonials_slider").owlCarousel({
		loop: true,
		items: 2,
		autoplay: true,
		autoplayTimeout:1000,
		smartSpeed: 1500,
		dots:false,
		nav: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
  // Custom Navigation Events
});			

//team slider home page
$(document).ready(function() {
	var owl = $("#ca_team_slider");
	$("#ca_team_slider").owlCarousel({
		items: 2,
		autoplay: false,
		autoplayTimeout:1000,
		smartSpeed: 1500,
		dots:false,
		nav: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:2
			}
		}
	});
  // Custom Navigation Events
});		

//Our Clients slider home page
$(document).ready(function() {
	var owl = $("#ca_our_clients_slider");
	$("#ca_our_clients_slider").owlCarousel({
		loop: true,
		items: 2,
		autoplay: true,
		autoplayTimeout:1000,
		smartSpeed: 1500,
		dots:false,
		nav: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:2
			}
		}
	});
  // Custom Navigation Events
  $(".owl-nav").attr('data-scrollreveal','enter from the top over 1s but wait 0.5s');
});		

//team slider home page
$(document).ready(function() {
	var owl = $("#ca_team_slider1");
	owl.owlCarousel({
		items : 4, 
		itemsDesktop : [1000,4], 
		itemsDesktopSmall : [900,3], 
		itemsTablet: [600,2], 
		itemsMobile : false, 
		autoPlay : false
	});
});	
//Gallery Effect

//team slider about page
$(document).ready(function() {
	var owl = $("#ca_team_for_about_slider");
	owl.owlCarousel({
		loop: true,
		items: 3,
		autoplay: true,
		autoplayTimeout:1000,
		smartSpeed: 1500,
		dots:false,
		nav: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
  // Custom Navigation Events
});	

// index2 main slider			
$(document).ready(function() {
	var hi = window.innerHeight;
	var wi = window.innerWidth;
	$('.ca_index2_slider #ca_slider2 .item img.ca_slider_img').css('height', hi);
	$('.ca_index2_slider #ca_slider2 .item img.ca_slider_img').css('width', wi);	
	
     var owl = $("#ca_slider2");
	  owl.owlCarousel({
        navigation : false,
        singleItem : true,
        transitionStyle : "fadeUp"
	});

	  // Custom Navigation Events
	$(".ca_index2_slider .ca_next").click(function(){
		owl.trigger('owl.next');
	})
	$(".ca_index2_slider .ca_prev").click(function(){
		owl.trigger('owl.prev');
	})	

      //Select Transtion Type
    $("#transitionType").change(function(){
        var newValue = $(this).val();

        //TransitionTypes is owlCarousel inner method.
        owl.data("owlCarousel").transitionTypes(newValue);

        //After change type go to next slide
        
	});
});
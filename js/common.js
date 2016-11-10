$(function() {

 $('.part-left, .part-right').css({
        height: $(window).height() 
    });


$('.top-nav').stick_in_parent();

//SLider-header
$(".slider").owlCarousel({
	nav:false,
	loop:true,
	items:1,
	nav:true,
	navText:false
})

//Scrolling to ID
	$(".main_menu a").click(function() { // open news		
		$("a[href*='#']").mPageScroll2id();
		$('.hidden-menu').hide();  
	});


//tabs
$(".tab-item").not(":first").hide();
$(".wrapper .tab").click(function(){
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");



	// show main menu
	$('.toggle-mnu, .mnu-span, .togled').click(function() {  		
		$('.head-h-pannel').css({'display' : 'block'});
		$('.hidden-menu').show(150);
	});
	$('.close-mnu').click(function() {
		$('.head-h-pannel, .hidden-menu').hide(150);  		
	});


$('.news-modal').magnificPopup({
	type: 'inline',
	preloader: false,
	focus: '#username',
	modal: true,
	gallery: {
		enabled: true
	}
});


//Active el
$('.news-wrap h2').on('click', function() {
	$(this).addClass('active').siblings().removeClass('active');
});

$('.head-h-pannel li').on('click', function() {
	$(this).addClass('active').siblings().removeClass('active');
});





	$('.page-popup').magnificPopup({
		type: 'ajax',
		preloader: false,
		focus: '#username',
		modal: true,
		fixedBgPos: true,
		fixedContentPos: true,
		callbacks: {
			parseAjax: function(mfpResponse) {
				mfpResponse.data = $(mfpResponse.data).find('.container-owl');
			},
			ajaxContentAdded: function() {
				$(".owl-carousel-page").owlCarousel({

					
      nav : true, // Show next and prev buttons
      slideSpeed : 600,
      paginationSpeed : 700,
      singleItem:true,
      dots:false,
      mouseDrag:false,
      items : 1,
      navText:false


    });

			}

		}

	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});



//Select
$('#select-news').selectize();
//Always END
$(".preloader").fadeOut();

});
function tabOn(onto,index) {
	var tabs = $("a[onto="+onto+"]");
	tabs.removeClass('on');
	var selectedTab = tabs.eq(index);
	selectedTab.addClass('on');

	var contents = $('.'+onto);
	contents.hide();
	contents.eq(index).show();
}

function getQueryString(name) {
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
var r = window.location.search.substr(1).match(reg);
if (r != null) return unescape(r[2]); return null;
}

$(document).ready(function(){
	var targets = [];
	var onto = $("a[onto]").each(function(){
		var value=$(this).attr('onto');
		var count = jQuery.grep(targets,function(val,i){ return val==value; }).length;
		$(this).click(function(){
			tabOn(value,count);
		});
		if(count==0)
			tabOn(value,0);
		targets.push(value);
	});
});
jQuery(function($) {
                $(document).ready( function() {
$.goup({

                trigger: 100,

                bottomOffset: 150,

                locationOffset: 100,

                title: '',

                titleAsText: true

            });
                  //enabling stickUp on the '.navbar-wrapper' class
				  if($('.nav-bar').length > 0)
				  {
                  $('.nav-bar').stickUp();
				  }

				  if($('.nav2').length > 0)
				  {
                  $('.nav2').stickUp();
				  }
if($('.conf').length > 0)
				  {
                  $('.conf').stickUp();
				  }


				  if($('#dates').length > 0)
				  {
					  var itemids=new Array();
					  for(var i=0;i<$('#dates a').size();i++)
					  {
						 itemids[i]="tm"+(i+1);
					  }
					  /*$('#dates').stickUp({
						   parts:itemids,
						   itemClass:'databtns',
						   itemHover:'selected',
					  });*/
					  //$('#dates').stickUp();
                                         datevartop = 300;
					 $(document).on('scroll', function() {
					     varscroll = parseInt($(document).scrollTop());
						 if(datevartop < varscroll){
							$('#dates').css("position","fixed");
							$('#dates').css({
								top: '50px'
							}, 10, function(){

							});
						};

						if(varscroll< datevartop){
							$('#dates').css({position:"absolute",top:"0px"});
						};
					 });

				      $('#dates a.databtns').each(function(index, element) {
							$(this).click(function (){
								$('html, body').animate({
									scrollTop: $('#issues li').eq(index).offset().top-100
								}, 1000);

								$('#dates a.databtns').removeClass('selected').eq(index).addClass('selected').fadeTo(500,1);

							});
					  });

				  }

				  /*
				  if($('.m-list li').size()>0)
				  {
					 $('.m-list li .m-tt a').on('click',function(){
						$('.m-cont').hide();
					    $(this).closest('li').find('.m-cont').show();
					 });
				  }*/

				  if($('.childnavbar').length > 0)
				  {
					  if($('.contentbox').length > 0)
					  {
						  for(var i=0;i<$('.contentbox').length;i++)
						  {
							  if($('.contentbox:eq('+i+') h2').length > 0)
							  {
								  for(var j=0;j<$('.contentbox:eq('+i+') h2').length;j++)
								  {
									 $('.childnavbar').append('<a href=\'javascript:;\' class=\'fa-link\'>'+$('.contentbox:eq('+i+') h2:eq('+j+')').html()+'</a>');
								  }

							  }

							  if($('.contentbox:eq('+i+') h3').length > 0)
							  {
								  for(var j=0;j<$('.contentbox:eq('+i+') h3').length;j++)
								  {
									 $('.childnavbar').append('<a href=\'javascript:;\' class=\'child-link\'>'+$('.contentbox:eq('+i+') h3:eq('+j+')').html()+'</a>');
								  }

							  }

						  }
					  }
					  $('.childnavbar').stickUp();
					  $('.childnavbar .fa-link').removeClass("on").eq(0).addClass("on");
					  $('.childnavbar .fa-link').each(function(index, element) {
							$(this).click(function (){
								$('html, body').animate({
									scrollTop: $('.contentbox h2').eq(index).offset().top-100
								}, 1000);
                                                                $('.childnavbar .fa-link').removeClass("on").eq(index).addClass("on");
							});
						});
					  $('.childnavbar .child-link').each(function(index, element) {
                        $(this).click(function (){
							$('html, body').animate({
								scrollTop: $('.contentbox h3').eq(index).offset().top-100
							}, 1000);
						});
                      });
				  }




				  $('.nav-cont > li').hover(function(){
        $(this).find('.two-list').slideDown(300);
    },function(){
        $(this).find('.two-list').hide(300);
    });

	$(".contentbox img").on("click",function(){  window.open($(this).attr("src"), '_blank');});

                });
});

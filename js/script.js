$(document).ready(function(){
	$('.images').each(function(){
		$(this).find('a').lightBox({
			maxHeight: ($(window).height() * 0.8), 
			maxWidth: ($(window).width() * 0.8),
			imageLoading:			'/images/lightbox-ico-loading.gif',		// (string) Path and the name of the loading icon
			imageBtnPrev:			'/images/lightbox-btn-prev.gif',			// (string) Path and the name of the prev button image
			imageBtnNext:			'/images/lightbox-btn-next.gif',			// (string) Path and the name of the next button image
			imageBtnClose:			'/images/lightbox-btn-close.gif',		// (string) Path and the name of the close btn
			imageBlank:				'/images/lightbox-blank.gif'			// (string) Path and the name of a blank image (one pixel)
		});
	});
	
	var showChar = 100;
	var ellipsestext = "...";
	var moretext = "more";
	var lesstext = "less";
	$('.item > .message').each(function() {
		var textContent = $(this).text();
		var htmlContent = $(this).html();
		if(textContent.length > showChar) {
			var c = textContent.substr(0, showChar);
			var html = '<span class="short">'+ c + '</span><span class="moreellipses">' + ellipsestext+ '&nbsp;</span><div class="morecontent"><span>' + htmlContent + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></div>';
			$(this).html(html);
		}
 
	});
 
	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		$(this).parent().parent().find('.short').toggle();
		return false;
	});
});

function isElementInViewport (el) { // Thanks https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
	var rect = el.getBoundingClientRect();

	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

document.addEventListener("DOMContentLoaded", function(){
	var scroll = window.requestAnimationFrame || function(callback){window.setTimeout(callback, 1000/60)};
	var elementsToShow = document.querySelectorAll('.event');

	function loop(){
		console.log(elementsToShow);
		elementsToShow.forEach(function(element){
			
			if(isElementInViewport(element)){
				element.classList.add('visible');
			}else{
				element.classList.remove('visible');
			}
		})
		scroll(loop);
	}

	loop();

});



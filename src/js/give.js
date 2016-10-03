//Big object for all js work
var gv = {
	direction: function(){
	var doc = document.documentElement;
		var docLang = doc.getAttribute('lang')
		if (docLang == 'en'){
			doc.setAttribute('dir','ltr')
		}else{
			doc.setAttribute('dir','rtl')
		}
	},
	//burger
	burger: function(){
		var trigger = document.getElementsByClassName('header-burger');
		var triggerWrap = [];

		for (var i = 0; i < trigger.length; i++) {
			triggerWrap.push(trigger[i])
		}
		triggerWrap.forEach(this.burgrEach)

	},
	burgrEach: function(item){
		var parentTrigger = item.parentNode;
		var NextOfTrigger = parentTrigger.nextElementSibling;
		var state = false
		item.onclick = function(){
			
			if(!state){
				state = true;
				NextOfTrigger.style.height = NextOfTrigger.scrollHeight + 'px';
				parentTrigger.classList.add('active')
			}else{
				state = false;
				NextOfTrigger.style.height = 0 + 'px'
				parentTrigger.classList.remove('active')
			}
		}
	},

	//slider
	sliderInit: function(){
		//ingradients
		var sliderNext = document.getElementsByClassName('slider-next')
		var sliderPrev = document.getElementsByClassName('slider-prev')
		
		var sliderNextWrap = []
		var sliderPrevWrap = []

		var sliderIndex = 0

		//instructions

		//NextSlider
		for(var i = 0; i < sliderNext.length; i++){
			sliderNextWrap.push(sliderNext[i])
		}

		//PrevSlider
		for(var i = 0; i < sliderPrev.length; i++){
			sliderPrevWrap.push(sliderPrev[i])
		}

		sliderNextWrap.forEach(function(item){
			var parent = item.parentNode
			var sibling = parent.nextElementSibling
			var slides = document.getElementsByClassName('slider-slide')

			item.addEventListener('click',function(){
				if(sliderIndex === slides.length - 1){
					sliderIndex = 0
					sibling.style.left = '-' + (sliderIndex * 100) + '%'
				}else{
					sliderIndex ++
					sibling.style.left = '-' + (sliderIndex * 100) + '%'
				}

			})
				
		})
		sliderPrevWrap.forEach(function(item){
			var parent = item.parentNode
			var sibling = parent.nextElementSibling
			var slides = document.getElementsByClassName('slider-slide')

			item.addEventListener('click',function(){
				if(sliderIndex === 0){
					sliderIndex = slides.length - 1
					sibling.style.left = '-' + (sliderIndex * 100) + '%'
				}else{
					sliderIndex --
					sibling.style.left = '-' + (sliderIndex * 100) + '%'
				}
			})
		})

	},

	//Dom Manipulation
	addClass: function(item,className){
		var el = document.querySelector(item)
		el.className += ' ' + className
	},
	removeClass: function(item,className){
		var el = document.querySelector(item)
		el.classList.remove(className)
	},
	append: function(item,txt){
		var el = document.querySelector(item)
		el.innerHTML += txt
	},
	before: function(item,target){
		var el = document.querySelector(item)
		var parentEl = el.parentNode
		var tgt = document.querySelector(target)
		parentEl.insertBefore(el,tgt)
	},
	create: function(item,parent){
		var parentEl = document.querySelector(parent)
		var newEl = document.createElement(item)
		parentEl.appendChild(newEl)
	}
}

module.exports = gv
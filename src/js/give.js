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
	burger: function(){
		var trigger = document.getElementsByClassName('header-burger');
		var pushed = [];

		for (var i = 0; i < trigger.length; i++) {
			pushed.push(trigger[i])
		}
		pushed.forEach(this.burgrEach)

	},
	burgrEach: function(item,index,arr){
		var parentTrigger = item.parentNode;
		var NextOfTrigger = parentTrigger.nextElementSibling;
		var state = false
		item.onclick = function(){
			parentTrigger.className += ' ' + 'active'
			if(!state){
				state = true;
				NextOfTrigger.style.height = NextOfTrigger.scrollHeight + 'px';
			}else{
				state = false;
				NextOfTrigger.style.height = 0 + 'px'
			}
		}
	},
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
	}
}

module.exports = gv
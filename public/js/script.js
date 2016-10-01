(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
//Custom .js

var gv = require("./give.js")


//Calling all functions on load events
window.addEventListener('load',function(){
	gv.direction();
	gv.burger();
})

gv.append('#header-nav .container','<h1>hi</h1>')
gv.before('h1','.header-head')
gv.addClass('h1','active')
gv.addClass('h1','active3')
gv.addClass('h1','active7')

},{"./give.js":1}]},{},[2]);

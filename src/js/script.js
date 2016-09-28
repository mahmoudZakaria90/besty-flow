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
gv.addClass('h1','active5')

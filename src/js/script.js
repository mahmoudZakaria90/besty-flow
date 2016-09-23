//Custom .js

//Calling all functions on load events
window.addEventListener('load',function(){
	gv.direction();
	gv.burger()
})

gv.append('#header-nav .container','<h1>hi</h1>')
gv.before('h1','.header-head')


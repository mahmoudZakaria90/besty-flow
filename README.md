# BestyFLow(give.css)
###### Multiple classes = Shape your styles + Make/edit your web pages faster

# How to use give.css?
##### First the workflow has a general rules with default values (Customizable of course!) for best implementation also inclueds sliders, dropdowns and burger links.<br>
### Let's gettin' started
Ok, now we have this element `h1` and i want to shape its style quickly.<br> 
`<h1 class="main-title gv-padding gv-margin-lg gv-color-main gv-bg-black gv-shadow-text">Big title</h1>`<br>
`<button class="primary-btn gv-padding-rl gv-radius gv-shadow-box">click</button>`

#### This will result
####`h1`
- <b>gv-padding</b>: padding all sides.
- <b>gv-margin-lg</b>: margin large all sides.
- <b>gv-color-main</b>: color property will take the value of `$main-color` or whatever value.
- <b>gv-color-black</b>: background-color property will take the value of `$black-color` or `black` keyword.

#### 
# Used kit
I used gulp and bower for my dependencies and devDependencies :

### Dependencies //Bower
- Normalize.css
- Font awesome
- jQuery

### DevDependencies //gulp
- gulp-ruby-sass
- gulp-connect 
- gulp-jshint
- Browserify

### Follow these steps below to get started :
- `git clone github@github.com:mahmoudzakaria90/besty-flow.git`
- `npm install`
- `bower update`

#### for quick use
`<link href="css/style-en.css" rel="stylesheet">`

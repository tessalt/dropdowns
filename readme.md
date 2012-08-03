Dropdown menus: responsive, accessible, multi-level
===========================
Code to hopefully be improved with more flexibility, currently just copied and pasted from a project. 

##Features: 

* Up to 3 levels of navigation
* Collapses into vertical menu at breakpoint (default is 600px)
* Vertical menu activated on touch/click, horizontal menu activated on hover (I'd like to add in detection for touch events, but most touch devices with wider screens also translate hover events into touch)
* At breakpoint, menu is hidden by default, shown when "Menu" link is clicked
* Screen reader accessible 

##Note
Adjust breakpoints in **both** css and js file. 
jQuery is required. 
Pending further browser testing. So far has been tested in:

* Modern Firefox/Chrome/Safari/Opera
* Safari mobile
* Android 2.3 stock browser
* Opera mobile 
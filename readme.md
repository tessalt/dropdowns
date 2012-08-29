Dropdown menus: responsive, accessible, multi-level
===========================
Code to hopefully be improved with greater flexibility, currently just copied and pasted from a project. 

<a href="http://tessathornton.com/demos/dropdowns/">Demo</a>

##Features: 

* Up to 3 levels of navigation
* Collapses into vertical menu at breakpoint (default is 768px)
* Vertical menu activated on touch/click, horizontal menu activated on hover (I'd like to add in detection for touch events, but most touch devices with wider screens also translate hover events into touch)
* At breakpoint, menu is hidden by default, shown when "Menu" link is clicked (screen refresh required)
* Screen reader accessible 

##Notes
Adjust breakpoints in **both** css and js file. 

jQuery is required. 

Pending further browser testing. So far has been tested in:

* Modern Firefox/Chrome/Safari/Opera
* IE 8-9 
* Older IE *should* be okay, haven't figured out a way to test reliably
* Safari mobile
* Android 2.3 stock browser
* Opera mobile 
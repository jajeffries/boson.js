boson.js
========

Tiny jQuery/Zepto like DOM manipulation library. Targetted towards mobile development such as PhoneGap or Cordova.

Currently Supported Functionality
---------------------------------
- $
- addClass
- append
- attr
- children
- closest
- data
- find
- hasClass
- height
- hide
- html
- parent
- remove
- removeAttr
- removeClass
- show
- text
- val
- width

Why make this project?
----------------------
jQuery and Zepto are great, but I only ever use a small subset of their functionality. To save a bit of space, boson.js has a simpler implementation and only a subset of the features of jQuery or Zepto. jQuery supports most browsers and Zepto supports modern browsers, but at the moment I mostly work in environments where I can control which browsers will be used so I don't need to worry too much about legacy or even slightly older modern browsers.

What's with the name?
---------------------
A boson is a tiny sub atomic particle that carries force. I'd like to think that boson.js is tiny and powerful.


Aims
----
- To be a compatible subset of jQuery and Zepto
- To support events
- To have easy extension points
- To be really small (>5kb)
- To be easy to debug
- To be fast
- To support riot.js observables 
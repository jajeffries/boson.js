(function() {
	var $ = function (selector) {

		var self = this,
			el = selector === document ? 
					document : 
					document.querySelector(selector);

		self.addClass = function (classes) {
			el.className = el.className + " classes";
			return self;
		};

		self.append = function (newEl) {
			newEl = typeof(newEl) === "object" && newEl._el ? newEl._el : newEl;
			el.appendChild(newEl);
			return self;
		};

		self.children = function (selector) {
			return el.querySelector(selector || '*').map($);
		};

		self.closest = function (selector) {
			// TODO : this ones more difficult
		};

		self.data = function (name, value) {
			if(typeof value === "undefined") {
				return el.dataset[name];
			} else {
				el.dataset[name] = value;
				return self;
			}
		};

		self.find = function (selector) {
			return self.children(selector);
		};

		self.hasClass = function (className) {
			return el.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(el.className);
		};

		self.height = function () {
			return el.offsetHeight;
		};

		self.hide = function () {
			el.style['display'] = 'none';
			return self;
		};

		self.html = function () {
			return el.innerHtml;
		};

		self.parent = function () {
			return $(el.parentElement);
		};

		self.remove = function () {
			var returnEl = $(el);
			el.parentElement.removeChild(el);
			return returnEl;
		};

		self.removeAttr = function (attr) {
			el.removeAttribute(attr);
			return self;
		};

		self.removeClass = function (className) {
			var re = '\b' + className + '\b';
			el.className.replace(re,'')
			return self;
		};

		self.show = function () {
			el.style['display'] = 'block';
			return self;
		};

		self.text = function () {
			// TODO: Need to work out the difference between this and .html()
		};

		self.val = function () {
			// TODO: Need to work out the difference between this and .html()
		};

		self.height = function () {
			return el.offsetWidth;
		};

		self._el = el;
		return self;
	};
	window.$ = window.$ || $;
}}();
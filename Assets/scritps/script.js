/*For Typewriter starts*/
!function ($) {
    "use strict"; var Typed = function (el, options) {
        this.el = $(el); this.options = $.extend({}, $.fn.typed.defaults, options);
        this.isInput = this.el.is("input"); this.attr = this.options.attr; this.showCursor = this.isInput ? false : this.options.showCursor;
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(); this.contentType = this.options.contentType;
        this.typeSpeed = this.options.typeSpeed; this.startDelay = this.options.startDelay; this.backSpeed = this.options.backSpeed;
        this.backDelay = this.options.backDelay; this.stringsElement = this.options.stringsElement; this.strings = this.options.strings;
        this.strPos = 0; this.arrayPos = 0; this.stopNum = 0; this.loop = this.options.loop; this.loopCount = this.options.loopCount; this.curLoop = 0; this.stop = false; this.cursorChar = this.options.cursorChar; this.shuffle = this.options.shuffle; this.sequence = []; this.build()
    }; Typed.prototype = { constructor: Typed, init: function () { var self = this; self.timeout = setTimeout(function () { for (var i = 0; i < self.strings.length; ++i)self.sequence[i] = i; if (self.shuffle) self.sequence = self.shuffleArray(self.sequence); self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos) }, self.startDelay) }, build: function () { var self = this; if (this.showCursor === true) { this.cursor = $('<span class="typed-cursor">' + this.cursorChar + "</span>"); this.el.after(this.cursor) } if (this.stringsElement) { this.strings = []; this.stringsElement.hide(); console.log(this.stringsElement.children()); var strings = this.stringsElement.children(); $.each(strings, function (key, value) { self.strings.push($(value).html()) }) } this.init() }, typewrite: function (curString, curStrPos) { if (this.stop === true) { return } var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed; var self = this; self.timeout = setTimeout(function () { var charPause = 0; var substr = curString.substr(curStrPos); if (substr.charAt(0) === "^") { var skip = 1; if (/^\^\d+/.test(substr)) { substr = /\d+/.exec(substr)[0]; skip += substr.length; charPause = parseInt(substr) } curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip) } if (self.contentType === "html") { var curChar = curString.substr(curStrPos).charAt(0); if (curChar === "<" || curChar === "&") { var tag = ""; var endTag = ""; if (curChar === "<") { endTag = ">" } else { endTag = ";" } while (curString.substr(curStrPos + 1).charAt(0) !== endTag) { tag += curString.substr(curStrPos).charAt(0); curStrPos++; if (curStrPos + 1 > curString.length) { break } } curStrPos++; tag += endTag } } self.timeout = setTimeout(function () { if (curStrPos === curString.length) { self.options.onStringTyped(self.arrayPos); if (self.arrayPos === self.strings.length - 1) { self.options.callback(); self.curLoop++; if (self.loop === false || self.curLoop === self.loopCount) return } self.timeout = setTimeout(function () { self.backspace(curString, curStrPos) }, self.backDelay) } else { if (curStrPos === 0) { self.options.preStringTyped(self.arrayPos) } var nextString = curString.substr(0, curStrPos + 1); if (self.attr) { self.el.attr(self.attr, nextString) } else { if (self.isInput) { self.el.val(nextString) } else if (self.contentType === "html") { self.el.html(nextString) } else { self.el.text(nextString) } } curStrPos++; self.typewrite(curString, curStrPos) } }, charPause) }, humanize) }, backspace: function (curString, curStrPos) { if (this.stop === true) { return } var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed; var self = this; self.timeout = setTimeout(function () { if (self.contentType === "html") { if (curString.substr(curStrPos).charAt(0) === ">") { var tag = ""; while (curString.substr(curStrPos - 1).charAt(0) !== "<") { tag -= curString.substr(curStrPos).charAt(0); curStrPos--; if (curStrPos < 0) { break } } curStrPos--; tag += "<" } } var nextString = curString.substr(0, curStrPos); if (self.attr) { self.el.attr(self.attr, nextString) } else { if (self.isInput) { self.el.val(nextString) } else if (self.contentType === "html") { self.el.html(nextString) } else { self.el.text(nextString) } } if (curStrPos > self.stopNum) { curStrPos--; self.backspace(curString, curStrPos) } else if (curStrPos <= self.stopNum) { self.arrayPos++; if (self.arrayPos === self.strings.length) { self.arrayPos = 0; if (self.shuffle) self.sequence = self.shuffleArray(self.sequence); self.init() } else self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos) } }, humanize) }, shuffleArray: function (array) { var tmp, current, top = array.length; if (top) while (--top) { current = Math.floor(Math.random() * (top + 1)); tmp = array[current]; array[current] = array[top]; array[top] = tmp } return array }, reset: function () { var self = this; clearInterval(self.timeout); var id = this.el.attr("id"); this.el.empty(); if (typeof this.cursor !== "undefined") { this.cursor.remove() } this.strPos = 0; this.arrayPos = 0; this.curLoop = 0; this.options.resetCallback() } }; $.fn.typed = function (option) { return this.each(function () { var $this = $(this), data = $this.data("typed"), options = typeof option == "object" && option; if (data) { data.reset() } $this.data("typed", data = new Typed(this, options)); if (typeof option == "string") data[option]() }) }; $.fn.typed.defaults = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, shuffle: false, backDelay: 500, loop: false, loopCount: false, showCursor: true, cursorChar: "|", attr: null, contentType: "html", callback: function () { }, preStringTyped: function () { }, onStringTyped: function () { }, resetCallback: function () { } }
}(window.jQuery);
/*For Typewriter ends*/

/*Jquery Ripple Starts*/
$(document).ready(function () {
    try {
        $('.index').ripples({
            resolution: 512,
            dropRadius: 20, //px
            perturbance: 0.04,
        });
    }
    catch (e) {
        $('.error').show().text(e);
    }
});
/*Jquery Ripple Ends*/

/* Sidebar Show and Hide Starts */
let hamb = document.querySelector('.hamburgerHold');
let sideB = document.querySelector('.sidebar');
hamb.addEventListener('click', function () {
    sideB.classList.toggle('closed');
});
/* Sidebar Show and Hide Ends */

/* Bottombar Show and Hide Starts */
let Bothamb = document.querySelector('.bottomHamburger');
let BotLinks = document.querySelector('.bottomBar ul');
let BotLinks2 = document.querySelectorAll('.bottomBar ul li a');

let bodyWrapper = document.querySelector('.wrapper');
bodyWrapper.addEventListener('click', function () {
    BotLinks.classList.remove('Show');
    BotLinks2.forEach(el => {
        el.style.display = 'none';
    })
});
Bothamb.addEventListener('click', function () {
    BotLinks.classList.toggle('Show');
    BotLinks2.forEach(el => {
        if (el.style.display == 'flex')
            el.style.display = 'none';
        else
            el.style.display = 'flex';
    })
});
/* Bottombar Show and Hide Ends */

/*For Back to top starts*/
document.querySelector('.main').addEventListener('scroll', function () {
    //console.log('main section scrolled');
    mybutton = document.getElementById("BackToTop");
    if (document.querySelector('.main').scrollTop > 50 || document.querySelector('.main').scrollTop > 50) {
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.opacity = "0";
    }
})

/*For Back to top ends*/
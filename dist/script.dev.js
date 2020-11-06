"use strict";

var myBooks = document.body.querySelector('.myBooks');
var generateItem = "";
var start = '<div class="images">';
var end = '</div>';
var img = ' <img src="images/';
var endImg = '.jpg "alt="">';

for (var i = 1; i < 21; i++) {
  generateItem += start + img + i + endImg + end;
  myBooks.innerHTML = generateItem;
}
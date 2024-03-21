//ÔN LẠI JAVASCRIPT
//Biến: var, let, const
//Kiểu dữ liệu: number, string, boolean, null, undefined, object, array, function
//Toán tử: +, -, *, /, %, ++, --, +=, -=, *=, /=, ==, ===, !=, !==, >, <, >=, <=, &&, ||, !
//Câu lệnh: if, else, else if, switch, case, break, default, for, while, do while, continue, return
//Hàm: function, arrow function
//Mảng: [], push, pop, shift, unshift, splice, slice, concat, join, split, reverse, sort, filter, map, reduce, forEach
//Đối tượng: {}, key, value, method, this, new, class, constructor,...
//Event: click, change, keydown, keyup, keypress, mouseover, mouseout, mouseenter, mouseleave, scroll, resize, load, unload
//DOM: document, getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll, createElement, appendChild, removeChild, insertBefore, innerHTML, textContent, value, style, addEventListener, removeEventListener, preventDefault, stopPropagation, target, currentTarget, this, event, window, location, history, navigator, screen, localStorage, sessionStorage, cookie
//BOM: window, location, history, navigator, screen
//ES6: let, const, arrow function, class,...

var a = 1;
var b = 'abc';
var c = true;
var d = null;
var e = undefined;
var f = {
    name: 'John',
    age: 25,
    eat: function() {
        console.log('I am eating');
    }
};
var g = ['a','b','c'];
var h = function() {
    console.log('I am a function');
};

function init() {
    //DOM - Document Object Model
    //Hiển thị
    var sampleIdElement = document.getElementById('testId');
    console.log(sampleIdElement);
    sampleIdElement.textContent = '<span>Hello World<span>';
    sampleIdElement.innerHTML = '<span>Hello World<span>';
    sampleIdElement.style.color = 'red';

    //Giá trị
    var sampleInputElement = document.getElementById('testInput');
    sampleInputElement.value = 'Hello World';

    //Điều khiển phần tử: tạo mới, thêm, xóa, chèn phần tử,...
    var form = document.getElementById('register-form');
    console.log(form);
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = 'newInput';
    newInput.placeholder = 'This is new input';
    newInput.style = sampleInputElement.style;
    form.appendChild(newInput);
    form.insertBefore(newInput, form.children[1]);
    form.removeChild(form.children[2]);
    
    //Event
    var btnRegister = document.getElementById('btn-register');
    
    //Cách 1: Sử dụng thuộc tính onclick
    btnRegister.onclick = function() {
        newInput.focus();
    };

    //Cách 2: Sử dụng phương thức addEventListener
    //2.1: Sự kiện click
    btnRegister.addEventListener('click', function() {
        alert('You have successfully registered!');
    });

    //2.2: Sự kiện keydown
    newInput.addEventListener('keydown', function(event) {
        if (event.key == 'Enter' || event.code == 'Enter' || event.keyCode == 13) {
            console.log('Input value (newInput.value): ' + newInput.value);
            console.log('Input value (event.target.value): ' + event.target.value);
        }
    });
};

//Tạo hàm chọn ảnh trước đó/kế tiếp
var currentCardIndex = 0;
var cards = document.getElementsByClassName('card-benefit');
function nextCard() {
    currentCardIndex++;
    if (currentCardIndex > cards.length - 1) {
        currentCardIndex = 0;
    }
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = 'translateX(-' + currentCardIndex * 100 + '%)';
    }
}

function prevCard() {
    currentCardIndex--;
    if (currentCardIndex < 0) {
        currentCardIndex = cards.length - 1;
    }
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = 'translateX(-' + currentCardIndex * 100 + '%)';
    }
}

//JQUERY
//Những khái niệm có thể sử dụng: $, ready, click, change, keydown, keyup, keypress, mouseover, mouseout, mouseenter, mouseleave, scroll, resize, load, unload, fadeIn, fadeOut, fadeToggle, slideDown, slideUp, slideToggle, animate, bind, unbind, on, off, ajax, get, post, getJSON, getScript, each, map, filter, find, parent, parents, children, siblings, next, nextAll, prev, prevAll, first, last, eq, index, add, end, attr, prop, removeAttr, removeProp, val, text, html, css, width, height, innerWidth, innerHeight, outerWidth, outerHeight, offset, position, scrollLeft, scrollTop, on, off, trigger, triggerHandler, stop, preventDefault, stopPropagation, serialize, serializeArray, get, set, hasClass, addClass, removeClass, toggleClass, is, has, not, filter, eq, first, last, slice, map, each, get, index, add, end, append, prepend, after, before, remove, empty, clone, replaceWith, replaceAll, wrap, wrapAll, wrapInner, unwrap, parent, parents, children, siblings, next, nextAll, prev, prevAll, find, closest, filter, not, is, add, end, on, off, trigger, triggerHandler, bind, unbind, delegate, undelegate, live, die, load, unload, serialize, serializeArray, get, set, hasClass, addClass, removeClass, toggleClass, is, has, not, filter, eq, first, last, slice, map, each, get, index, add, end, append, prepend, after, before, remove, empty, clone, replaceWith, replaceAll, wrap, wrapAll, wrapInner, unwrap, parent, parents, children, siblings, next, nextAll, prev, prevAll, find, closest, filter, not, is, add, end, on, off, trigger, triggerHandler, bind, unbind, delegate, undelegate, live, die, load, unload, serialize, serializeArray, get, set, hasClass, addClass, removeClass, toggleClass, is, has, not, filter, eq, first, last, slice, map, each, get, index
//Hoặc tìm hiểu theo link sau: https://hocwebchuan.com/tutorial/jquery

//thực hiện sau khi toàn bộ phần document được load xong, CHƯA bao gồm hình ảnh, video, iframe
$(document).ready(function() {
    //Sử dụng cú pháp: $('#id') hoặc $('.class') hoặc $('element') để chọn phần tử
    //Sử dụng phương thức .change() để bắt sự kiện change input

    //Mục tiêu: Khi người dùng nhập vào input, kiểm tra giá trị nhập vào có phải là tên không
    $('#testInput').change(function(event) {
        let regexCheckName = /^[a-zA-Z\s]+$/;
        //hoặc dùng let regexCheckName = RegExp('^[a-zA-Z\s]+$');
        let value = event.target.value;

        if (regexCheckName.test(value)) {
            //Nếu giá trị nhập vào là tên, thì đổi màu viền input thành màu xanh, nền vàng, bo tròn 10px
            $('#testInput').css('border', '5px solid green')
            .css('border-radius', '10px')
            .css('background-color', 'yellow');
        } else {
            //Nếu giá trị nhập vào không phải là tên, thì đổi màu viền input thành màu đen
            $('#testInput').css('border', '5px solid black');
        }
    });

    //Mục tiêu: Khi người dùng nhấn nút đăng ký, ẩn nút đăng ký từ từ trong 1s
    $('#btn-register').bind('click', function() {
        $('#btn-register').fadeOut(1000);
        //sau 2s, hiển thị lại nút đăng ký từ từ trong 1s
        setTimeout(function() {
            $('#btn-register').fadeIn(1000);
        }, 2000);
    });

    //Mục tiêu: tạo hiệu ứng chữ cầu vồng khi nhập liên tục vào textarea message
    let colorList = ['red', 'green', 'blue', 'yellow', 'black', 'purple', 'orange', 'pink'];
    $('#message').keydown(function() {
        let textLength = $('#message').val().length;
        $('#message').css('color', colorList[textLength % colorList.length]);
    });
});
//hoặc cách viết ngắn gọn hơn
$(function() {
    //code
});

//thực hiện sau khi toàn bộ phần document được load xong, bao gồm cả hình ảnh, video, iframe
$(window).on('load', function() {
    //code
});
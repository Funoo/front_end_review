var today = new Date()
var hourNow = today.getHours()
var greeting

if (hourNow > 18) {
    greeting = 'Good Evening!'
} else if (hourNow > 12) {
    greeting = 'Good Afternoon!'
} else if (hourNow > 0) {
    greeting = 'Good Morning!'
} else {
    greeting = 'Welcome~'
}


/**
 * 
 * chart
 */

var sign = "Funooo"
var tiles = sign.length
var grandTotal = tiles * 17

var elSign = document.getElementById('userSign')
elSign.textContent = sign

var elTiles = document.getElementById('tiles')
elTiles.textContent = tiles

var elGrandTotal = document.getElementById('grandTotal')
elGrandTotal.textContent = grandTotal


var testStr = 'hello everybody!'
var tempStr = 'indexof e :' + testStr.indexOf('e')
tempStr += '  lastindexof e ' + testStr.lastIndexOf('e')
tempStr += '  substring 3-7 ' + testStr.substring(3, 7)
tempStr += '  replace e ' + testStr.replace('e', 'f')
var elStringTest = document.getElementById('helloEve')
elStringTest.textContent = tempStr

document.write('<h3>' + greeting + '</h3>')

var date = today.toDateString()
var elyear = document.getElementById('footer')
elyear.innerHTML = '<p>Coptright ' + date + '<p>'

function windowPrint() {
    window.print()
};

function windowScreen() {
    var elscreenWidth = document.getElementById('windowWidth')
    elscreenWidth.textContent = window.screen.width
    console.log('onclick')
};

var elMousePosition = document.getElementById('mousePosi')

function mosePosition(event) {
    var mx = event.screenX
    var my = event.screenY
    elMousePosition.textContent = 'X position is : ' + mx + ' Y position is ' + my
};

var el = document.getElementById('body')
el.addEventListener('mousemove', mosePosition, false)

var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback')

function checkUserName(minLength) {
    if (elUsername.value.length < minLength) {
        elMsg.textContent = 'Username must  be ' + minLength + ' characters or more'
    } else {
        elMsg.innerHTML = ''
    }
}

elUsername.addEventListener('blur', function () {
    checkUserName(5)
}, false)

var tip = '<div class = \"header\"><a id = \"close\" href = "#"> close X </a> </div>'
tip += '<div><h2>System Maintenance</h2>'
tip += 'Our serve are being update beteeen 3-4 oclock'
tip += 'During this time , may cant offer ur our service.</div>'

var elNote = document.createElement('div')
elNote.setAttribute('id', 'note')
elNote.innerHTML = tip
document.body.appendChild(elNote)

function dismissNote() {
    document.body.removeChild(elNote)
}

var elClose = document.getElementById('close')
elClose.addEventListener('click', dismissNote, false)

var textInput = document.getElementById('message')

function charCount(e) {
    var textEntered, charDisplay, counter, lastKey
    textEntered = document.getElementById('message').value
    charDisplay = document.getElementById('charLeft')
    lastKey = document.getElementById('lastKey')

    counter = (180 - (textEntered.length))
    charDisplay.textContent = counter + '/180'
    lastKey.textContent = 'Last key in ASCII code : ' + e.keyCode
}

textInput.addEventListener('keypress', charCount, false)

var elTerms = document.getElementById('terms')
var elTermsHint = document.getElementById('termsHint')
var elform = document.getElementById('formSignup')

function checkTerms(event) {
    if (!elTerms.checked) {
        elTermsHint.innerHTML = 'You must agree to the terms.'
        event.preventDefault()
    }
}

elform.addEventListener('submit', checkTerms, false)

function setup() {
    textInput.focus()
}

window.addEventListener('DOMContentLoaded', setup, false)

window.addEventListener('beforeunload', function (event) {
    return 'You have changed that have not been saved...'
}, false)

$(function () {
    $('tr').before('<label>This is A Chart</label>')
    $('button').css({
        'background-color': '#674563'
    })
    // var $h2 = $('h2')
    // $('ul').hide()
    // $h2.append('<a>show</a>')
    // $h2.on('click', function () {
    //     $h2.next()
    //         .fadeIn(500)
    //         .addClass('complete')
    //     $h2.find('a').fadeOut();
    // })
    var $li = $('li')
    $li.hide().each(function (index) {
        $(this).delay(700 * index).fadeIn(700);
    })
    $li.on('click', function () {
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 500, function () {
            $(this).remove();
        })
    })
    var $newItemButton = $('#newItemBut')
    var $newItemForm = $('#newItemForm')
    var $textInput = $('input:text')

    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click', function () {
        $newItemButton.hide()
        $newItemForm.show()
    })

    $newItemForm.on('submit', function (e) {
        e.preventDefault()
        var newText = $('input:text').val()
        $('li:last').after('<li>' + newText + '</li>');
        $newItemForm.hide()
        $newItemButton.show()
        $textInput.val('')
    })

    var $window = $(window)
    var $slideAd = $('#slidAd')
    var endZone = $('#footer').offset().top - $window.height() - 500

    $window.on('scroll', function () {
        if ((endZone) < $window.scrollTop()) {
            $slideAd.animate({ 'right': '0px' }, 250)
        } else {
            $slideAd.stop(true).animate({ 'right': '-360px' }, 250)
        }
    })
})

    // var buttons = document.getElementsByClassName('actm-FightCovidSendVip-container')
    // setInterval(function () {
    //     buttons.click()
    // }, 1000)


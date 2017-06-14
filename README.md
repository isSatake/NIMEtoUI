# NIMEtoUI

This application/bookmarklet formats the NIME papers bibtex to UIPedia.

## Usage

1. Open [NIME Archives](http://www.nime.org/archives/)

2. Expand the papers bibtex you will scrap to UIPedia, and run the following bookmarklet.

<img src="https://i.gyazo.com/58bee7bb1148624f3642b38bb4d701ac.gif" width="500px">

## Bookmarklet
`javascript:(function(){window.open('https://stkay.github.io/NIMEtoUI/index.html?'+jQuery.find('div[style="display: block;"]')[0].childNodes[1].childNodes[0].innerText)})();`

## NIME
New Interfaces for Musical Expression, also known as NIME, is an international conference dedicated to scientific research on the development of new technologies and their role in musical expression and artistic performance. (Wikipedia)

## UIPedia
[UIPedia](https://scrapbox.io/UIPedia/) is a wiki that collects User Interface  information.

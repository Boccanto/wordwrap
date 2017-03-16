**********--WordWrapKata in JavaScript --********

The Challenge:
http://codingdojo.org/kata/WordWrap/

Recommended text: 
http://www.lipsum.com/feed/html

Script:
js/script.js
HTML:
index.html

Two prompt for input: one string, one int.
String is the text for the wrap.
Int for the max_width.

First things firts i did the column wrap, so the text fitted perfectly to the column number.
Next one was the more difficult part, to trying to wrap the text widthout split the words in it.
(Still not going perfectly.)

For this I tried to make some regex function, but it didnt work for me: 
var regex = '.{1,' +width+ '}(\s|$)' + (break ? '|.{' +width+ '}|.+$' : '|\S+?(\s|$)');

Like this above,
where width = some int,
break = '<br/>'.
I made a separated documentation.
You can find this under the name: regexp_documentation.docx
So I tried to improve my RegExp skills, but it doesnt work perfectly either.

After it I tried to make it better with the 'if' conditional statement. 
It works for me a bit better. 
Still not perfect.


GL & HF!

B

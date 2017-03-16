
var s = prompt('Give me seome long Lorem Ipsum text: ');
//var w = parseInt(prompt('Give me a max width to it: '));
var $count = 0;
var vmi = s.length;
var wrapped = "";

while (s.length < 1)
{
	s = prompt('Give me seome long Lorem Ipsum text: ');
	
}
do{
	var w = parseInt(prompt('Give me a max width to it: '))
}
while(isNaN(w))



function wordWrap() {
  vmi = s.length;
  for(var i = 0 ; i < vmi; i++){
     wrapped += s.charAt(i);
     $count += 1;
    if($count == w) {
      $count = 0;
      wrapped += "<br>";      
    }
	if ( s.charAt(i) === "\S+?(\s|$)" ) {
		wrapped += "<br>"
		$count = 0;
	}
  }
 document.write(wrapped);
}

wordWrap()+ "<br>";

console.log(s);
console.log(w);
console.log(vmi);
console.log(wrapped);



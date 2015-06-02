console.log('script loaded');
var button = document.getElementById('button');
var input = document.getElementById('input');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var request = new XMLHttpRequest();

button.addEventListener('click', function(){
  console.log('send a get request with the query string');
  request.open('GET', '/query?name=' + input.value + "&name1=" + input1.value + "&name2=" + input2.value);
  request.send(null);
});

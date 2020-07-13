var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
  var tag = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  tag.className = "close";
  tag.appendChild(txt);
  myList[i].appendChild(tag);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
//ev is the actual click event itself which would tell you if the user clicked with the right mouse button or left mouse button
var toDo = document.querySelector('ul');
toDo.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("am i a joke to you!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var tag = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  tag.className = "close";
  tag.appendChild(txt);
  li.appendChild(tag);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// document.body.innerHTML = document.body.innerHTML.replace(new RegExp("skateboard", "g"), "James-PANDA");
// document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Inbox", "g"), "Chief Sci");
// document.body.innerHTML = document.body.innerHTML.replace(new RegExp("John Wick", "g"), "Hongyi");
// document.body.innerHTML = document.body.innerHTML.replace(new RegExp("What's on your mind", "g"), "Exceeded Facebook usage limit");


// var imageReveal = "http://slm.smalldata.io/static/images/404.jpg";
// document.body.innerHTML = "<img src=\"" + imageReveal + "\">";

// var original = document.body.innerHTML;

// setTimeout(show_msg, 3000);
// setTimeout(show_original, 1000);

//
// (function() {
//   var img = "<img src='https://slm.smalldata.io/static/images/404.jpg' alt='Loading'/>";
//
//   var el2 = document.createElement("span");
//   console.log('element: ', el2.style);
//   el2.style.display = "block";
//   el2.style.width = "100%";
//   el2.style.height = "1800px";
//   el2.style.textAlign = "center";
//   el2.innerHTML = img;
//   document.body.insertBefore(el2, document.body.firstChild);
//   setTimeout(function() {
//     el2.style.display = "none";
//     console.log('done loading element');
//   }, 100);
//
// })();
// document.body.style.backgroundColor = "#AA0000";

var elemDiv = document.createElement('div');
document.body.appendChild(elemDiv);

setTimeout(function() {
  elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;top:0;z-index:999;background:rgba(255, 255, 255, .1);';
  document.body.appendChild(elemDiv);
}, 1000);

setTimeout(function() {
  elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;top:0;z-index:999;background:rgba(255, 255, 255, .3);';
  document.body.appendChild(elemDiv);
}, 3000);

setTimeout(function() {
  elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;top:0;z-index:999;background:rgba(255, 255, 255, .5);';
  document.body.appendChild(elemDiv);
}, 5000);

setTimeout(function() {
  elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;top:0;z-index:999;background:rgba(255, 255, 255, .7);';
  document.body.appendChild(elemDiv);
}, 7000);

setTimeout(function() {
  elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;top:0;z-index:999;background:rgba(255, 255, 255, .9);';
  document.body.appendChild(elemDiv);
}, 9000);

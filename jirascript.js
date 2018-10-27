function addCSS(id, css) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
 
    s.setAttribute('type', 'text/css');
    s.setAttribute('id', id);
    if (s.styleSheet) {   // IE
        s.styleSheet.cssText = css;
    } else {                // the world
        s.appendChild(document.createTextNode(css));
    }
 
    head.appendChild(s);
}


function removeElement(id){
    var trash = document.getElementById(id);
    trash.parentNode.removeChild(trash);
}
 
function hide(event){
	//window.location changes between jira instances
	window.open("browse/"+event.target.textContent,'_blank');
}

function init(){
    $(document).on('click', '.ghx-group > .ghx-key', hide);	
	
}

var checkExist = setInterval(function() {
   if (document.getElementById('ghx-column-headers')) {
      clearInterval(checkExist);
	  init();
   }
   console.log("checking...");
}, 100); 

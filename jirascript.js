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
 

function calculateWips(){
	
	

	/*for (var i = 0; i < columnNames.length; i++) {
        var columnName = columnNames[i][text];		
		dropdownMenu += '<aui-item-checkbox id="toggle" col='+i+' interactive checked>'+columnName+'</aui-item-checkbox>';
	}*/
}

var checkExist = setInterval(function() {
   if (document.getElementById('ghx-column-headers')) {
      clearInterval(checkExist);
	  calculateWips();
	  $(document).on('click', '.js-quickfilter-button', calculateWips);
	  
   }
   console.log("checking...");
}, 100); 

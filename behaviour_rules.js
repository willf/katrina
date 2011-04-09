Behaviour.register({

    '.imageViewer' : function(el) { 
      prepareViewer(el, 'tiles', 256);
    },

      '#zoom_up' : 
    
    function(el) { 
      el.onclick = 
	function() {  
	var map  = document.getElementById("map"); 
	if (map) {
          zoomImageUp(map, undefined);
	}
	return false;
      }
    },
      
      '#zoom_down' : 
    function(el) {
      el.onclick = 
	function() { 
	var map = document.getElementById("map");
	if (map) {
	  zoomImageDown(map, undefined);
	}
	return false;
      }
    }



  });


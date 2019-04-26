"use strict";
(function ($) {
    console.log('ready');
    var age={
    	
    	'javascriptFullOpps':{
    		init:function(){

    			$(document).on('click','#b1',function(){
    				alert('Understood');
    				$('#timepicker').val('Jquery successfully Runnning');
    			});
    		
    		},

		    finalize: function() {
                  console.log('finalize');// JavaScript to be fired on all pages, after page specific JS is fired
                  console.clear();//to clear the console on the browser
                },
    	},

    	'about':{

    		init:function(){
    			console.log('about init');
    			$(document).on('click','#b1',function(){
    				alert('Understood');
    				$('#timepicker').val('Jquery successfully Runnning');
    			});

    		},

    		finalize:function(){
    			console.log('about finalize');
    		},

    	},
    };



  var UTIL = {
    
    fire: function(func, funcname, args) {
      var fire;
      var namespace = age;

      funcname = (funcname === undefined) ? 'init' : funcname;

      fire = func !== '';

      fire = fire && namespace[func];

      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
     				   namespace[func][funcname](args);
                }
    },
    loadEvents: function() {

      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {

        UTIL.fire(classnm);

        UTIL.fire(classnm, 'finalize');

      });
    
    }

  };

  // Load Events
  $(document).ready(UTIL.loadEvents);
})(jQuery);
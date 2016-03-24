/*all users*/
  var all = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","monstercat"];   

/*API bases*/
var streamAPI = "https://api.twitch.tv/kraken/streams/";

/*this one to be used later to get details of stream as well as avatar*/
var channelAPI = "https://api.twitch.tv/kraken/channels";

/*function to fill the grid on the page - GOOD*/
function populateGrid(users) {
	var html = '';
	/*for loop that takes each value in the list provided and puts it on the page in the form of an unordered list*/
	for (i=0; i<users.length; i++) {
		$(".user-list").html(html += "<ul>"+users[i] + "</ul>")	
	};
};

/* populateGrid(all); <-- simple test: this works fine.*/

/*takes a user, returns boolean value of online/offline status*/

function isOnline(user) {
	  $.getJSON(streamAPI + user + "?callback=?", function(data){	
	    
      var available = data.stream;        	    
		  /*redundancy?*/
		  if (available) {
        console.log(user + " is online");
        return true;
      } else {
        console.log(user + " is offline");
        return false;
      };
	  });
  
};  

var online = [];
var offline = [];

all.forEach(function(i){
  if (isOnline(i) == true) {
    online.push(i);
  }else{
    offline.push(i);
  };
  });

console.log("online: " + online);
console.log("offline: " + offline);



/*main purpose of this function is to display the correct list of users*/
function display(users) {
	
	console.log("CALLING DISPLAY FUNCTION");
    
	/*forloop iterating through users and sorting into online/offline lists*/
  var online = [];
  var offline = [];	
  
  users.forEach(function(user) { 
    var count = isOnline(user);
    online.push(count);
    });

  console.log("online: " + online);
  
  
  var x = $('input', this).attr("checked");
  /*should work up to this point, i*/
	if ($('input[id=all]:checked').length>0) {		
		/*popupate grid with allUsers*/
		populateGrid(['a','b','c']);
	} else if ($("#on").is(":checked")) {
		/*popupate grid with onlineUsers*/
		populateGrid(['d','e','f']);
		
	} else if ($("#off").is(":checked")) {
		/*popupate grid with offlineUsers*/
		populateGrid(['g','h','i']);
		
	};
		
};

/*call display function as main function */
/*display all*/

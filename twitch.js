/* USERS */
var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","monstercat"];

var streamAPI = "https://api.twitch.tv/kraken/streams/";
var channelAPI = "https://api.twitch.tv/kraken/channels";

/*populate grid function
default on all
sub-fn - remove offline & remove online;
*/
function populateGrid(users) {
	var html = '';
	for (i=0; i<users.length; i++) {
		$(".user-list").html(html += "<ul>"+users[i] + "</ul>")
		
	};
};

populateGrid(users)

/*IS ONLINE function - 
return true/false
if true & 


user json url - wrap this is a function(u,api)*/
function isOnline(user) {
$.getJSON(streamAPI + user, function(data){
	
  var available = data.stream;            
  /*redundancy?*/
  if (available) {
	return true;
  } else {
    return false;
  };
          
  });
};




  
  
/*display function(use id ATTR); if 'display all/online/offline selelcted - populate grid with isonline=true/isonline=false or all*/

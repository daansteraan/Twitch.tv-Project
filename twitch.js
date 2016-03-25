/*all users*/
var all = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "monstercat"];

/*API bases*/
var streamAPI = "https://api.twitch.tv/kraken/streams/";

/*this one to be used later to get details of stream as well as avatar*/
var channelAPI = "https://api.twitch.tv/kraken/channels";

/*takes a user, returns boolean value of online/offline status*/
var online = [];
var offline = [];

all.forEach(function(i) {
  $.getJSON(streamAPI + i + "?callback=?", function(data) {
    var status = data.stream;
    if (status) {
      online.push(i);
    } else {
      offline.push(i);

    };
    /*at this point the on/offline lists are populated (why?)
      - create function to toggle between selections and populate accordinly   
    */
    /*defalut pop*/
    /*function to fill the grid on the page - GOOD*/
    function populateGrid(users) {
      var html = '';
      /*for loop that takes each value in the list provided and puts it on the page in the form of an unordered list*/
      for (i = 0; i < users.length; i++) {
        if (online.indexOf(users[i]>=0)){
        $(".user-list").html(html += "<ul>" + users[i] + "</ul>")
        } else {
          $(".user-list").html(html += "<ul>" + users[i] + "</ul>")
        }
      };
    };

    populateGrid(online)
      /*repouplate based on selection*/
    $('input:radio[name="state"]').change(
      function() {
        if ($(this).val() == 'all') {
          populateGrid(all);
        } else if ($(this).val() == 'on') {
          populateGrid(online);
        } else {
          populateGrid(offline);
        }
      });

  });

});
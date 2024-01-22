$(".you").click(function() {
    var yourName=$(".received").val();
   	// console.log(yourName);
    $(".your-name").append("<p>" + "new message" + yourName + "</p>");

});

$(".friend").click(function() {
    var friendsName=$(".received").val();
    // console.log(friendsName);
    $(".friends-name").append( "<p>" + "new message" + friendsName + "</p>");
});













//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}
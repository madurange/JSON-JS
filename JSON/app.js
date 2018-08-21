
var getDataBtn=document.getElementById("getDataBtn");
var clearBtn=document.getElementById("clearBtn");
getDataBtn.addEventListener("click",getData);
clearBtn.addEventListener("click",function(){
	console.clear();
});

function getData () {
	var myRequest=new XMLHttpRequest();
	myRequest.open('GET','https://jsonplaceholder.typicode.com/users');
	myRequest.onload=function(){
		var users=JSON.parse(myRequest.responseText);
		for(var i=0;i<users.length;i++){
		 console.log("Name: "+users[i].name+"\tUsername: "+users[i].username);
		}
	};
	myRequest.send();	
}

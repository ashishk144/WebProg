var ind = -1;
var all = new Array();
var names = new Array();
function checkname() {
    var data = document.getElementById("usr").value;
    if (data !== null && data !== "") {

    } else {
        document.getElementById("noname").innerHTML = '<p class="alert alert-warning"> Enter text! </p>'
    }
}
function checkpwd() {
    var data = document.getElementById("pwd").value;
    if (data !== null && data !== "") {

    } else {
        document.getElementById("nopwd").innerHTML = '<p class="alert alert-warning"> Enter text! </p>'
    }
}

function validate() {
    var usr = document.getElementById("usr").value;
    var pwd = document.getElementById("pwd").value;
    var comnt = document.getElementById("comment").value;
    if(pwd === "Ashish" && usr !== "" && usr !== null && comnt !== null && comnt !== "") {
        document.getElementById("validate").innerHTML = '<p class= "alert alert-success"> Success! </p>';
        ind++;
        all[ind] = comnt;
        names[ind] = usr;
        setTimeout(loader, 1000);
        } else {
        document.getElementById("validate").innerHTML = '<p class="alert alert-danger"> Invalid submission! </p>';
        setTimeout(loader, 1000);
    }
}

function loader() {
    document.getElementById("validate").innerHTML = '';
    document.getElementById("noname").innerHTML = '';
    document.getElementById("usr").value = '';
    document.getElementById("pwd").value = '';
    document.getElementById("comment").value = '';
    var comments = "<br>";
    if (ind >= 0) {
        for(var i = all.length - 1; i >= 0; i--) {
            comments += '<div class = "container" style = "border:cadetblue solid 3px">' + '<h5>' + all[i] + '</h5>' + '<p>' + names[i] + '</p>' + '</div>' + '<br>';
        }
        document.getElementById("allcomments").innerHTML = comments;
    }
}
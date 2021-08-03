var hosturl = 'http://dev.cs.smu.ca:8140';

function addUniversity(){
    var name = $("#name").val();
     var address = $("#address").val();
     var phone = $("#phone").val();
    if(!(name && address && phone)) {alert ("Please fill all the fields"); return;}
    var newUni = {
        "Name": name,
        "Address": address,
        "Phone": phone
    };
    console.log(newUni);
    $.post(hosturl + "/addUni", newUni, function (data) {
        alert(data);
    });
    return false;
}


function toAdd(address){
    window.location.href=address;
}
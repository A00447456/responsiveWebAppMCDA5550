var hosturl = 'http://dev.cs.smu.ca:8140';



function deleteUniversity(bid){
    var uid = 'u'+bid;
    var uni = $("#"+uid).html();
    var universityInfo = {
        "Name": uni
    };
    console.log(uni);
    $.post(hosturl + "/deleteUniversity", universityInfo, function (data) {
        if(data['n']==0){
        alert("University Record not found. Please make sure you entered the university name correctly.");
        }
        else{
        alert("University Record deleted");
        getAllUniversities();
        }
    });
    return;
}




function getUniversity(){
    var name = $("#search-uni").val();
    if (name == '') {
        alert("Please enter University Name to Search");
        $("#filter_input").focus();
        return;
    }
    var universityInfo = {
        "Name": name 
    };
    $.post(hosturl + "/filterUniversities", universityInfo, function (data) {
        $("#universities tr").remove();
        var table = document.getElementById("universities");
        var universities = (data);
        if(universities.length==0){
            alert("No matching records found");
            return;
        }
        
        for (var i = 0; i < universities.length; i++) {
            var btn = document.createElement("button");
            btn.id="id"+i;
            btn.className="btn btn-danger";
            btn.type="button";
            btn.innerHTML="Delete";
            btn.setAttribute("onclick", "deleteUniversity(this.id)");
            var r = table.insertRow(-1);
            var c0=r.insertCell(0);
            var c1=r.insertCell(1);
            var c2=r.insertCell(2);
            var c3=r.insertCell(3);
            c0.id="uid"+i;
            c0.innerHTML = universities[i].Name;
            c1.innerHTML = universities[i].Address;
            c2.innerHTML = universities[i].Phone;
            c3.appendChild(btn);
        }
    });
}


function getAllUniversities(){
    $.post(hosturl + "/getAllUniversities", function (data) {
        $("#universities tr").remove();
        var table = document.getElementById("universities");
        var universities = (data);
        if(universities.length==0){
            alert("There are no Universities in the database so far!");
            return;
        }
        
        for (var i = 0; i < universities.length; i++) {
            var btn = document.createElement("button");
            btn.id="id"+i;
            btn.className="btn btn-danger";
            btn.type="button";
            btn.innerHTML="Delete";
            btn.setAttribute("onclick", "deleteUniversity(this.id)");
            var r = table.insertRow(-1);
            var c0=r.insertCell(0);
            var c1=r.insertCell(1);
            var c2=r.insertCell(2);
            var c3=r.insertCell(3);
            c0.id="uid"+i;
            c0.innerHTML = universities[i].Name;
            c1.innerHTML = universities[i].Address;
            c2.innerHTML = universities[i].Phone;
            c3.appendChild(btn);
        }
    });  
}

getAllUniversities();
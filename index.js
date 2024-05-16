let emparry = [];
function Process_And_Add() {

    let name_value = document.getElementById("enter_name_input").value;
    let profession_value = document.getElementById("enter_profession_input").value;
    let age_value = document.getElementById("enter_age_input").value;
    if(name_value=="" || profession_value == "" || age_value =="")
        {
            document.getElementById("status1").style.display="inline";
            document.getElementById("status2").style.display="none";
        }else{
            document.getElementById("status2").style.display="inline";
            document.getElementById("status1").style.display="none";
            document.getElementById("addedinfo_count").style.display="none";
            document.getElementById("enter_name_input").value ="";
            document.getElementById("enter_profession_input").value="";
            document.getElementById("enter_age_input").value="";
            console.log(name_value+" "+profession_value+" "+age_value);
            let obj = {
                Name:name_value,
                Profession:profession_value,
                Age: age_value
            }
            emparry.push(obj);

            document.getElementById("addedemployeeinfo").innerHTML = "";

            emparry.forEach((item,index) => {
                document.getElementById("addedemployeeinfo").innerHTML += `<div id="addedemployeewithspace">
                <div id="employeebox">
                    <p id="index_in_Array" class="white_color addedemployeeinfospacing">${index + 1}.</p>
                    <p class="white_color addedemployeeinfospacing">Name: ${item.Name}</p>
                    <p class="white_color addedemployeeinfospacing">Profession: ${item.Profession}</p>
                    <p class="white_color addedemployeeinfospacing">Age: ${item.Age}</p>
                </div>
                <button id="deletebtn" onclick="Delete_user(${index})">Delete User</button>
            </div>`
            });

        }
        console.log(emparry);
    return false;
}

function Delete_user(index) {
    emparry.splice(index,1);
    console.log(index);
    console.log(emparry);

    document.getElementById("addedemployeeinfo").innerHTML = "";

            emparry.forEach((item,index) => {
                document.getElementById("addedemployeeinfo").innerHTML += `<div id="addedemployeewithspace">
                <div id="employeebox">
                    <p id="index_in_Array" class="white_color addedemployeeinfospacing">${index + 1}.</p>
                    <p class="white_color addedemployeeinfospacing">Name: ${item.Name}</p>
                    <p class="white_color addedemployeeinfospacing">Profession: ${item.Profession}</p>
                    <p class="white_color addedemployeeinfospacing">Age: ${item.Age}</p>
                </div>
                <button id="deletebtn" onclick="Delete_user(${index})">Delete User</button>
            </div>`
            });

    if(emparry.length == 0)
        {
            document.getElementById("addedinfo_count").style.display="inline";
        }
    

    return false;
}

document.getElementById("add_user").addEventListener("click",Process_And_Add);

// document.getElementById("deletebtn").addEventListener("click",Delete_user);




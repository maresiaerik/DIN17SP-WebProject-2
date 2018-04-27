function GetUsers()
{
    var url = "http://localhost/DIN17SP-WebProject-2/egg_rest_api/index.php/api/user/users";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url,true);

    xhttp.onreadystatechange=function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById('results').innerHTML=this.responseText;
        }
    };

    xhttp.send();
}

function GetPositions()
{
    var url = "http://localhost/DIN17SP-WebProject-2/egg_rest_api/index.php/api/user/users";
    var xhttp = new XMLHttpRequest();

    xhttp.open('GET', url, true);

    var jsonData = '';
    var data = "";

    xhttp.onreadystatechange=function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            jsonData = JSON.parse(xhttp.responseText);

            for(x in jsonData)
            {
                var id = jsonData[x].id;
                var vector_x = jsonData[x].vector_x;
                var vector_y = jsonData[x].vector_y;

                data += id + "," + vector_x + "," + vector_y + "<br>";
            }

            document.getElementById('results').innerHTML = data;
        }
    };

    xhttp.send();
}

function AddUser()
{
    var url = "http://localhost/DIN17SP-WebProject-2/egg_rest_api/index.php/api/user/users";
    var xhttp = new XMLHttpRequest();

    xhttp.open('POST', url, true);

    var form=document.getElementById('UserForm');
    var formData=new FormData(form);

    xhttp.onreadystatechange=function()
    {
        if(xhttp.readyState==4 && xhttp.status==201)
        {
            document.getElementById('results').innerHTML="User added succesfully";
        } else {
            document.getElementById('results').innerHTML="Something went wrong";
        }
    };

    xhttp.send(formData);
}

function UpdateUser()
{
    var url = "http://localhost/DIN17SP-WebProject-2/egg_rest_api/index.php/api/user/users";
    var xhttp = new XMLHttpRequest();

    xhttp.open('PUT', url, true);

    var data = {};

    data.id = document.getElementById('update_id').value;
    data.vector_x = document.getElementById('update_x').value;
    data.vector_y = document.getElementById('update_y').value;

    var jsonData = JSON.stringify(data);

    xhttp.onreadystatechange=function()
    {
        if(xhttp.readyState==4 && xhttp.status==201)
        {
            document.getElementById('results').innerHTML="User updated succesfully";
        } else {
            document.getElementById('results').innerHTML="Something went wrong";
        }
    };

    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(jsonData);
}

function DeleteUser()
{
    var url = "http://localhost/DIN17SP-WebProject-2/egg_rest_api/index.php/api/user/users";
    var xhttp = new XMLHttpRequest();

    var id=parseInt(document.getElementById('delete_id').value);

    xhttp.open('DELETE', url + id, true);

    xhttp.onreadystatechange=function()
    {
        if(xhttp.readyState==4 && xhttp.status==200)
        {
            document.getElementById('results').innerHTML="User deleted succesfully";
        } else {
            document.getElementById('results').innerHTML="Something went wrong";
        }
    };

    xhttp.send();
}

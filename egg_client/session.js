let start_time;

function GetSessions()
{
    var url = "http://localhost/DIN17SP-WebProject-2/egg_rest_api/index.php/api/session/sessions";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url,true);

    xhttp.onreadystatechange=function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById('results').innerHTML=this.responseText;

            jsonData = JSON.parse(xhttp.responseText);

            for(x in jsonData)
            {
                if(jsonData[x].id == 1)
                {
                    start_time = jsonData[x].start_time;
                    console.log(start_time);
                }
            }

            console.log(this.responseText);
        }
    };



    xhttp.send();
}

function AddSession()
{
    var url = "http://localhost/DIN17SP-WebProject-2/egg_rest_api/index.php/api/session/sessions";
    var xhttp = new XMLHttpRequest();

    xhttp.open('POST', url, true);

    var form=document.getElementById('SessionForm');
    var formData=new FormData(form);

    xhttp.onreadystatechange=function()
    {
        if(xhttp.readyState==4 && xhttp.status==201)
        {
            document.getElementById('results').innerHTML="Session added succesfully";
        } else {
            document.getElementById('results').innerHTML="Something went wrong";
        }
    };

    xhttp.send(formData);
}

function UpdateSession()
{
    var url = "http://localhost/DIN17SP-WebProject-2/egg_rest_api/index.php/api/session/sessions";
    var xhttp = new XMLHttpRequest();

    xhttp.open('PUT', url, true);

    var data = {};

    data.id = document.getElementById('update_id').value;
    data.user_id = document.getElementById('update_user_id').value;
    data.start_time = start_time;

    console.log(new Date().toISOString().slice(0, 19).replace('T', ' '));
    data.end_time = new Date().toISOString().slice(0, 19).replace('T', ' ');
    data.steps = document.getElementById('update_steps').value;

    var jsonData = JSON.stringify(data);

    xhttp.onreadystatechange=function()
    {
        if(xhttp.readyState==4 && xhttp.status==201)
        {
            document.getElementById('results').innerHTML="Session updated succesfully";
        } else {
            document.getElementById('results').innerHTML="Something went wrong";
        }
    };

    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(jsonData);
}
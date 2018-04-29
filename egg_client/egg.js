function GetEggs()
{
    var url = "http://localhost/DIN17SP-WebProject-2/egg_rest_api/index.php/api/egg/eggs";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);

    xhttp.onreadystatechange=function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById('results').innerHTML=this.responseText;
        }
    };

    xhttp.send();
}

function UpdateEgg()
{
    var url = "http://localhost/DIN17SP-WebProject-2/egg_rest_api/index.php/api/egg/eggs";
    var xhttp = new XMLHttpRequest();

    xhttp.open('PUT', url, true);

    var data = {};

    data.id = document.getElementById('update_id').value;
    data.type = document.getElementById('update_type').value;
    data.vector_x = document.getElementById('update_x').value;
    data.vector_y = document.getElementById('update_y').value;
    data.collect_time = document.getElementById('update_time').value;

    var jsonData = JSON.stringify(data);

    xhttp.onreadystatechange=function()
    {
        if(xhttp.readyState==4 && xhttp.status==201)
        {
            document.getElementById('results').innerHTML="Egg updated succesfully";
        } else {
            document.getElementById('results').innerHTML="Something went wrong";
        }
    };

    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(jsonData);
}
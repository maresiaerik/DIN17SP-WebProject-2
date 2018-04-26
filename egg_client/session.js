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
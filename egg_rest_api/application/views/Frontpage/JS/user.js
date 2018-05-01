function AddUser()
{
    var url = "http://localhost/DIN17SP-WebProject-2/egg_rest_api/index.php/api/user/users";
    var xhttp = new XMLHttpRequest();

    xhttp.open('POST', url, true);

    var form=document.getElementById('UserForm');
    var formData=new FormData(form);

/*
    xhttp.onreadystatechange=function()
    {
        if(xhttp.readyState==4 && xhttp.status==201)
        {
            document.getElementById('results').innerHTML="User added succesfully";
        } else {
            document.getElementById('results').innerHTML="Username is not available";
        }
    };
*/

    xhttp.send(formData);
}
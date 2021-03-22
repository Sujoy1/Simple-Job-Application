if(document.url =="file:///C:/Users/POM/Desktop/Lab%20Project%20IT/first.html")
{
    document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
}

var values=[];

function Send_first()
{
    var w = document.getElementById("phone").value;
    var x = document.getElementById("name").value;
    var y = document.getElementById("email_id").value;
    var z = document.getElementById("Enter Country").value;
    values.push("John Smith");
    values.push(w);
    values.push(x);
    values.push(y);
    values.push(z);
    console.log(values);
}


function Send_Second()
{

    if(document.getcookie("username")!=NULL&&document.getcookie("username")==values[0]&&document.url=="file:///C:/Users/POM/Desktop/Lab%20Project%20IT/second.html")
    {
    var w = document.getElementById("Joined").value;
    var x = document.getElementById("Graduated").value;
    var y = document.getElementById("School").value;
    var z = document.getElementById("Attained").value;
    values.push(document.cookie("username"));
    values.push(w);
    values.push(x);
    values.push(y);
    values.push(z);
    }
    console.log(values);
}



function Send_third()
{
    if(document.getcookie("username")!=NULL&&document.getcookie("username")==values[0]&&document.url=="file:///C:/Users/POM/Desktop/Lab%20Project%20IT/third.html")
    {
    var w = document.getElementById("Joined").value;
    var x = document.getElementById("Years of Service").value;
    var y = document.getElementById("Company").value;
    var z = document.getElementById("Position").value;
    values.push(document.cookie("username"));
    values.push(w);
    values.push(x);
    values.push(y);
    values.push(z);
    }
    console.log(values);
}
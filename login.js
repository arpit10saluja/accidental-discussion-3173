let data= JSON.parse(localStorage.getItem("data")) || [];

function checkdata(){
    


    let num = document.getElementById("number").value;
    let baseUrl  = window.location.href.split('.netlify.app')[0]


    if(data.name==num){
        alert("Log in Successfull")
        
        window.location=(baseUrl+".netlify.app/index.html")
    }else{
        window.location=(baseUrl+".netlify.app/signup.html")
    }
}
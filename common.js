// // to stop audio
// alert("Press on Gursimranjeet Singh to stop audio");
// function stop_audio(){
//     var ply = document.getElementById('mybgaud');
//     var oldSrc = ply.src;// just to remember the old source
//     ply.src = "";// to stop the player you have to replace the source with nothing
// }

//reset form
function formvalid() {
    let name = document.getElementById('Name');
    let email = document.getElementById('Email');
    let messages = document.getElementById('Messages');
    console.log(name);
    let regex1 = /^[A-Za-z\w]+$/;
    let regex2 = /^[\w\.\-]+@([\w\-]+\.)+[\w\-]+$/;

    if (!regex1.test(name.value)) {
        alert("Name cannot have special characters and digits");
        name.value = "";
        name.placeholder = "e.g." + "Gursimranjeet Singh";
    } else if (!regex2.test(email.value)) {
        alert("Please Enter Email In Correct Format ")
        email.value = "";
        email.placeholder = "e.g." + "my-username@my-gmail.ac.in";
    } else {
        formvaliddone();
    }
}

function formvaliddone() {
    // Your form validation logic here...

    // Assuming the validation is successful, reset the form
    document.getElementById("form").reset();
}



//for bar addition according to mobile viewport
function navbarresp(){
    let x=document.getElementById('navulmob');
    if(x.style.display==="none"){
        x.style.display="flex";
    }
    else{
        x.style.display="none";
    }
}
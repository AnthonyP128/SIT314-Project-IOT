const lightOne = document.getElementById("l1");
lightOne.addEventListener('change', light)

async function light(event)
{
    if(lightOne.checked == true){
        console.log("true");
    }
    else {
        console.log('false');
    }
}


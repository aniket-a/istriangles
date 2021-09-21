const input = document.querySelectorAll(".angle-input");
const triangleBtn = document.querySelector("#is-triangle");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    //console.log(sumOfAngles);
  return sumOfAngles; 
}

function isTriangle(){
     const sumOfAngles = calculateSumOfAngles(Number(input[0].value), Number(input[1].value), Number(input[2].value));
     console.log(sumOfAngles)

     if(sumOfAngles === 180){
        // console.log("yeah, the angle from a triangle!!");
         output.innerHTML ="yeah, the angle from a triangle!!";
     }else{
        // console.log("ooh!, angle not from a triangle");
        output.innerHTML ="ooh!, angle not from a triangle";
     }
}


triangleBtn.addEventListener("click",  isTriangle)


let imgIndx = 1;
let imgBoxes = document.querySelectorAll(".img-box");
let slidableContents = ["WELCOME TO RVR&JCCE","FOLLOW YOUR DREAMS <br> @ RVR&JCCE","EXCELLENCE THROUGH <br> RESEARCH"]
let slidables = Array.from(document.getElementsByClassName("slidable"));
// setTimeout(function(){
//     slidables.forEach(item => {
//         item.style.transform = "translateY(-55px)";
//         console.log(item)
//     })
//     console.log("ended",slidables)
// },1000)
let courousalId = setInterval(changeImg,3000);

function changeImg(){
    imgIndx = imgIndx % imgBoxes.length;
    slidables.forEach(item => {
        item.style.transform = "translateY(-150px)";
    })
    setTimeout(function(){
        for (let i = 0 ;i<imgBoxes.length;i++){
            if(i != imgIndx){
                imgBoxes[i].style.opacity = 0;
            }
            else{
                imgBoxes[i].style.opacity = 1;
                if(i == 0){
                    slidables[0].innerHTML = slidableContents[i];
                    slidables[1].innerText = "KNOW MORE";
                    slidables[0].style.transform = "translateY(0px)";
                    slidables[1].style.transform = "translateY(0px)";
                }
                else{
                    slidables[0].innerHTML = slidableContents[i];
                    slidables[0].style.transform = "translateY(0px)";
                }
            }
        }
        imgIndx++;
    },1000)
}

let docs = document.querySelectorAll(".corousel-btn");
docs.forEach(icon => {
  console.log(icon)
  icon.addEventListener("click",() => {
    console.log("hel")
    clearInterval(courousalId);
    icon.id == "ileft" ? --imgIndx : ++imgIndx;
        for (let i = 0 ;i<imgBoxes.length;i++){
          if(i != imgIndx){
              imgBoxes[i].style.opacity = 0;
          }
          else{
              imgBoxes[i].style.opacity = 1;
          } 
      }
      courousalId = setInterval(changeImg,3000);
  })
});
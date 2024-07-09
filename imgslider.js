const container= document.querySelector('.container');
const btns=document.querySelectorAll('.btn')
const imgList=["2","3","4","5","6","7","8","9","10"]

let index=0
function updateBackground(){
    container.style.backgroundImage = `url("Img/${imgList[index]}.jpg")`;
    container.style.backgroundSize = 'cover';
    
    container.style.backgroundRepeat = 'no-repeat';
}
function nextImage() {
    index++;
    if (index === imgList.length) {
        index = 0;
    }
    updateBackground();
}

btns.forEach((button)=>{
    button.addEventListener('click',()=>{
    
    if(button.classList.contains('btn_left')){
       
    
        index--;
        if(index<0){
            index=imgList.length-1;
        }
       
        
    }
    else{
        index++;
        if(index===imgList.length){
            index=0;
        }
        
     

    }
    updateBackground();
})
})
updateBackground()
setInterval(nextImage, 3000); 
    

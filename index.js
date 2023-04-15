const track = document.getElementById("image-track")  //to know the current position of mouse pointer


//invisible slider
window.onmousedown=e =>{

    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup =() =>{
    track.dataset.mouseDownAt= "0";
    track.dataset.prevPercent= track.dataset.percent;

}

window.onmousemove =e =>{

    if(track.dataset.mouseDownAt==="0")  return ;

    const mouseCurrDistance = parseFloat(track.dataset.mouseDownAt)-e.clientX;
        mouseMaxDistance= window.innerWidth /2;
    
    const percent= (mouseCurrDistance/mouseMaxDistance) * (-100) ;
        Math.min(nextPercent,0);
        Math.max(nextPercent,-100);
       const nextPercent = parseFloat(track.dataset.prevPercent) + percent;
        
        for(const image of track.getElementsByClassName("image")){
            image.style.objectPosition = `${nextPercent} 50%`;
        }
    
    track.dataset.percent= nextPercent;
    
    track.animate({
        transform:`translate(${nextPercent}%,-50%)`
    },{duration:1200 ,fill:"forwards"});

    image.animate({
        objectPosition: `${nextPercent+100}% center`
    },{duration:1200, fill:"forwards" });
}


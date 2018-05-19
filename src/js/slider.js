(function(){

    let webSlideCount = 0;
    const slides = document.querySelectorAll("#web-projects .project");    
    document.getElementById('web-next').addEventListener(
        'click',
        (e)=>{
            if (webSlideCount < slides.length -1){
                slides[webSlideCount].classList.remove('project--shown');
                webSlideCount++;
                setTimeout(()=>{
                    slides[webSlideCount].classList.add('project--shown');
                }, 800);
            }
            else {
                console.log(webSlideCount);
                webSlideCount = 0;
                slides[slides.length - 1].classList.remove('project--shown');
                setTimeout(()=>{
                    slides[webSlideCount].classList.add('project--shown');
                }, 800);
            }
        }
    );
})();
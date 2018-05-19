(function(){
        let webSlideCount = 0;
        let writeSlideCount = 0;
        const slides = document.querySelectorAll("#web-projects .project");

            function slide(arrow, counter){
                const nextSlide = slides[webSlideCount + 1] || slides[0];
                const prevSlide = slides[webSlideCount - 1] || slides[slides.length - 1];
                const currSlide = slides[webSlideCount];

                if (arrow.dataset.direction === 'next'){
                    currSlide.classList.remove('project--shown');
                    currSlide.classList.add('project--left');
                    nextSlide.classList.add('project--right');
                    setTimeout(()=>{
                        currSlide.classList.remove('project--left');
                        nextSlide.classList.remove('project--right');
                        nextSlide.classList.add('project--shown');
                    }, 500);
                    webSlideCount = (webSlideCount == slides.length - 1) ? 0 : webSlideCount + 1;
                } else {
                    currSlide.classList.remove('project--shown');
                    currSlide.classList.add('project--right');
                    prevSlide.classList.add('project--left')
                    setTimeout(()=>{
                        currSlide.classList.remove('project--right');
                        prevSlide.classList.remove('project--left');
                        prevSlide.classList.add('project--shown');
                }, 500);
                webSlideCount = (webSlideCount == 0) ? slides.length -1 : webSlideCount - 1;
                }
            }
        document.getElementById('web-next').addEventListener(
            'click',
            (e)=>{return slide(e.target, webSlideCount)}
        );
        document.getElementById('web-prev').addEventListener(
            'click',
            (e)=>{return slide(e.target, webSlideCount)}
        );
    }
)();
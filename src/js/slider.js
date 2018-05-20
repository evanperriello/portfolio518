(function(){
        class Slider {
            constructor(args){
                this.count = args.initialCount;
                this.slides = args.slides;
                this.name = args.name;
                this.time = args.time;
                this.noClick = false;
            }
            slide(arrow){
                console.log('sliding');
                const slides = this.slides;
                const nextSlide = slides[this.count + 1] || slides[0];
                const prevSlide = slides[this.count - 1] || slides[slides.length - 1];
                const currSlide = slides[this.count];
                //the noClick check makes sure the user can't click again before the sliding finishes and stack up a bunch of slides.
                if (!this.noClick){
                    if (arrow.dataset.direction === 'next'){
                        this.noClick = true;
                        currSlide.classList.remove('project--shown');
                        currSlide.classList.add('project--left');
                        nextSlide.classList.add('project--right');
                        setTimeout(()=>{
                            currSlide.classList.remove('project--left');
                            nextSlide.classList.remove('project--right');
                            nextSlide.classList.add('project--shown');
                            this.noClick = false;
                        }, this.time);
                        this.count = (this.count == slides.length - 1) ? 0 : this.count + 1;
                    } else {
                        this.noClick = true;
                        currSlide.classList.remove('project--shown');
                        currSlide.classList.add('project--right');
                        prevSlide.classList.add('project--left')
                        setTimeout(()=>{
                            currSlide.classList.remove('project--right');
                            prevSlide.classList.remove('project--left');
                            prevSlide.classList.add('project--shown');
                            this.noClick = false;
                    }, this.time);
                    this.count = (this.count == 0) ? slides.length -1 : this.count - 1;
                    }
                }

                
            }
            //attach it to the dom events
            attach(){
                document.getElementById(`${this.name}-next`).addEventListener(
                    'click',
                    (e)=>{return this.slide(e.target, this.name)}
                )
                document.getElementById(`${this.name}-prev`).addEventListener(
                    'click',
                    (e)=>{return this.slide(e.target, this.name)}
                );

            }
        }

        const webSlider = new Slider({
            name: 'web', 
            initialCount: 0, 
            time: 400, 
            slides: document.querySelectorAll("#web-projects .project")
        });
        webSlider.attach();

        const writingSlider = new Slider({
            name: 'writing', 
            initialCount: 0, 
            time: 400, 
            slides: document.querySelectorAll("#writing-projects .project")
        });
        writingSlider.attach();

        // const writingSlider = new Slider({
        //     name: 'writing',
        //     initialCount: 0, 
        //     time: 100, 
        //     slides: document.querySelectorAll("#write-projects .project")
        // });
        // writingSlider.attach();



    }

)();
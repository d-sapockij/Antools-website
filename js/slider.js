const nextBtn = document.querySelector('.slider__buttons-next')
const prevBtn = document.querySelector('.slider__buttons-prev')
const container = document.querySelector('.slider__container')
const sliderTrack = document.querySelector('.slider__track')
const sliderPag = document.querySelector('.slider__pagination')
const slides = document.querySelectorAll('.slider__item')
const slideCount = slides.length
const pagArray = [];

for ( let i = 0; i < slideCount; i++) {
    const el = document.createElement("div")
    el.classList.add('slider__pagination-item')
    pagArray.push(el)
    sliderPag.append(el)
}

let activeSlideIndex = 0
slides[activeSlideIndex].classList.add('active')
pagArray[activeSlideIndex].classList.add('active')

nextBtn.addEventListener('click', () => {
    changeSlide('next')
})

prevBtn.addEventListener('click', () => {
    changeSlide('prev')
})

for (let el of pagArray) {
    el.addEventListener('click', (event) => {
        changeSlide('null', event)        
    })
}


function changeSlide(direction, event) {
    
    if (direction === 'next') {
        activeSlideIndex++
        if (activeSlideIndex === slideCount) {
            activeSlideIndex = 0;
        }
    }

    if (direction === 'prev') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideCount - 1;
        }
    }

    if (direction === 'null') {
        activeSlideIndex = pagArray.indexOf(event.target)
    }

    for (let el of slides) {
        el.classList.remove('active')
    }
    slides[activeSlideIndex].classList.add('active')

    for (let el of pagArray) {
        el.classList.remove('active')
    }
    pagArray[activeSlideIndex].classList.add('active')

    const width = container.clientWidth

    sliderTrack.style.transform = `translateX(-${activeSlideIndex * width}px)`
}

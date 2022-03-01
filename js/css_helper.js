const observer1 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('box-slide--left');
        }
    })
})
const observer2 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('box-slide--rigth');
        }
    })
})

const observer3 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('box-slide--bottom');
        }
    })
})

observer1.observe(document.querySelector('#block-left'));
observer2.observe(document.querySelector('#block-rigth'));
observer3.observe(document.querySelector('#block-bottom'));
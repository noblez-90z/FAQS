const li = document.querySelectorAll('li')
const item = document.querySelectorAll('.listcontent')
let plus = document.querySelectorAll('.plus')
let minus = document.querySelectorAll('.minus')
console.log(Array.isArray(Array.from(li)))
console.log(Array.isArray(Array.from(item)))
console.log(Array.isArray(Array.from(plus)))
console.log(Array.isArray(Array.from(minus)))
function display(){
    li[0].classList.add('active');
    li[1].classList.add('active');
    item[0].classList.add('active');
    item[1].classList.add('active');
    minus.classList.add('unshow')
    plus[0].classList.add('active')
    plus[1].classList.add('active')
}

function undo(){
    li.classList.remove('active')
    item.classList.remove('active')
    minus.classList.remove('unshow')
    plus.classList.remove('active')
    // console.log('work')
}
plus[0].addEventListener('click',function(){
    li[0].classList.add('active')
    item[0].classList.add('active')
    plus[0].classList.add('active')
    minus[0].classList.add('unshow')
})
plus[1].addEventListener('click',function(){
    li[1].classList.add('active')
    item[1].classList.add('active')
    plus[1].classList.add('active')
    minus[1].classList.add('unshow')

})
plus[2].addEventListener('click',function(){
    li[2].classList.add('active')
    item[2].classList.add('active')
    plus[2].classList.add('active')
    minus[2].classList.add('unshow')

})
plus[3].addEventListener('click',function(){
    li[3].classList.add('active')
    item[3].classList.add('active')
    plus[3].classList.add('active')
    minus[3].classList.add('unshow')

})

minus[0].addEventListener('click',function(){
    li[0].classList.remove('active')
    item[0].classList.remove('active')
    minus[0].classList.remove('unshow')
    plus[0].classList.remove('active')
})
minus[1].addEventListener('click',function(){
    li[1].classList.remove('active')
    item[1].classList.remove('active')
    minus[1].classList.remove('unshow')
    plus[1].classList.remove('active')
})
minus[2].addEventListener('click',function(){
    li[2].classList.remove('active')
    item[2].classList.remove('active')
    minus[2].classList.remove('unshow')
    plus[2].classList.remove('active')
})
minus[3].addEventListener('click',function(){
    li[3].classList.remove('active')
    item[3].classList.remove('active')
    minus[3].classList.remove('unshow')
    plus[3].classList.remove('active')
})

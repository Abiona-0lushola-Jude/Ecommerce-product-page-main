const menu = document.querySelector('.menu')
const menuBtnOpen = document.querySelector('#menu-btn-open')
const menuBtnClose = document.querySelector('#menu-btn-close')
const avatar = document.querySelector('.avatar')
const cartMessage = document.querySelector('.cart-message')
const minusOrder = document.querySelector('#minus')
const plusOrder = document.querySelector('#plus')
const orderFig = document.querySelector('.fig')
const addCart = document.querySelector('#addCart')
const cartInfoImage = document.querySelector('#cart-info-img')
const cartInfoText= document.querySelector('#cart-info-text')
const mainImage = document.querySelector('#mainImg')
const subImgOne = document.querySelector('#img-one')
const subImgtwo = document.querySelector('#img-two')
const subImgthree = document.querySelector('#img-three')
const subImgfour = document.querySelector('#img-four')
const subImg = document.querySelectorAll('.sub-img')
const body =document.querySelector('body')
const checkOut = document.querySelector('#checkout')
const priceText = document.querySelector("#priceText")
const pressAdd = document.querySelector('.order-cart')
const cartBox = document.querySelector("#cart-info")




// the toggling of the menu when on mobile view
function Toggle(){
    menuBtnClose.classList.toggle('open')
    menu.classList.toggle('open')
    menuBtnOpen.classList.toggle('open')
}

//functions of buttons at work 
menuBtnOpen.addEventListener('click', Toggle)
menuBtnClose.addEventListener('click', Toggle)
avatar.addEventListener('click', cartInfo)
function cartInfo(){
    cartMessage.classList.toggle('open')
}
// The real deal
// push all the numbers to get an array of the numbers picked and pick the last value as the real value the user wants
let countArray =[]
// console.log(countArray)
// counting of the number of product the user want to order
// Below is the function for the +ve button
let count = 0
let realCount = countArray[countArray.length - 1]
function plusOrderFunction(){
    minsCount= count++
    orderFig.textContent = minsCount
    countArray.push(minsCount)
}

// function for the -ve button
function minsOrderFunction(){
    // console.log('Hey you avaliable')
    let minsCount= count-- -2
    if(minsCount <= 0){
        count = 0
        minsCount = 0
    }
    orderFig.textContent= minsCount
    countArray.push(minsCount)
    console.log(realCount)
}
document.body.addEventListener('click',()=>{
    body.classList.remove('open')
})
// 
minusOrder.addEventListener('click', minsOrderFunction)
plusOrder.addEventListener('click', plusOrderFunction)


// Array for the images. This is where the changing of the bib image is determined
 let imageArray=[
    {
        id:1,
        src: "images/image-product-1.jpg",
        name: "Fall Limited Edition Sneakers",
        price:125.00
    },
    {
        id:2,
        src: "images/image-product-2.jpg",
        name:"Autumn Limited Edition Sneakers",
        price:125.00
    },
    {
        id:3,
        src: "images/image-product-3.jpg",
        price:125.00
    },
    {
        id:4,
        src: "images/image-product-4.jpg",
        price:125.00
    }
]

// where all the images are pushed after clicked on each one of them
let mainImageArray = []
// function the support the above text
subImgOne.addEventListener('click', ()=>{
    mainImage.src = imageArray[0].src
    mainImageArray.push(imageArray[0].src)
})
subImgtwo.addEventListener('click', ()=>{
    mainImage.src = imageArray[1].src
    mainImageArray.push(imageArray[1].src)
})
subImgthree.addEventListener('click', ()=>{
    mainImage.src = imageArray[2].src
    mainImageArray.push(imageArray[2].src)
})
subImgfour.addEventListener('click', ()=>{
    mainImage.src = imageArray[3].src
    mainImageArray.push(imageArray[3].src)
})

// console.log(mainImageArray)


// function that gives the cart message
function check(){
    cartBox.classList.add('delete')
    let mainPrice = 120 * countArray[countArray.length - 1]
    let cartImage = mainImageArray[mainImageArray.length -1]
    // console.log(cartImage)
    document.querySelector('#cartImage').src = cartImage
    if(cartImage === "images/image-product-1.jpg" ){
        cartInfoText.textContent = `${imageArray[0].name} $${imageArray[0].price}.00 x ${countArray[countArray.length - 1]}`  
        priceText.textContent = `$${mainPrice}.00`
    }else if(cartImage === "images/image-product-2.jpg"){
        cartInfoText.textContent = `${imageArray[1].name} $${imageArray[1].price}.00 x ${countArray[countArray.length - 1]}` 
        priceText.textContent = `$${mainPrice}.00`
    }else if(cartImage === "images/image-product-3.jpg"){
        cartInfoText.textContent = `${imageArray[0].name} $${imageArray[2].price}.00 x ${countArray[countArray.length - 1]}`
        priceText.textContent = `$${mainPrice}.00`
    }else{
        cartInfoText.textContent = `${imageArray[0].name} $${imageArray[3].price}.00 x ${countArray[countArray.length - 1]}`
        priceText.textContent = `$${mainPrice}.00`
    }
     document.querySelector('#no-order').classList.add('open')
     checkOut.classList.add('open')
     document.querySelector('sup').textContent = countArray[countArray.length - 1]
     document.querySelector('sup').classList.add('open')
}

// function for clicking the Add Chart button
function addCartInDom(){
    if((countArray[countArray.length - 1]=== undefined) || (countArray[countArray.length - 1] === 0)){
        alert("Please, Kindly select the quantity to Order")
    }else{
        check()
    }
    document.querySelector('#top-cart-icon').addEventListener('click',cartInfo)
}
pressAdd.addEventListener('click',addCartInDom)

// function for the delete button
function deletBtn(){
    document.querySelector('#no-order').classList.remove('open')
    cartBox.classList.remove('delete')
    checkOut.classList.remove('open')
    document.querySelector('sup').classList.remove('open')
    document.querySelector('#top-cart-icon').removeEventListener('click',cartInfo)
}
document.querySelector("#delete").addEventListener('click', deletBtn)
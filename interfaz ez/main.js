let img_minus=document.querySelector('.input-minus');
let img_plus=document.querySelector('.input-plus');
let input=document.querySelector('.input-number');

let inputNumber=0;

img_plus.addEventListener('click',()=>{
    inputNumber++
    input.value=inputNumber;
})
img_minus.addEventListener('click',()=>{
    if(inputNumber>=1){
        inputNumber--
    }
    input.value=inputNumber;
})
const addBtn=document.querySelector('.details_button')
let cartNumber=document.querySelector('.header_cart-noti')
let lastValue=parseInt(cartNumber.innerText);
let productContainer=document.querySelector('.cart-modal_checkout-cont')
let productModal=document.querySelector('.cart-modal_det-cont')
let checkoutBtn=document.querySelector('.cart-modal_button')
p=document.createElement('p')
p.innerHTML='<p class="cart-empty">Your cart is empty</p>';
refresh=()=>{
    if(lastValue<1){
        productModal.classList.add('delete')
        checkoutBtn.classList.add('delete')
        p.classList.remove('delete')
        productContainer.appendChild(p)
        cartNumber.style.display='none';
    } else{
        p.classList.add('delete')
        price.innerHTML=`$125 x${lastValue}<span>  $${lastValue*125}</span></p>`;
    }
}
addBtn.addEventListener('click',()=>{
    lastValue+=inputNumber;
    cartNumber.innerText=lastValue;
    cartNumber.style.display='block';
    productModal.classList.remove('delete')
    checkoutBtn.classList.remove('delete')
    refresh();
})
const cartIcon=document.querySelector('.header_cart')
const cartModal=document.querySelector('.cart-modal')
let price=document.querySelector('.cart-modal_price')

cartIcon.addEventListener('click',()=>{
    cartModal.classList.toggle('show')
    refresh()
})
const deleteBtn=document.querySelector('.cart-icon_delete')
deleteBtn.addEventListener('click',()=>{
    if(lastValue>0){
        lastValue--
    }
    cartNumber.innerText=lastValue;
    refresh()
})
const imageContainer=document.querySelector('.gallery-images')
imageContainer.style.backgroundImage =`url(./images/image-product-1.jpg)`;
const previousBtn=document.querySelector('.gallery-previous')
const nextBtn=document.querySelector('.gallery-next')
let imageUrl=1;
previousBtn.addEventListener('click',()=>{
    changePreviousImage(imageContainer,4);
})
nextBtn.addEventListener('click',()=>{
    changeNextImage(imageContainer,4);
})
function changeNextImage(e,length){
    if(imageUrl===length){
        imageUrl=1;
    }else{
        imageUrl++;
    }
    e.style.backgroundImage =`url(./images/image-product-${imageUrl}.jpg)`;
}
function changePreviousImage(e,length){
    if(imageUrl===1){
        imageUrl=length;
    }else{
        imageUrl--
    }
    e.style.backgroundImage =`url(./images/image-product-${imageUrl}.jpg)`;
}
const galleryModal=document.querySelector('.modal-gallery_background')//ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
const btnCloseModal=document.querySelector('.modal-gallery-close')

imageContainer.addEventListener('click',()=>{
    galleryModal.style.display='grid';
})
btnCloseModal.addEventListener('click',()=>{
    galleryModal.style.display='none'
})
let thumbnails=document.querySelectorAll('.gallery-thumbnail')
thumbnails=[...thumbnails]

thumbnails.forEach(thumbnail=>{
    thumbnail.addEventListener('click',(event)=>{
        imageContainer.style.backgroundImage =`url(./images/image-product-${event.target.id}.jpg)`;
    })
})
let modalThumbnails=document.querySelectorAll('.modal-gallery-thumbnail')
modalThumbnails=[...modalThumbnails]
const modalGallery=document.querySelector('.modal-gallery-images')
modalThumbnails.forEach(modalThumb=>{
    modalThumb.addEventListener('click',event=>{
        modalGallery.style.backgroundImage =`url(./images/image-product-${event.target.id}.jpg)`;//event.tarjet.slice(-1)
    })
})
const btnPreviousModal=document.querySelector('.modal-gallery-previous')
const btnNextModal=document.querySelector('.modal-gallery-next')

btnPreviousModal.addEventListener('click',()=>{
    changePreviousImage(modalGallery,4);
})
btnNextModal.addEventListener('click',()=>{
    changeNextImage(modalGallery,4);
})

const menuHeader=document.querySelector('.header_menu')
const navbar=document.querySelector('.modal-navbar-backg')
menuHeader.addEventListener('click',()=>{
 navbar.style.display='block'
})
const btnNavbarClose=document.querySelector('.navbar-close')
btnNavbarClose.addEventListener('click',()=>{
 navbar.style.display='none'
})
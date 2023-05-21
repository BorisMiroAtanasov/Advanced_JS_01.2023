function solve() {
document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
document.getElementsByClassName('checkout')[0].addEventListener('click',checkOut );
const cart = [];
let outPut = document.getElementsByTagName('textarea')[0];
outPut.value = ''

function onClick(event){
   if(event.target.tagName =='BUTTON' && event.target.classList.contains('add-product')){
      const  product = event.target.parentNode.parentNode;

      //console.log(product);

      const productName = product.querySelector('.product-title').textContent;
      const productPrice = Number(product.querySelector('.product-line-price').textContent);
      
      cart.push({
         productName,
         productPrice,
      });
      outPut.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`

   }
};

function checkOut(){
   const products= new Set();
   cart.forEach(p => products.add(p.productName));

   const total = cart.reduce((t, c) =>t +c.productPrice ,0 );
   outPut.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`
}




}
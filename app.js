var productsCountEl = document.getElementById('products-count')
console.log(productsCountEl)

var addToCartButtons = document.querySelectorAll('.add-to-cart')
console.log(addToCartButtons)

for(var i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener('click',function(e) {
	// e.preventDefault() - якюи був тег <a>
	var prevProductsCount = +productsCountEl.textContent
	productsCountEl.textContent = prevProductsCount + 1
})
}

function myFunction() {
    document.querySelectorAll('.show-like').style.color = "red";
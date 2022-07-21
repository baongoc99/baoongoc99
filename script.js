const btn = document.querySelectorAll('content .row .col .card .card-body button')
// console.log(btn)
btn.forEach(function(_button,_index) {
    // console.log(_button, _index)
    _button.addEventListener("click",function(_event){
        var btnItem = _event.target
        var product = btnItem.parentElement
        var full = product.parentElement
        var productImg = full.querySelector("img").src
        var productName = full.querySelector("H5").innerText
        var productPrice = full.querySelector("span").innerHTML
        addCart(productImg,productName,productPrice)
        
    })
})
function addCart(_productImg,_productName,_productPrice) {
    var addRow = document.createElement("row")
    var rowcontent = '<hr style="margin-left:80px;margin-right:80px"><div style="font-size:14px; height:95px; margin-top: -15px; background-color: #fff;" class="row"><div style="margin-left: 10px; margin-top: 40px;" class="col-1"><div class="form-check"><label class="form-check-label" style="margin-left:-25px" for="flexCheckChecked"><input class="form-check-input" type="checkbox" style="width:17px;height:17px;background-color:#b77665 ;" checked><div class="stardust-checkbox__box" ></div></label></div></div><div class="col"><img style="width:65px; margin-top: 20px; margin-left: -80px;" src="'+_productImg+'"></div><div class="col-5"><p style="margin-left: -23px; margin-top:40px;">'+_productName+'</p></div><div class="col"><p style="margin-top: 40px; margin-left:-250px;" class="text-muted">M</p></div><div class="col"><p style="margin-top:40px; margin-left: -180px;"><span class="price">'+_productPrice+'</span><sup>₫</sup></p></div><div class="col soluong"><input style="width:110px; margin-top:30px; margin-left: -146px;" type="number" class="form-control" id="inputnumber" value="1"></div><div class="col"><p style="color:#ee4d2d; margin-top:40px; margin-left: -36px;">'+_productPrice+'<sup>₫</sup></p></div><div style="margin-top: 20px; margin-right:-40px;" class="col text-center"><a style="font-size: 14px;" href="#" class="cart-delete"><i class="fa-regular fa-trash-can"></i></a><p style="color: #ee4d2d; margin-top: 0px;">Sản phẩm tương tự</p></div>'
    addRow.innerHTML = rowcontent
    var cardBuy = document.querySelector(".sp")
    // console.log(cardBuy)
    cardBuy.append(addRow)

    carttotal()
    // deleteCart()
}
function carttotal(){
	var cartItem = document.querySelectorAll(".sp .row")
	var totalC = 0
	//console.log(cartItem.length)
	for (var i = 0 ; i < cartItem.length ; i++) {
		//console.log(i)
		var inputValue = cartItem[i].querySelector(".soluong input").value
		// console.log(inputValue)
		var productPrice = cartItem[i].querySelector("span").innerHTML
		// console.log(productPrice)
		totalA = inputValue * productPrice
		totalC =  totalC + totalA * 1000 
		// console.log(totalC)
		totalD = totalC.toLocaleString('de-DE')
	}
	var cartTotalA = document.querySelector(".tongtien span")
	cartTotalA.innerHTML = totalD
}
// function deleteCart(){
// 	var cartItem = document.querySelectorAll(".sp .row")
// 	for (var i = 0;i<cartItem.length ; i++) {
// 		var _productT = document.querySelectorAll(".cart-delete")
// 		// _productT[i].addEventListener("click",function(_event){
// 		// 	var cartDelete = _event.taget
// 		// 	var cartitemR = cartDelete.parentElement
// 		// 	console.log(cartitemR)

// 		// })
// 		console.log(_productT)
// 	}
// }


          
                  
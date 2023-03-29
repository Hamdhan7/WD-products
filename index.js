
function buy(product){

    // Create a container element for the popup
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");

    // Create the popup element
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = product.innerHTML  + `
        <form id = "form1">
          
            <input class="quantity-input" type="number"  value="1" id = "quantity">
            <br>
        </form>    

            <br>
            <div style = "display: flex; float : right;">
                <button class = "btn-cancel" id = "btn-cancel">Cancel</button>
                <button  class = "submit-btn" id = "buy"  >Buy</button>
            </div>
            
        
        
    `;

    const quantity = document.getElementById("quantity");

    const closeButton1 = popup.querySelector("#btn-cancel");
    closeButton1.addEventListener("click", function() {
    popupContainer.remove();
    })
    
    const Buybutton = popup.querySelector("#buy");
    Buybutton.addEventListener("click", function() {
        AddToCart();
        popupContainer.remove();
    })



    // Add a click event listener to the close button

    // Add the popup element to the container
    popupContainer.appendChild(popup);

    // Add the container to the document body
    document.body.appendChild(popupContainer);


}

function AddToCart(){
    alert("buying items");



}







function notnull(){

    const name = document.getElementById("name");
    const address = document.getElementById("address");

    if (name.value === "" || address.value === "") {
        alert("Input field is empty");
        buy(product); 
    }


    addtocart();
}


function popupCart(){

    // Create a container element for the popup
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");

    // Create the popup element
    const popup = document.createElement("div");

    // creating a div for cart items
    const items = document.createElement("div");


    // displaying products and their total prices
    popup.classList.add("popup");
    popup.innerHTML = `
        <h2>Cart</h2>` + `
        <p>The items that you have ordered.</p>` 

         + prdName0.innerHTML+ `<br>`
         + prdName1.innerHTML + `<br>`  
         + prdName2.innerHTML + `<br>` 
         + prdName3.innerHTML + `<br>` 
         + prdName4.innerHTML + `<br> <br>` 
         +
        
        
        `
        <input type="Text" id ="name"   placeholder="Enter you name">
        <input type="Text" id = "address" " placeholder="Enter you Email address">
            <button id = "proceed-2" type = "submit">Proceed</button>
            <button id = "close-cart-btn" >Cancel</button> `;

    // Add a click event listener to the close button
    const closeButton = popup.querySelector("#close-cart-btn");
    closeButton.addEventListener("click", function() {
    popupContainer.remove();
    });

    // Adding cart items to the cart




    // Add the popup element to the container
    popupContainer.appendChild(popup);

    // Add the container to the document body
    document.body.appendChild(popupContainer);



}


function addtocart(){


}
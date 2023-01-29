import { menuArray } from "./data.js";

function handleAllBtns(e){
    if(e.target.dataset.menu){
        getAddedOrders(e.target.dataset.menu)
    }
}


function getMenuHtml(){
    let menuHtml = '';
    
    menuArray.forEach((menu)=>{
    
        menuHtml += `
       
        <div class="menu-container">
          <figure>${menu.emoji}</figure>
            
                <div class="menu-text">
                    <h2 class="menu-title">${menu.name}</h2>
                    <p class="menu-receipe">${menu.ingredients}</p>
                    <p class="menu-price">$${menu.price}</p>
                </div>
                <i class="fa-solid fa-circle-plus menu-btn" id="menu-btn" data-menu="${menu.name}"></i>
        
        </div>

        <div class="line"></div>
        `
    })
    document.getElementById("menu-list").innerHTML = menuHtml;
    document.addEventListener('click', (e)=> handleAllBtns(e))
}
 getMenuHtml()



let selectedOrderMenu = []

function getAddedOrders(selectedOrder){
    menuArray.forEach((order)=>{
        if(order.name === selectedOrder){
            selectedOrderMenu.push(order)
            console.log('added order : ' ,selectedOrderMenu)
            console.log(selectedOrderMenu.indexOf(order))
            orderListMenu()
        }
    })

}

function orderListMenu(){
    let orderMenu = '';
    let ordered = '';
    let totalOrder = '';
    let price = 0

    if(selectedOrderMenu.length > 0){
        selectedOrderMenu.forEach((order)=>{
            orderMenu = '<h2 class="title"> Yourorder</h2>'

            ordered += `
                    <div class=order-request>
                       <h2 class="order-title">${order.name}</h2>
                        <button class="remove-btn" id="remove-btn" type="submit" data-remove="${order.name}">remove</button> 
                        <h3 class="order-price">$${order.price}</h3>
                    </div>
            ` 

            price += order.price

            totalOrder = `
                <div class="total">
                    <h2 class="total-title">Total price:</h2>
                    <p class="ordered-price">$${price}</p>
                </div>

                <button class="btn" id="complete-order-btn" type="submit">Complete order</button>
            `
        })
    }

    document.getElementById('order-menu').innerHTML = orderMenu;
    document.getElementById('ordered').innerHTML = ordered;
    document.getElementById('total-order').innerHTML = totalOrder;
}






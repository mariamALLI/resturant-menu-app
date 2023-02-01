import { menuArray } from "./data.js";

const success = document.getElementById('success');
const modalForm = document.getElementById('modal-form');
const cardnameInput = document.getElementById('cardname-input'); 

// this function handles all the clicks 
function handleAllBtns(e){
    if(e.target.dataset.menu){
        getAddedOrders(e.target.dataset.menu)
    }else if (e.target.dataset.remove){
        removeOrderMenu(e.target.dataset.remove)
    }else if(e.target.dataset.complete){
        completeOrder()
    } /*else if(e.target.dataset.pay){
        payment()
        
    }*/
}

/*this function handles the template for the listed menu
displayed on the dom for selection*/
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
        </div>
                <i class="fa-solid fa-circle-plus menu-btn" id="menu-btn" data-menu="${menu.name}"></i>

        <div class="line"></div>
        `
    })
    document.getElementById("menu-list").innerHTML = menuHtml;
    document.addEventListener('click', (e)=> handleAllBtns(e))
}
 getMenuHtml()


/* this variable is an empty array used to push the selected menu
that will be added to ordered list which appears after the menu is clicked on*/
let selectedOrderMenu = []

/*this function helps to push tyhe selected order to the orderedlist */
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

/*this function helps provide the template that will help display
the ordered menu */
function orderListMenu(){
    let orderMenu = '';
    let ordered = '';
    let totalOrder = '';
    let price = 0

    if(selectedOrderMenu.length > 0){
        selectedOrderMenu.forEach((order)=>{
            orderMenu = '<h2 class="title"> Your order</h2>'

            ordered += `
                    <div class=order-request>
                       <h2 class="order-title">${order.name}</h2>
                        <button class="remove-btn" id="remove-btn" type="submit" data-remove="${order.name}">remove</button> 
                        
                    </div>
                    <h3 class="order-price">$${order.price}</h3>
            ` 

            price += order.price

            totalOrder = `
                <div class="total">
                    <h2 class="total-title">Total price:</h2>
                    <p class="ordered-price">$${price}</p>
                </div>

                <button class="btn" id="complete-order-btn" type="submit" data-complete="order">Complete order</button>
            `
        })
    }

    document.getElementById('order-menu').innerHTML = orderMenu;
    document.getElementById('ordered').innerHTML = ordered;
    document.getElementById('total-order').innerHTML = totalOrder;
}



/*this function will help make the remove button present beside each menu item
in the ordered list section */
function removeOrderMenu(selectedOrder){
    let index = ''
    selectedOrderMenu.forEach((order)=>{
        index = selectedOrderMenu.indexOf(order.selectedOrder)
        console.log(index)
    })

    let removeOrder = selectedOrderMenu.splice(index,1)
    
    orderListMenu()
    return removeOrder
}


/*this function will help complete order menu seleted and display a modal
pop up for payment details */
function completeOrder(){
    document.querySelector('form').style.display = 'block';
}

function payment(){



    document.getElementById('order-sec').style.display = 'none'
    document.getElementById('total-sec').style.display = 'none'
    document.getElementById('success-msg').innerHTML = `
    <h2 class="success-txt">Thanks,${cardnameInput.value}! Your order is on its way!</h2>
    `
    // success.style.display = 'block'
    setTimeout(()=>{
        success.style.display = 'block'
        },1500)
    
}

modalForm.addEventListener('submit', ()=>{
    payment()
    document.querySelector('form').style.display = 'none'
    // success.style.display = 'block'    
})
import { menuArray } from "./data.js";

// const menuList = document.getElementById("menu-list")
const menuBtn = document.querySelector('#menu-btn')

function getMenuHtml(){
    let menuHtml = '';

    menuArray.forEach((menu)=>{
       
        menuHtml += `
        <div class="menu-container">
            <img src=${menu.photo} alt="pizza slice 🍕 ">

            <div class="menu-text">
                <h2 class="menu-title">${menu.name}</h2>
                <p class="menu-receipe">${menu.ingredients}</p>
                <p class="menu-price">${menu.price}</p>
            </div>
            <button class="menu-btn" id="menu-btn">+</button>
        </div>

        <div class="line"></div>
        `
    })
    return menuHtml
}

function renderMenuList(){
    const menuList = document.getElementById("menu-list")
    menuList.innerHTML = getMenuHtml()
}
// call renderMenu
renderMenuList()

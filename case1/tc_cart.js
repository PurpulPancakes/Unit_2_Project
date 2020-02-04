"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Marcus Tinney
   Date: 2/3/2020  
   
   Filename: tc_cart.js
	
*/
//A set vairable that starts the total off at 0
var orderTotal = 0;
//Displays the rough design of the table
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";
//All the math to calculate the final cost
for(var i = 0; i < item.length; i++){
   //Sets the image based on the item id
   cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt=" + item[i] + " /></td>";
   //Displays The description, price, quantity, and final cost of each item
   cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
   //Calculates the final cost of each item based on quantity
   var itemCost = itemPrice[i] * itemQty[i];
   //Displays the calculated cost
   cartHTML += "<td>$" + itemCost + "</td></tr>";
   //Gets the total amount of everything
   orderTotal += itemCost;
}
//Displays the total amount of everything
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";
//Runs the whole code!
document.getElementById("cart").innerHTML = cartHTML;
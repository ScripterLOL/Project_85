menu_list_array = [ "Veg Margherita Pizza",                  
"Chicken Tandori Pizza" , 
"Veg Supreme Pizza" ,        
"Paneer Tikka Pizza" ,      
"Deluxe Veggie Pizza" , 
"Veg Extravaganza Pizza", 
"Pepporoni Pizza",
"Hawiiaan Pizza" ,
"BBQ Chicken Pizza",
"Margherita Pizza"]; //Add more Pizza item names

var item = document.getElementById("pizza_name").value;
pizza_list_array.push() (item)

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("menu_list_array").value;
    //Use the push() function to push the item into menu_list_array
    menu_list_array.push(item);
}


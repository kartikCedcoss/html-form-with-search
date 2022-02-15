var productarr = [];

$("#fSubmit").click(function () {
  var id = document.getElementById("product_id").value;
  var name = document.getElementById("product_name").value;
  var price = document.getElementById("product_price").value;
  var quantity = document.getElementById("product_quantity").value;

  var objproduct = {
    id: id,
    name: name,
    price: price,
    quantity: quantity,
  };
  productarr.push(objproduct);
  submitProduct(productarr);
});

function submitProduct(productarr) {
  var html =
    "<table> <tr> <th> Id</th> </t> <th>   Name</th> </t> <th> Price </th< </t> <th> Quantity </th> ";
  for (let i = 0; i < productarr.length; i++) {
    html +=
      "<tr><td>" +
      productarr[i].id +
      "</td><td>" +
      productarr[i].name +
      "</td> <td>" +
      productarr[i].price +
      "</td> <td>" +
      productarr[i].quantity +
      "</td></tr>";
  }
  html += "</table>";

  console.log("hello");
}

$("#fSearch").click(function () {
  var field = document.getElementById("fields").value;
  var val = document.getElementById("searchElement").value;
  if (field == "Id") {
    var display =
          "<table> <tr> <th> Id</th> </t> <th>   Name</th> </t> <th> Price </th< </t> <th> Quantity </th> ";
    for (let i = 0; i < productarr.length; i++) {
      if (productarr[i].id == val) {
        
        display +=
          "<tr> <td>" +
          productarr[i].id +
          "</td><td>" +
          productarr[i].name +
          "</td><td>" +
          productarr[i].price +
          "</td><td>" +
          productarr[i].quantity +
          "</td><tr>";
          
          
          //console.log("hello2")
          document.getElementById("result").innerHTML = display;
      
        }
    }
    display += '</table>';
  } else if (field == "Name") {
    var display =
            "<table> <tr> <th> Id</th> </t> <th>   Name</th> </t> <th> Price </th< </t> <th> Quantity </th> ";
    for (let i = 0; i < productarr.length; i++) {
        if (productarr[i].name == val) {
          
          display +=
            "<tr> <td>" +
            productarr[i].id +
            "</td><td>" +
            productarr[i].name +
            "</td><td>" +
            productarr[i].price +
            "</td><td>" +
            productarr[i].quantity +
            "</td><tr>";
            
            
            
            document.getElementById("result").innerHTML = display;
        
          }
      }

      display += '</table>';
  } else if (field == "Price") {
    var display =
            "<table> <tr> <th> ID</th> </t> <th>   Name</th> </t> <th> Price </th< </t> <th> Quantity </th> ";
    for (let i = 0; i < productarr.length; i++) {
        if (productarr[i].price == val) {
          
          display +=
            "<tr> <td>" +
            productarr[i].id +
            "</td><td>" +
            productarr[i].name +
            "</td><td>" +
            productarr[i].price +
            "</td><td>" +
            productarr[i].quantity +
            "</td><tr>";
            
           
            
            document.getElementById("result").innerHTML = display;
        
          }
      }
      display += '</table>';
  } else {
    var display =
            "<table> <tr> <th> Id</th> </t> <th>   Name</th> </t> <th> Price </th< </t> <th> Quantity </th> ";
    for (let i = 0; i < productarr.length; i++) {
        if (productarr[i].quantity == val) {
          
          display +=
            "<tr> <td>" +
            productarr[i].id +
            "</td><td>" +
            productarr[i].name +
            "</td><td>" +
            productarr[i].price +
            "</td><td>" +
            productarr[i].quantity +
            "</td><tr>";
            
           
            
            document.getElementById("result").innerHTML = display;
        
          }
      }
      display += '</table>';
  }
});


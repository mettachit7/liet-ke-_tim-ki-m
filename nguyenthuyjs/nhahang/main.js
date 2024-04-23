const food = [
  {
      id: 1,
      name: "Bánh xèo",
      image: "./img/banhxeo.jpg",
      price: "150.000",
      quantity: "14",
      description: "Bánh xèo ngon tuyệt vời"
  },
  {
      id: 2,
      name: "Bò",
      image: "./img/Bo.jpg",
      price: "400.000",
      quantity: "23",
      description: "Bò thịt ngon, thơm ngon"
  },
  {
      id: 3,
      name: "Cua",
      image: "./img/Cua.jpg",
      price: "300.000",
      quantity: "34",
      description: "Cua tươi ngon"
  },
  {
      id: 4,
      name: "Gà",
      image: "./img/Ga.jpg",
      price: "420.000",
      quantity: "19",
      description: "Gà thơm ngon, giòn rụm"
  }
];

function showDetails(index, type) {
  var product;
  if (type === "food") {
      product = food[index];
  } else {
      product = drink[index];
  }

  document.getElementById("detailsImage").src = product.image;
  document.getElementById("detailsName").textContent = product.name;
  document.getElementById("detailsPrice").textContent = product.price;
  document.getElementById("detailsQuantity").textContent = product.quantity;
  document.getElementById("detailsDescription").textContent = product.description || "Không có mô tả";

  document.getElementById("productDetails").style.display = "block";
}

function closeDetails() {
  document.getElementById("productDetails").style.display = "none";
}

function Food() {
  var html = "";
  for (i in food) {
      html += "<tr>";
      html += "<td>" + food[i].id + "</td>";
      html += "<td>" + food[i].name + "</td>";
      html += "<td><img src=" + food[i].image + " style='height:50px;width:50px'></td>";
      html += "<td>" + food[i].price + "</td>";
      html += "<td>" + food[i].quantity + "</td>";
      html += "<td><button onclick='showDetails(" + i + ", \"food\")'>Chi tiết</button></td>";
      html += "<td><button class='edit-btn' onclick='editProduct(" + i + ")'>Sửa</button></td>";
      html += "<td><button class='delete-btn' onclick='confirmDelete(" + i + ")'>Xóa</button></td>";
      html += "</tr>";
  }
  document.getElementById("tbl").innerHTML = html;
}



function create() {
  var ID = document.getElementById("id").value;
  var Name = document.getElementById("name").value;
  var Image = document.getElementById("img").value;
  var Price = document.getElementById("price").value;
  var Quantity = document.getElementById("quantity").value;
  var Description = document.getElementById("description").value;
  var Select = document.getElementById("Select").value;
  
  var newProduct = {
      id: ID,
      name: Name,
      image: Image,
      price: Price,
      quantity: Quantity,
      description: Description
  };

  if (Select === "food") {
      food.push(newProduct);
      Food(); // Cập nhật lại bảng sản phẩm
  } else if (Select === "drink") {
      
  }

  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("img").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("description").value = "";
}

function editProduct(index) {
  document.getElementById("editProductName").value = food[index].name;
  document.getElementById("editProductImage").value = food[index].image;
  document.getElementById("editProductPrice").value = food[index].price;
  document.getElementById("editProductQuantity").value = food[index].quantity;
  document.getElementById("editForm").style.display = "block";
  document.getElementById("editIndex").value = index;
}

function updateProduct() {
  var newName = document.getElementById("editProductName").value;
  var newImage = document.getElementById("editProductImage").value;
  var newPrice = document.getElementById("editProductPrice").value;
  var newQuantity = document.getElementById("editProductQuantity").value;
  var indexToUpdate = parseInt(document.getElementById("editIndex").value);

  food[indexToUpdate].name = newName;
  food[indexToUpdate].image = newImage;
  food[indexToUpdate].price = newPrice;
  food[indexToUpdate].quantity = newQuantity;

  document.getElementById("editForm").style.display = "none";
  Food(); // 
}

function confirmDelete(index) {

  if (confirm("Bạn muốn xóa sản phẩm có ID là" + food[index].id + "?")) {
    
      food.splice(index, 1);
   
      Food();
  }
}
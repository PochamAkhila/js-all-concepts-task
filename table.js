let objectItems;

fetch("https://dummyjson.com/products", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then(function (data) {
    return data.json();
  })

  .then(function (ObjectData) {
    objectItems = ObjectData.products;
    let placeholder = document.getElementById("output-data");

    let output = "";

    ObjectData.products.map((item) => {
      output += `
        <tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.description}</td>
        <td>${item.price}</td>
        <td>${item.discountPercentage}</td>
        <td><img src="${item.thumbnail}"/></td>
        <td>${item.category}</td>
        <td>${item.rating}</td>
        <td>${item.brand}</td>
        <td><i class="fa fa-trash" id="myDel" onClick="MyFun()"></i></td>
        </tr>
        `;
    });
    placeholder.innerHTML = output;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//delete
function MyFun() {

  // document.getElementById("myTable").deleteRow(id.parentNode.parentNode.rowIndex);

  let del = document.querySelectorAll("#myDel");
  del.forEach((i)=>{
    i.addEventListener("click", () =>{
      const row = i.parentNode.parentNode;
      row.remove();
    })
  })
}

//search
function myFunction() {
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
  var table = document.getElementById("myTable");
  var tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// var table = document.getElementById("myTable");
// var tr = table.getElementsByTagName("tr");
// let $title = document.getElementById("my-btn");
// $title.addEventListener("click", () => {
//   let sorting = tr.sort((a, b) => {
//     return a - b;
//   });
//   console.log(sorting);
// });

//sorting

// let $sort = document.getElementById("my-btn");
// var table = document.getElementById("myTable");
// var tr = table.getElementsByTagName("tr");

// function mySort(event) {
//   table.sort(function (a, b) {
//     if (a[table] < b[table]) {
//       return -1;
//     }
//     if (a[table] > b[table]) {
//       return 1;
//     }
//     return 0;
//   });
// }

function mySort() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

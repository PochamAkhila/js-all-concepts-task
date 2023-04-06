fetch("https://dummyjson.com/products", {
  method: "GET", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((products) => {
    let placeholder = document.getElementById("output-data");
    let out = "";
    for (let item of products) {
      out += `
        <tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.price}</td>
        <td>${item.description}</td>
        <td>${item.image}</td>
        </tr>
        `;
    }

    placeholder.innerHTML = out;
  })
  //     console.log('Success:', data);
  //   })
  .catch((error) => {
    console.error("Error:", error);
  });

      //     function foo(products) {
    //         let productCards = "";

    //         for (i = 0; i < products.length; i++) {
    //             productCards = productCards + foo(products[i]);
    //         }
    //         products.innerHTML = productCards;
    //       }

    //     let $Input = document.getElementById("input");

    //     function InputFun(){
    //         const term = $Input.value;

    //         const termLower = term.toLowerCase();

    //         const Filtered = output.filter(function(item){
    //           const titleLower = item.title.toLowerCase();
    //           return titleLower.indexOf(termLower) != -1;
    //         })
    //         foo(Filtered)
    //     }


    
function mySort() {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable2");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
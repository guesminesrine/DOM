var total = document.getElementById("Total");

//button plus
let plusBtns = document.getElementsByClassName("plus-btn");
for (let btns of plusBtns) {
  btns.addEventListener("click", function () {
    let itemname = btns.getAttribute("name");
    let price = document.getElementById(itemname + "-price").innerHTML;

    let quantity = document.getElementById(itemname + "-quantity");

    quantity.innerHTML++;

    total.innerHTML = parseInt(total.innerHTML) + parseInt(price);
  });
}

//button moins
let minusBtns = document.getElementsByClassName("minus-btn");
for (let btns of minusBtns) {
  btns.addEventListener("click", function () {
    let itemname = btns.getAttribute("name");
    let price = document.getElementById(itemname + "-price").innerHTML;

    let quantity = document.getElementById(itemname + "-quantity");

    if (quantity.innerHTML > 0) {
      quantity.innerHTML--;
      total.innerHTML = parseInt(total.innerHTML) - parseInt(price);
    } else {
      alert("il faut étre supérieur a 0");
    }
  });
  //heart
  var hearts = document.querySelectorAll(".heart");
  console.log(hearts);
  for (let heart of hearts) {
    heart.addEventListener("click", function () {
      if (heart.getAttribute("fill") == "grey") {
        heart.setAttribute("fill", "red");
      } else heart.setAttribute("fill", "grey");
    });
  }


}

let deletes= document.getElementsByClassName("delete-btn")


for ( let del of deletes){


  del.addEventListener('click', function(){


    del.parentElement.parentElement.remove()
  })
}

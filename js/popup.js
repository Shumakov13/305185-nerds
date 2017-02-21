var link = document.querySelector(".feedback");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");

link.addEventListener("click", function (Event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
});

close.addEventListener("click", function (Event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});
                      
              
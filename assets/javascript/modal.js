const buyBtns = document.querySelectorAll(
  " .js-buy-ticket"
); /* Lấy hết tất cả thg nào có class là ""  nếu là id thì xài #*/
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-close");
const modalContainer = document.querySelector(".js-modal-container");

//Hàm hiển thị modal mua vé (thêm class open vào modal)
function ShowBuyTickets() {
  modal.classList.add("open");
}
// Hàm ẩn modal mua vé (gỡ bỏ class open vào modal)
function hidebarticket() {
  modal.classList.remove("open");
}
//Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
  /*Vòng lặp này để có thể truy cập vào từng phần tử của thg buyBtns để thực hiện  : */
  buyBtn.addEventListener(
    "click",
    ShowBuyTickets
  ); /*Lắng nghe sự kiện click rồi chạy hàm ShowbuyTicket*/
}
// Nghe hành vi click vào button close
modalClose.addEventListener("click", hidebarticket);
modal.addEventListener("click", hidebarticket);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});


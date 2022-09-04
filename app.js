//Gắn sẵn nếu select 1 thằng dùng $ tất cả dùng $$
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
/* console.log([tabActive]) */
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const tabActive = $(".tab-item.active");
const line = $(".tabs .line");
line.style.left = tabActive.offsetLeft + "px"; //Vị trí cách bên trái
line.style.width = tabActive.offsetWidth + "px";
tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
    line.style.left = tab.offsetLeft + "px";
    line.style.width = tab.offsetWidth + "px";
    this.classList.add("active");
    pane.classList.add("active");
  };
});

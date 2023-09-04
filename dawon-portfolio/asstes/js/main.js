// 메뉴바 언더바 막대
let horizontalUnderLine = document.getElementById("underbar");
let horizontalMenus = document.querySelectorAll("nav a");

horizontalMenus.forEach(menu => menu.addEventListener("click",(e)=>horizontalIndicator(e)));
function horizontalIndicator(e) {
    horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderLine.style.top = 
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

// skill별 그래프 표시
$(".skill-progressbar-html").rProgressbar({
    percentage: 85,
    fillBackgroundColor: "#00c6bf",
    height: "20px"
});

$(".skill-progressbar-css").rProgressbar({
    percentage: 80,
    fillBackgroundColor: "#00c6bf",
    height: "20px"
});

$(".skill-progressbar-javascript").rProgressbar({
    percentage: 70,
    fillBackgroundColor: "#00c6bf",
    height: "20px"
});

$(".skill-progressbar-photoshop").rProgressbar({
    percentage: 90,
    fillBackgroundColor: "#00c6bf",
    height: "20px"
});


// 플러그인 가동을 위한 js
new Filterizr(".portfolio-gallery", {
    // 아이템 하나를 의미하는 선택자
    gridItemsSelector: ".portfolio-item",
    // 각 아이템의 크기가 동일하게 설정
    layout: "sameSize",
    // 각 아이템간의 간격(px)
    gutterPixels: 10,
});


// // 클릭시 색상 변경
// var div2 = document.getElementsByClassName("button");

// function handleClick(event) {
//   console.log(event.target);
//   // console.log(this);
//   // 콘솔창을 보면 둘다 동일한 값이 나온다

//   console.log(event.target.classList);

//   if (event.target.classList[1] === "clicked") {
//     event.target.classList.remove("clicked");
//   } else {
//     for (var i = 0; i < div2.length; i++) {
//       div2[i].classList.remove("clicked");
//     }

//     event.target.classList.add("clicked");
//   }
// }

// function init() {
//   for (var i = 0; i < div2.length; i++) {
//     div2[i].addEventListener("click", handleClick);
//   }
// }

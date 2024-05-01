document.addEventListener("DOMContentLoaded", function(event) {
    var searchBox = document.getElementById("searchBox");

    // 鼠标进入搜索框区域时显示搜索框
    searchBox.addEventListener("mouseenter", function() {
        searchBox.style.height = "40px";
    });

    // 鼠标离开搜索框区域时隐藏搜索框
    searchBox.addEventListener("mouseleave", function() {
        searchBox.style.height = "0";
    });
});

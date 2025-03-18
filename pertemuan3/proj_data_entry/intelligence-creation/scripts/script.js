function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginLeft = "20px";
    } else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "270px";
    }
}

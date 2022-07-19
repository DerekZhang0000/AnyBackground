function main() {
    if (document.getElementsByClassName("AppImageAnimatedDom__element AppImageAnimatedDom__element--image AppImageAnimatedDom__element--in").length == 0) {
        window.setTimeout(function() {main()}, 100);
    }
    else {
        document.getElementsByClassName("AppImageAnimatedDom__element AppImageAnimatedDom__element--image AppImageAnimatedDom__element--in")[0].srcset = "https://wallpapercave.com/wp/nCbzF9K.jpg";
        document.getElementsByClassName("TasksAgendaRoute")[0].style.opacity = ".8";
        document.getElementsByClassName("CardScrollView CardScrollView--animatedIn")[1].remove();
        document.getElementsByClassName("AppSidebar AppSidebar--isOpen")[0].remove();
        document.getElementsByClassName("AppHeader__controls")[0].remove();
        document.getElementsByClassName("TasksToolBar__nav")[0].remove();
        document.getElementsByClassName("TasksToolBar__separator")[0].remove();
        document.getElementsByClassName("TasksToolBar__title")[0].remove();
    }
}
main();
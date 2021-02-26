function addBox(n) {
    let theBox = '<div class="col col-xs-' + n + ' theBox"></div>';
    var wrapper = document.getElementById("wrapper");
    wrapper.
    innerHTML = wrapper.innerHTML + theBox;
}
function open_modal(){
    var modal = document.getElementsByClassName("modal")
    console.log(modal)
    modal[0].className = "modal open"
}

function close_modal(){
    var modal = document.getElementsByClassName("modal open")
    console.log(modal)
    modal[0].className = "modal"
}

var header = document.getElementById('header');
console.log(header)
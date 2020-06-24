let homeContent = document.querySelector('.homeContent')

homeContent.addEventListener('click', saveData, false)

window.onload = function () {
    document.querySelector('.loaderBack').style.opacity = 0;
    if (document.querySelector('.loaderBack').style.opacity == '0') {
        document.querySelector('.loaderBack').setAttribute('id', 'disappear');
    }
}
windowH()

//homeWrap遮罩符合視窗大小
function windowH() {
    if (window.innerHeight < 600) {
        document.querySelector('.homeWrap').style.height = "600px";
    } else {
        document.querySelector('.homeWrap').style.height = window.innerHeight + "px";
    }
}

window.onresize = function () {
    if (window.innerHeight < 600) {
        return
    } else {
        document.querySelector('.homeWrap').style.height = window.innerHeight + "px";
    }
}

//點擊房型 儲存點擊資料
function saveData(e) {
    localStorage.setItem("roomId", JSON.stringify(e.target.id));
}

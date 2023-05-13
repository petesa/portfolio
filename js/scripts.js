const pageNum = 3;
const content = document.querySelector('.content');
var page = Math.floor(Math.random() * pageNum);
var height = window.innerHeight;

window.addEventListener('resize', adjustHeight)
document.querySelector('.prev').addEventListener('click', goToPrev);
document.querySelector('.next').addEventListener('click', goToNext);
document.querySelector('.intro').addEventListener('click', gotoAbout)

updatePage();

function adjustHeight() {
    height = window.innerHeight;
}

function goToPrev(event) {
    event.preventDefault();
    if (page > 0) {
        page -= 1;
    } else {
        page = pageNum - 1;
    }
    updatePage();
}

function goToNext(event) {
    event.preventDefault();
    if (page < pageNum - 1) {
        page += 1;
    } else {
        page = 0;
    }
    updatePage();
}

function gotoAbout() {
    page = pageNum + 1;
    updatePage();
}

function updatePage() {
    content.scrollTo(0, page * height);
}
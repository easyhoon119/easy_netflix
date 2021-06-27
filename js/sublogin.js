function getToken() {
    return window.localStorage.getItem('token');
}

function bindProfileBtn(token) {
    const icon3 = document.querySelector('.icon3');
    icon3.addEventListener('click', () => {
        localStorage.setItem('token', token + '/jihoon');
        window.location.href = '../index.html';
    });
}

function homeBtn() {
    let home = document.querySelector('.main_logo');
    home.addEventListener('click', () => {
        window.location.reload();
    });
}

window.onload = function () {
    //토큰 체크
    const token = getToken();
    if (token === null) {
        window.location.href = '../login.html';
        return;
    }
    //hover 이벤트 구현
    let profile = document.querySelectorAll('.hover');
    profile.forEach(element => {
        element.addEventListener('mouseenter', (event) => {
            console.log(event.target.childNodes);
            event.target.childNodes[1].style.border = '1.5px solid white';
            event.target.childNodes[3].style.fontWeight = '650';
            event.target.childNodes[3].style.color = 'white';
        });

        element.addEventListener('mouseleave', (event) => {
            event.target.childNodes[1].style.border = 'none';
            event.target.childNodes[3].style.fontWeight = '400';
            event.target.childNodes[3].style.color = '#5e5e5e';
        });
    });
    //버튼 연결
    bindProfileBtn(token);
    //홈 버튼 클릭 구현
    homeBtn();
};
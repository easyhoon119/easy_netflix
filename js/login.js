function login(event) {
    event.preventDefault();
    event.stopPropagation();

    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    let e_val = email.value;
    let p_val = password.value;

    console.log(e_val);
    if (e_val === 'easyhoon119@naver.com' && p_val == '1234') {
        const token = '1q2w3e4r!';
        localStorage.setItem('token', token);
        location.href = './sublogin.html';
    }
    else {
        alert('사용자가 존재하지 않습니다.');
    }
}

function getTokenLogin() {
    const form = document.querySelector('#main_login');
    form.addEventListener('submit', login);
}

function homeBtn() {
    let home = document.querySelector('.main_logo');
    home.addEventListener('click', () => {
        window.location.reload();
    });
}

window.onload = function () {
    localStorage.clear();
    //로그인 정보가 일치 하는지 확인 후 토큰 저장
    getTokenLogin();
    //홈 화면 버튼 구현
    homeBtn();
};
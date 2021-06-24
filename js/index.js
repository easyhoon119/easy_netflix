function addList() {
    let list = [['Run On', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZzdNnoG93Vq6T7blIphj4jZ86XS3m3ZHwGhtwCJaBvy7w-iuhnGUAMdPIJPx0WOvuJz9Hpnk7y5_utiHlwSZliuCrc.webp?r=77f'],
    ['이구역의 미친x', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcM0eqeI_KHzW9niYOvw2YIIX1z8FJvCqupJzeRIHCfBLE_zxYMZY3u3pF_cdWqwB8ZMPUI9HxZpBIrn3HNbMFdZv8hmTPwRM1Hq_7nRSD9-Gywmh4O4HOP2XVSgSBoZWpxCEMVdnTaNAgCo6AFVc-LKC-BuaDH0tw_xrtQaQJa7I8YvGc4sfOVG8rOG.webp?r=6f5'],
    ['쿠로코의 농구', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbFFIT36JwEl6U8BN21KrET2I7jtvAVHFV2sRWy74PTOez-6JZrUruxCQTw3dpe7lA30P5barWepvjA6A2FObAbgv28.webp?r=d98'],
    ['암살 교실', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVQFxJkf5yOwDfSppgc5YqFA8mFH3cBj4t5PhTeag2LykV0a2qpR482xmdEBzAbd3UwzT_qj5-Wut-812VjQFI5Ensk.webp?r=ffd'],
    ['로스쿨', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVgZVbvP3GLkBQuYCKXhpY6ExdybZsHVDnElr3Wyo8azxlIChIOb6NN0rVW47tjClXDd_V0JhAXd2piE3hSanEwWiI4VUzZdA-BJ91z9ZIeJW04I5_J2wcUF8U4VtkeiNg.webp?r=08d'],
    ['국가부도의 날', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTOX5KFKrWgovrFPrRTqstMVOvo-vrml_ISPFc8b9TYKXcU8tVWbNajpllEpfXfglrgAC9vm-qrFKA1AdqviXqCTQAs.webp?r=f11'],
    ['선배 그 립스틱 바르지 마요', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfQvKA6i3xUWGGfTGZhdt81mPnHbagEkIrofL-OKuHUUdZuBcH-Q6Kq6bG91Har-liismMXxBIzRwnV0V8SXrmz3GJU.webp?r=69b']];

    let list_kor = [['알고 있지만', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW3ETp3kOTb_LYmZG79hDmiEh3peHS8kWbAsj7z91qYVX6-6i4P7ijjBvRVORMw9zv7I86DzaIsqz_6oIIbo8AnEcnaDhs1YlHgcqNT-gyeHPCmdjzeLee0UAj16He_LEE9nxgK0asiKbb9xhiWMhSs-094YCjx3oXDtzn-ZrlgXpCpuEfFpj5d93eMV.webp?r=e06'],
    ['무브 투 헤븐', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfKCoxB0kw9imN7gtZG__BBGxryo3fjVpByvfnOdBK4CDhfDRrHVrqpbruNjAL5YF8H-4glU4Jlb-GxoNwDHXCsdhPIOjPuM4Rv1mH8NFfd2zzlYcxq65PoL1YjoK-b09x9K_R7o0JIz5bHUT5OeJiflTJ4Dm0K4FvBPVhZhr0_YE4rZ4NxkHFc.jpg?r=f31'],
    ['뽕숭아 학당', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZBx3u-_aSLzxU3uuMD57_TuQQxkARTqwd7BPZwD3d-jY37728TX8Rh7bUqIpp4IsnWYNPry6RWSgg-EfrGYioA9cVq1P7EPGuFDKAvJXrBM-A0c3zJSC02f-ykLxp9yOA.webp?r=6fb'],
    ['내일 지구가 망해버렸으면 좋겠어', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa9diV550oN1jZlf5QyFePLFpv2RYNfaj7hCdiSHlhSOmInHJWKnY68QxsdEwhgYuesuPDiI9WmCpjGpIW5PugqpZhOybNrqo_CCcoito5p8c8bfEpzlvCn8p32-9pNosOhrTgjq43P81QT93aOO-GI02IiS5Hv7UBZCJytbok33rfvJz9MJhOU.jpg?r=015'],
    ['라켓 소년단', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZJivj0P6_xhBqvdchAUnKbDZZDy6LXLAQuxulwtJe1cahgRtxt8iZR3xevO4Ql8jkndCBZwoIhHHmPPBrVzj7ef3GFqRo_cJOSgrZFG2z55UBdsi7GEqbtZXt2gQuHRSQ.webp?r=3d1'],
    ['마인', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbp2ELN4reATPUQ6rhNK_VFynib-WrhQ4Z17O65wOq3eB41WM0Gx4plPPNGPY0WqvaJ521fLf41PH950cinO35azfsdnA8JjFuovSPPVYMq0nfACKYPxpgESGKRkx3Eqk1uVoSeCBIzzi_yqSdP03iDbO-N40KPFEsTRIT2sIjMS_QV6HsyQq3of3LxS.webp?r=d75'],
    ['나의 아저씨', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABab39TGFZ8HVjv4NZ3I9LeI4V0J53ORNevmoYkvqrd9B57HPGhRr6_tjU8wki24b9VUWKqAB6RRUesQ4uIO-9kskIys.webp?r=a6c'],
    ['18 어게인', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUkoVoAiF1gO3GirtvHlwVNYGXo0QSjj6HeWtvmspY17Wc03x3yaqeb6SGioT4iKXwFd1qlgv0If3qBDcqAgng_tzDU.webp?r=be3']];

    let list_only = [['투 핫', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABV1N6uqK1pqLhex6yA2rupxxYZR448aIa8-OLj4rDzbcHgZCZobPAEycSvsB3gMXl7VyAhliRiSrTpFtX-9gXYaxnji-88aH4NF_TdbdR32iZt78zMSbVcpZLn4YpWrci5jzmZC7TbLv4dtxGzcAWGFXsyO8vApGLT91fywRhxw7xzXhfATMsqh6nJH5nfGK55q2wfzl.webp?r=540'],
    ['내일 지구가 망해버렸으면 좋겠다', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABfgzVfyB2pri2rWHMxOcPVs9isV56cEX4R01L-Og55TLecfiUeoqOD5Udmn_zEMlK6EmnxGaVLL_y5EUCwpcSAUO3EqFyzV1sga0Yn7sShpP8mSHOxMkJ1CKRh-g96g14j5PVwx9XQHR5tgS6stF7qUNGxnaBqP8Sa-IvKcXQbCXgSUhpqDOCqfKRrqd23RQItyKo49bgA7Ip3LlK_o4vOMfxJJsf0S0-LEZg162n3I6t2kYREjHd7fOmnLBiBgjSh8.webp?r=219'],
    ['무브 투 헤븐', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABQcQ8l9BJUygegjtBUktJrZSz1h8L0_F7m4mI5hnJaV-bNZHa99a5JPghGVN2u_U9-5xC6ldbKuTVQErMC0C3F9qMCZ9pWwn1uidc5VuUrXGYG-GB60Cvb_UMNglKojzftuvSX14meLmAm6lCS02ThueEsS0p7klYyCoN2iHu4jPdLZ6do7qdPWKuidyQJAUJFL-VJvBdhzyyUB9H8zTjpyhA6lJBho1rX1BIA3FFOSsMfQ14GcV7Ywu97NPn_9aqmE.webp?r=3d9'],
    ['그녀의 이름은 노노', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABXnE3oCuXQc2hoWJ2fK6_Izium_uDm8LTVWNct_M-XPTvkhoR1A5wG2PinKHIWlDdjW8KWnbvSTKlCxQ9id5NGmySCbToQhk9Ko4cisCMoj-RrBetsxrIYmNVIi9B-blOrAdttOQ-bEgdHSkng6iMiFMdir0qoN33Hi_NSxV-1NaSGis8pBEQR3u_tNl-44QMuyIA8z0dTVMLHJunBPVkqysiDXjtYPz8QiVpTarSvat0nDIfqXKEY1c_luvlTKaHJ0.webp?r=218'],
    ['스위트 홈', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABWx8jMD9bfeWu_vJsXHN_jfDzYkMTmQ6ChfPzkLxSFOWwd36DsaFl6J1Zx2PFyLZk13UUYygUBwFm0RcLxms0wapMW3spc2wZZxBrAW1XHLZtvOVG5RTJo_lnDcT5K5Y_IoUNQydrPjSoryvrzRa3sxOu4H2aNQMUMpdAmgDtTwc6TKA_DFXMQ6TquahGNaGz0bovJef.webp?r=55d'],
    ['새콤달콤', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABWx8jMD9bfeWu_vJsXHN_jfDzYkMTmQ6ChfPzkLxSFOWwd36DsaFl6J1Zx2PFyLZk13UUYygUBwFm0RcLxms0wapMW3spc2wZZxBrAW1XHLZtvOVG5RTJo_lnDcT5K5Y_IoUNQydrPjSoryvrzRa3sxOu4H2aNQMUMpdAmgDtTwc6TKA_DFXMQ6TquahGNaGz0bovJef.webp?r=55d'],
    ['좋아하면 울리는', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABeVGb5mrvrs4ZzA2sEOATRC1D58fiG2SOZJhZV-LtbiR1bZk6TujMPXNO8MSIweHgP5NZ-QTz3xwKt5W-NheYTD07ay2X6nZCYoOSua1LiAD4RkDvb_-ONrQN-VaGsqZ-nVvu_B4vcHE4DBYW81DnBMPNLmoMy3AVtZkOIpeTQXBARjRkNFBr1YyO5MNyP138iDTaZJO.webp?r=00b'],
    ['엘리트 들', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABa6FWrsgvwLjEtCdTC2TMc9xPdQl3M5uQpDnLGr1jb2loOUagylVoqHFcr1yq8FmiMPPTUvzMvLVRBjo5waPT9R446qWfM8_9b14jCMO0z1wG0UG30kbXCApYvwfzU_oICbCSyWIcr6hjC_bIkTIOaxyqIT25dQrOKyO_PmJp-VzqACC5YBuatM0wGeEgr50tMl-dgJHOcZk6hFnD3XxfwOiikOKdegzblM-nTxY-g.webp?r=b65']];


    let list_ranking = [['마인', 'free-icon-1-3564180', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeJS0OPjiWN7rEmnKMxeUV_ao2eDIW7JOKpTXdEZ1ox39fHU2xqA2khG5G6drBiCaUNW7_EHCc2PFT4EykbYcHhlo31OXnWXsEWGw9p9_EoByb8J26Cm6KFyzIOr2f19hxHo63MEUdT8-Q.jpg?r=f25'],
    ['이 구역의 미친년', 'free-icon-2-3564186', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSMndg5x5A5l2PxtF8XE0uKcbmP9ZQmcKdfluVPC57O3Cj9ly8cYqIZekuNhWxvN9y1f1z2_goyFDQu4bzzdzaNEswDCIMS5bqayUGWDAy1RRASTZnZy7l-q7-fIBMkJNrQ.webp?r=fc2'],
    ['슬기로운 의사생활+', 'free-icon-3-3564189', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbRHSboQgJ71QdbBb5V7ckLtlpbESoxjKhmFoxrPlfcl6tVJ-FV0pwhM7JG-AUBAcnNtO_qz7QrHINA_Oh6PGAYpG5qHNtRVamXqhWwmgIBr2Nw8VqTYBJfIsKlORflDCHGQzE6ol2XHkA.jpg?r=e1d'],
    ['알고있지만', 'free-icon-4-3564198', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABW63CbAEvgjNj5NPw5dtUbNDgOVxtgq-1shDN5Y2cSFJtYnN4u58oIdUW1O6XNnDqTEYXOUEWYA4rtXTDfz-kwhmfBf1QQxw9MS5eRgJLRPMpQsimX0JeyaBZwksO1qIfVmNiJLp_Kz84g.webp?r=19d'],
    ['결혼작사 이혼 작곡', 'free-icon-5-3564205', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZzkhURmI2Nd7EcI363gdEvDg-5FjQfU0hf-J4mWNUSEhf77MPmdADAE-EyHlNc2rPXMu0OyzlZC0EH9I2d_fDqjqbltE6Y1pKTOA6YcyYU5HYGDKH_SZ9ryuyRr81FNhfNxzChJs1_rjA.webp?r=678'],
    ['내일 지구가 망해버렸으면 좋겠다', 'free-icon-6-3564211', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeBq5tEwE8-MKPOuyS1B2njnvjw-7DyEhNL5TEKDhJRTyBmOi4-KNQv-W42rxS_OQZoSOl5pEG-Zy6Kk_GWgDGhKw3tHyzcgB_EvTdqreOgNGCZZojCqAMiSrKfbwQ.jpg?r=459']];

    let container = document.querySelector('.user_container');
    for (let i = 0; i < list.length; i++) {
        container.innerHTML += `<div class="user_movie"><img src="${list[i][1]}" alt="${list[i][0]}"/></div>`;
    }

    let container_kor = document.querySelector('.kor_container');
    for (let i = 0; i < list_kor.length; i++) {
        container_kor.innerHTML += `<div class="user_movie"><img src="${list_kor[i][1]}" alt="${list_kor[i][0]}"/></div>`;
    }

    let container_hot = document.querySelector('.hot_container');
    for (let i = list_kor.length - 1; i >= 0; i--) {
        container_hot.innerHTML += `<div class="user_movie"><img src="${list_kor[i][1]}" alt="${list_kor[i][0]}"/></div>`;
    }

    let container_only = document.querySelector('.only_container');
    for (let i = 0; i < list_only.length; i++) {
        container_only.innerHTML += `<div class="only_movie"><img src="${list_only[i][1]}" alt="${list_only[i][0]}"/></div>`;
    }

    let container_replay = document.querySelector('.replay_container');
    for (let i = 0; i < list_kor.length; i++) {
        container_replay.innerHTML += `<div class="user_movie"><img src="${list_kor[i][1]}" alt="${list_kor[i][0]}"/></div>`;
    }

    let container_korjam = document.querySelector('.korjam_container');
    for (let i = list_kor.length - 1; i >= 0; i--) {
        container_korjam.innerHTML += `<div class="user_movie"><img src="${list_kor[i][1]}" alt="${list_kor[i][0]}"/></div>`;
    }

    let container_ani = document.querySelector('.ani_container');
    for (let i = 0; i < list_kor.length; i++) {
        container_ani.innerHTML += `<div class="user_movie"><img src="${list_kor[i][1]}" alt="${list_kor[i][0]}"/></div>`;
    }

    let container_komovie = document.querySelector('.komovie_container');
    for (let i = list_kor.length - 1; i >= 0; i--) {
        container_komovie.innerHTML += `<div class="user_movie"><img src="${list_kor[i][1]}" alt="${list_kor[i][0]}"/></div>`;
    }

    let container_rank = document.querySelector('.ranking_container');
    for (let i = 0; i < list_ranking.length; i++) {
        container_rank.innerHTML += `<div class="show_ranking"><img src="./${list_ranking[i][1]}.png" alt="1등" class="rank"><img src="${list_ranking[i][2]}" alt="${list_ranking[i][0]}" class="rank_poster"></div>`;
    }
}

function changeNavbar() {
    let navBar = document.querySelector('header');
    let pos = navBar.getBoundingClientRect();
    // console.log(pos.top + window.pageYOffset);
    if (pos.top + window.pageYOffset > 0) {
        navBar.style.backgroundColor = '#141414';
    }
    else {
        navBar.style.backgroundColor = '';
    }
}

function yegoPlay() {
    let yego_video = document.querySelector('.yego_video');
    let play_btn = document.querySelector('.fa-play-circle');

    play_btn.addEventListener('click', () => {
        yego_video.play();
    });
}

function updateWidth(slideWidth, slides, slide) {
    let currentSlides = slide;
    let newSlideCount = currentSlides.length - 1;
    let newWidth = slideWidth * newSlideCount + 'px';
    slides.style.width = newWidth;
    return newSlideCount;
}

function setInitialPos(slideWidth, slideCount, slides) {
    let initialPos = -(slideWidth) * (slideCount - 1);
    slides.style.transform = `translate(${initialPos}px)`;
}

function fade() {
    setTimeout(() => {
        let list_control1 = document.querySelectorAll('.before');
        let list_control2 = document.querySelectorAll('.next');
        list_control1.forEach(element => {
            element.style.display = 'none';
        });
        list_control2.forEach(element => {
            element.style.display = 'none';
        });
    }, 3000);
}

function moveslider(num, slides, slidewidth, slideCount, e) {
    slides.style.transform = `translate(${-num * slidewidth - (slidewidth) * (slideCount - 1)}px)`;
    e.target.currentIndex = num;
    console.log(num, slideCount);
    if (num == e.target.slideCount - 1 || num == -e.target.slideCount) {
        setTimeout(() => {
            console.log(slides);
            slides.classList.remove('animate');
            slides.style.transform = `translate(${-(slidewidth) * (e.target.slideCount - 1)}px)`;
            e.target.currentIndex = 0;
        }, 500);
        setTimeout(() => {
            slides.classList.add('animate');
        }, 600);
    }
}

window.onload = function () {
    // 리스트에 정보 받아오기
    addList();
    // 내브바 스크롤시 배경 바꾸기
    document.addEventListener('scroll', changeNavbar)
    // 예고편 재생 버튼 연결
    yegoPlay();
    //리스트 슬라이드 기능 구현하기
    let list_inner = document.querySelectorAll('.hover_container');
    for (let i = 0; i < list_inner.length; i++) {
        list_inner[i].addEventListener('mouseenter', (event) => {
            let list_control = event.target.nextSibling.nextSibling;
            list_control.style.display = 'flex';
        });
        // list_inner[i].addEventListener('mouseout', fade);
    }

    let next = document.querySelectorAll('.next');
    next.forEach(element => {
        element.count = 0;
        element.currentIndex = 0;
        element.addEventListener('click', (event) => {
            event.target.previousSibling.previousSibling.removeEventListener('mouseout', fade);
            event.target.nextSibling.nextSibling.style.display = 'flex';
            let slides = event.target.previousSibling.previousSibling;
            let slide = slides.childNodes;
            let slide__cpy = [...slide];
            let slideWidth = slide[1].offsetWidth;
            let prev = event.target.nextSibling.nextSibling;
            let next = event.target;
            // console.log(event.target.count);
            if (event.target.count === 0) {
                event.target.slideCount = slide.length;
                let slideCount = event.target.slideCount;
                for (let i = 1; i < slideCount; i++) {
                    let cloneSlide = slide__cpy[i].cloneNode(true);
                    cloneSlide.classList.add('clone');
                    slides.appendChild(cloneSlide);
                }
                // console.log(slideCount);
                for (let i = slideCount - 1; i >= 1; i--) {
                    let cloneSlide = slide__cpy[i].cloneNode(true);
                    cloneSlide.classList.add('clone2');
                    slides.prepend(cloneSlide);
                }
                let newSlideCount = updateWidth(slideWidth, slides, slide);
                setInitialPos(slideWidth, event.target.slideCount, slides);
                setInterval(() => {
                    slides.classList.add('animate');
                }, 100);
                event.target.count += 1;
            }
            else {
                moveslider(num = event.target.currentIndex + 1, slides, slideWidth, event.target.slideCount, event);
            }
        });
    });
}

// // 1.필요변수 선언
// let slides = document.querySelector('.slides');
// let slide = document.querySelectorAll('.slides .user_movie');
// let currentIndex = 0;
// let slideCount = slide.length;
// let slideWidth = 236;
// let prev = document.querySelector('.before');
// let next = document.querySelector('.next');
// // 2. 복제본만들기
// for (let i = 0; i < slideCount; i++) {
//     let cloneSlide = slide[i].cloneNode(true);
//     cloneSlide.classList.add('clone');
//     slides.appendChild(cloneSlide);
// }

// for (let i = slideCount - 1; i >= 0; i--) {
//     let cloneSlide = slide[i].cloneNode(true);
//     cloneSlide.classList.add('clone');
//     slides.prepend(cloneSlide);
// }

// // for (let i = slideCount - 1; i >= 0; i--) {
// //     let cloneSlide = slide[i].cloneNode(true);
// //     cloneSlide.classList.add('clone');
// //     slides.prepend(cloneSlide);
// // }
// // 3. 한 블럭의 넓이 구하기
// let newSlideCount = updateWidth(slideWidth, slides);
// // 4. 중앙으로 위치 옮기기
// setInitialPos(slideWidth, slideCount, slides);
// setInterval(() => {
//     slides.classList.add('animate');
// }, 100);
// // 5. 좌우버튼 클릭
// next.addEventListener('click', (e, num = currentIndex + 1) => {
//     slides.style.transform = `translate(${-num * slideWidth - (slideWidth) * slideCount}px)`;
//     currentIndex = num;
//     console.log(num, newSlideCount, currentIndex);
//     if (num == slideCount) {
//         setTimeout(() => {
//             slides.classList.remove('animate');
//             slides.style.transform = `translate(${-(slideWidth) * slideCount}px)`;
//             currentIndex = 0;
//         }, 500);
//         setTimeout(() => {
//             slides.classList.add('animate');
//         }, 600);
//     }
// });

// prev.addEventListener('click', (e, num = currentIndex - 1) => {
//     slides.style.transform = `translate(${-num * slideWidth - (slideWidth) * slideCount}px)`;
//     currentIndex = num;
//     console.log(num, newSlideCount, currentIndex);
//     if (num == -slideCount) {
//         setTimeout(() => {
//             slides.classList.remove('animate');
//             slides.style.transform = `translate(${-(slideWidth) * slideCount}px)`;
//             currentIndex = 0;
//         }, 500);
//         setTimeout(() => {
//             slides.classList.add('animate');
//         }, 600);
//     }
// });
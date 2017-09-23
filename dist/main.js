'use strict';

/**
 * Created by LiH on 2017/9/9.
 */
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: false,
        height: window.innerHeight,

        // If we need pagination
        pagination: '.swiper-pagination',
        paginationClickable: false
    });

    var goElm = document.querySelector('#go');
    var notGoElm = document.querySelector('#notGo');

    goElm.onclick = function () {
        sendMessage(true);
    };
    notGoElm.onclick = function () {
        sendMessage(false);
    };

    function sendMessage(go) {
        var name = prompt("您的名字是：");
        if (name && go) {
            location.href = 'sms:‭18311139526' + '&body=亲爱的硕硕和牟牟,我是你们的好朋友' + name + ',10月5号我会准时参加你们的婚礼,爱你们哦,婚礼那天见！';
        } else if (name) {
            location.href = 'sms:‭18311139526' + '&body=亲爱的硕硕和牟牟,我是你们的好朋友' + name + ',很遗憾10月5号那天不能亲自到场见证你们的幸福,但还是祝福你们,新婚快乐,爱你们哟';
        }
    }
});

window.addEventListener('load', function () {
    document.querySelector('.swiper-container').style.opacity = 1;
});
//# sourceMappingURL=main.js.map
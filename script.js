// 半点科技首页横幅轮播（极简版）
(function () {
    var slides = document.querySelectorAll('#slider .slide');
    var dotsBox = document.getElementById('dots');
    if (!slides.length) return;
    var cur = 0, timer;

    // 生成小圆点
    slides.forEach(function (_, i) {
        var d = document.createElement('span');
        if (i === 0) d.className = 'on';
        d.onclick = function () { show(i); restart(); };
        dotsBox.appendChild(d);
    });
    var dots = dotsBox.children;

    function show(n) {
        slides[cur].classList.remove('active');
        dots[cur].classList.remove('on');
        cur = (n + slides.length) % slides.length;
        slides[cur].classList.add('active');
        dots[cur].classList.add('on');
    }
    function restart() {
        clearInterval(timer);
        timer = setInterval(function () { show(cur + 1); }, 4000);  // 每4秒切换
    }
    slides[0].classList.add('active');
    restart();
})();

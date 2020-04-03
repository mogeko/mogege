
var _Blog = _Blog || {};

// Dark Mode
_Blog.switchDarkMode = function() {
    var currentTheme = document.cookie.replace(/(?:(?:^|.*;\s*)dark\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
    var isDark = currentTheme === '1';
    if (currentTheme == '0') {
        document.body.classList.remove('dark-theme');
    } else if(currentTheme == '1') {
        document.body.classList.add('dark-theme');
    }
    // 手动切换 Dark Mode
    var themeSwitch = document.querySelectorAll('.theme-switch') || isDark;
    themeSwitch.forEach(function(themeSwitchItem) {
        themeSwitchItem.addEventListener('click', () => {
            var currentTheme = document.cookie.replace(/(?:(?:^|.*;\s*)dark\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
            if (currentTheme == '0') {
                document.body.classList.add('dark-theme');
                document.cookie = "dark=1;path=/";
                console.log('Dark mode on');
            } else {
                document.body.classList.remove('dark-theme');
                document.cookie = "dark=0;path=/";
                console.log('Dark mode off');
            }
        });
    });
}

// 顶部阅读进度条
_Blog.scrollIndicator = function () {
    var winHeight = window.innerHeight,
        docHeight = document.documentElement.scrollHeight,
        progressBar = document.querySelectorAll('.content_progress');
    progressBar.forEach(function(progressBarItem) {
        progressBarItem.max = docHeight - winHeight;
        progressBarItem.value = window.scrollY;
    });

    document.addEventListener('scroll', function () {
        progressBar.forEach(function(progressBarItem) {
            progressBarItem.value = window.scrollY;
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    _Blog.switchDarkMode();
    _Blog.scrollIndicator();
});

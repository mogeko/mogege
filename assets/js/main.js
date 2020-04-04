
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
    var themeSwitcher = document.querySelectorAll('.theme-switch') || isDark;
    themeSwitcher.forEach(function(themeSwitcherItem) {
        themeSwitcherItem.addEventListener('click', () => {
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

// 开关移动端菜单
_Blog.switchMobileMenu = function() {
    var menuSwitcher = document.querySelectorAll('.menu-toggle');
    var MobileMenu = document.querySelector('#mobile-menu');
    menuSwitcher.forEach(function(menuSwitcherItem) {
        menuSwitcherItem.addEventListener('click', () => {
            menuSwitcherItem.classList.toggle('active');
            MobileMenu.classList.toggle('active');
        })
    });
}

// 顶部阅读进度条
_Blog.scrollIndicator = function() {
    var winHeight = window.innerHeight,
        docHeight = document.documentElement.scrollHeight,
        progressBar = document.querySelectorAll('.content_progress');
    progressBar.forEach(function(progressBarItem) {
        progressBarItem.max = docHeight - winHeight;
        progressBarItem.value = window.scrollY;
    });

    document.addEventListener('scroll', function() {
        progressBar.forEach(function(progressBarItem) {
            progressBarItem.max = docHeight - winHeight;
            progressBarItem.value = window.scrollY;
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    _Blog.switchDarkMode();
    _Blog.switchMobileMenu();
    _Blog.scrollIndicator();
});

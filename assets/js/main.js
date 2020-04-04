
var _Blog = _Blog || {};

// Dark Mode
_Blog.switchDarkMode = function() {
    const currentTheme = document.cookie.replace(/(?:(?:^|.*;\s*)dark\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
    const isDark = currentTheme === '1';
    document.body.classList.toggle('dark-theme', isDark);
    // 手动切换 Dark Mode
    const themeSwitcher = document.querySelectorAll('.theme-switch');
    themeSwitcher.forEach(function(themeSwitcherItem) {
        themeSwitcherItem.addEventListener('click', () => {
            const currentTheme = document.cookie.replace(/(?:(?:^|.*;\s*)dark\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
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
    const menuSwitcher = document.querySelectorAll('.menu-toggle'),
          MobileMenu = document.querySelector('#mobile-menu');
    menuSwitcher.forEach(function(menuSwitcherItem) {
        menuSwitcherItem.addEventListener('click', () => {
            menuSwitcherItem.classList.toggle('active');
            MobileMenu.classList.toggle('active');
        });
    });
}

// 顶部阅读进度条
_Blog.scrollIndicator = function() {
    const winHeight = window.innerHeight,
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

// 在用户切换网页时改变浏览器标题
_Blog.changeTile = function() {
    let currentTile = document.title;
    window.onblur = function() {
        this.document.title = '别走啊，官人 _(:з」∠)_';
    }
    window.onfocus = function() {
        this.document.title = currentTile;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    _Blog.switchDarkMode();
    _Blog.switchMobileMenu();
    _Blog.scrollIndicator();
    _Blog.changeTile();
});

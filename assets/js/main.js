// Dark Mode
function switchDarkMode() {
  var night = document.cookie.replace(
                  /(?:(?:^|.*;\s*)dark\s*\=\s*([^;]*).*$)|^.*$/, "$1") ||
              '0';
  if (night == '0') {
    document.body.classList.add('dark-theme');
    document.cookie = "dark=1;path=/";
    console.log('Dark mode on');
  } else {
    document.body.classList.remove('dark-theme');
    document.cookie = "dark=0;path=/";
    console.log('Dark mode off');
  }
}

(function() {
var dark = document.cookie.replace(
               /(?:(?:^|.*;\s*)dark\s*\=\s*([^;]*).*$)|^.*$/, "$1") ||
           '0';
if (dark == '0') {
  document.body.classList.remove('dark-theme');
} else if (dark == '1') {
  document.body.classList.add('dark-theme');
}
})()

// 顶部阅读进度条
document.addEventListener('DOMContentLoaded', function() {
  var winHeight = window.innerHeight,
      docHeight = document.documentElement.scrollHeight,
      progressBar = document.querySelector('#content_progress');
  progressBar.max = docHeight - winHeight;
  progressBar.value = window.scrollY;

  document.addEventListener('scroll', function() {
    progressBar.max =
        document.documentElement.scrollHeight - window.innerHeight;
    progressBar.value = window.scrollY;
  });
});
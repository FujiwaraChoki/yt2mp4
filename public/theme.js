var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');


if (document.documentElement.getAttribute("data-theme") === "dark") {
    themeToggleDarkIcon.classList.remove('hidden');
}else{
    themeToggleLightIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
   
   themeToggleDarkIcon.classList.toggle('hidden');
   themeToggleLightIcon.classList.toggle('hidden');


    if (!themeToggleLightIcon.classList.contains("hidden")) {
        document.documentElement.setAttribute('data-theme','dark');
    }else{
        document.documentElement.setAttribute('data-theme','light');
    }

});
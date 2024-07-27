a = window.location.href;
a = a.split('.')
a[0] = "https://old"
a = a.join('.')
window.location.href = a

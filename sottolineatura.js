const links = document.querySelectorAll('.sottolineato')

links.forEach(link => {
link.addEventListener('mouseenter', function() {
this.classList.add('active')
setTimeout(() => {
this.classList.remove('active')
}, 200)
})
})
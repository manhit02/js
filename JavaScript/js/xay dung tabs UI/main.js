const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const lineOfSet = $('.tab-item.active')
const line = $('.tabs .line')
console.log(lineOfSet)
line.style.left = lineOfSet.offsetLeft + 'px'
line.style.width = lineOfSet.offsetWidth + 'px'


tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function() {

        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        pane.classList.add('active')
        this.classList.add('active')
    }
})
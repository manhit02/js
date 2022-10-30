const $ = document.querySelector.bind(document)
const $$ = document.querySelector.bind(document)

const successBtn = $('.btn--success')
const errorBtn = $('.btn--danger')
    // toast function
function toast({ title = '', message = '', type = info, duration = 3000 }) {
    const main = $('#toast')
    console.log("TCL: toast -> main", main)

    if (main) {
        const toast = document.createElement('div')
        toast.classList.add('toast', `toast--${type}`)
            // tu dong xoa toast
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast)
        }, duration + 1000);
        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            error: "fas fa-exclamation-circle"
        };
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
    <div class="toast__icon">
    <i class="${icon}"></i>
    </div>
    <div class="toast__body">
        <h3 class="toast__title">${title}</h3>
        <p class="toast__msg">${message}</p>
    </div>
    <div class="toast__close">
        <i class="fas fa-times"></i>
    </div>
`
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveId)
            }
        }
        main.appendChild(toast)

    }
}


successBtn.onclick = function() {
    toast({
        title: 'success',
        message: 'Thanh cong',
        type: 'success',
        duration: 3000
    })
}

errorBtn.onclick = function() {
    toast({
        title: 'error',
        message: 'That bai',
        type: 'error',
        duration: 3000
    })
}
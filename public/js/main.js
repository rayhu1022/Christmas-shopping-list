const giftComplete = document.querySelectorAll('span.not')

Array.from(giftComplete).forEach( (el) => {
    el.addEventListener('click', markComplete)
})

async function markComplete() {
    const giftId = this.parentNode.dataset.id
    try {
        const response = await fetch('xmas/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'giftIdFromJSFile': giftId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch(err) {
        console.log(err)
    }
}
const giftComplete = document.querySelectorAll('span.not')
const giftIncomplete = document.querySelectorAll('span.completed')
const giftDelete = document.querySelectorAll('.del')

Array.from(giftComplete).forEach( (el) => {
    el.addEventListener('click', markComplete)
})

Array.from(giftIncomplete).forEach( (el) => {
    el.addEventListener('click', markIncomplete)
})

Array.from(giftDelete).forEach( (el) => {
    el.addEventListener('click', deleteGift)
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

async function markIncomplete() {
    const giftId = this.parentNode.dataset.id
    try {
        const response = await fetch('xmas/markIncomplete', {
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

async function deleteGift() {
    const giftId = this.parentNode.dataset.id
    try {
        const response = await fetch('xmas/deleteGift', {
            method: 'delete',
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
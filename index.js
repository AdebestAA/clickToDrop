  let modal = document.querySelector('.modal')
    let here = document.querySelector('.here')
    let closeThis = document.querySelector('.close')
    console.log(closeThis);

    let body = document.querySelector('body')

    console.log(body);
    modal.addEventListener('click', () => {
        here.style.display = 'block'

    })

    closeThis.addEventListener('click', () => {
        here.style.display = 'none'
    })

    window.addEventListener('click', (event) => {
        if (event.target === body) {
            here.style.display = 'none'
            console.log('ade');
        }
    })

document.getElementById('btn-green').addEventListener('mouseout',
    function makeGreen() {
        document.body.style.backgroundColor = 'green'
    }
)

document.getElementById('login-btn')
    .addEventListener('click', function () {
        const text = document.getElementById('text-inp')
        text.innerText = 'User Found'
    })

document.getElementById('btn')
    .addEventListener('click', function () {
        const nameInput = document.getElementById('nameInput')
        const nameValue = nameInput.value
        const namePlate = document.getElementById('name')
        namePlate.innerText = nameValue
        nameInput.value = ''
    })



let input = document.querySelector('.entered-list')
let addBtn = document.querySelector('.add-list')
let tasks = document.querySelector('.tasks')

// adding event listener keyup

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
})


// add new item to list

addBtn.addEventListener('click', () => {
    if(input.value.trim() != 0){
        let newItem = document.createElement('div')
        newItem.classList.add('item')
        newItem.innerHTML = `
        <p>${input.value}</p>
<div class="item-btn">
    <i class="fa fa-pencil" aria-hidden="true"></i>
    <i class="fa fa-times-circle" aria-hidden="true"></i>
</div>
`
        tasks.appendChild(newItem)
        input.value = '';
    }else{
        alert('Enter a task please')
    }
})

// delete  item from list

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-times-circle')) {
        e.target.parentElement.parentElement.remove()
    } 
})

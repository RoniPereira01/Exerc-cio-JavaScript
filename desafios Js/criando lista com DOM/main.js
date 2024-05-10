function create(){
    const ul = document.getElementById('inputs')
    const newli = document.createElement('li')

    newli.className ='list-item'
    newli.innerHTML = 'Itens adicionado'

    const newInput = document.createElement('input')
    newInput.type= 'text'
    newInput.name= 'input'
    const br = document.createElement('br')

    newli.appendChild (br)

    newli.appendChild (newInput)

    ul.appendChild(newli)




}
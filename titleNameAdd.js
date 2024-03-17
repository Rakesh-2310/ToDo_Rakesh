let titleChangeBtn = document.getElementById('changebn');
let titleInput = document.getElementById('title-ch');
let titleStore = document.getElementById('boxheadertitle');

let title = "";
window.onload = () => {
    titleChange(JSON.parse(localStorage.getItem('title')) || [])
}

titleChangeBtn.addEventListener('click', () =>{
    let input = titleInput.value;
    title = input.toUpperCase();
    localStorage.setItem('title', JSON.stringify(title));
    let titleUpdate = titleChange(input);
})

function titleChange(input) {
    let count = input.length;
    if (count !=0){
        if (input.charAt(0) != "-" && input.charAt(1) != " "){
            titleStore.textContent ="ToDo - " + input.toUpperCase();
        }
        else{
            titleStore.textContent ="ToDo " + input.toUpperCase();
        }
        titleStore.style.fontWeight = "bold";
        titleStore.style.color ="inherit";
        titleStore.style.fontSize = "1.5rem";
        titleInput.value = "";
    }
}

titleStore.addEventListener("dblclick", ()=>{
    titleStore.textContent="ToDo";
    titleStore.style.fontWeight = 'bold';
    titleStore.style.color ="inherit";
    titleStore.style.fontSize = "2rem";
    title="";
    localStorage.setItem('title', JSON.stringify(title));
})
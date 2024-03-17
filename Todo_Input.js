let inputForm = document.getElementById('fortodo');
let inputButton = document.getElementById('addbn');
let todoListarray = [];
let todoprogressdata = [];
let finishBoolean = [];

document.addEventListener('DOMContentLoaded', () => {
    todoListarray = JSON.parse(localStorage.getItem('todoListarray')) || [];
    todoprogressdata = JSON.parse(localStorage.getItem('todoprogressdata')) || [];

    for(let arrayindex = 0; arrayindex< todoListarray.length; arrayindex++){
        let todoarrayinput = todoListarray[arrayindex];
        let inpStoreDivId = "inputstore"+(arrayindex+1);
        createdivcontainer((arrayindex+1),inpStoreDivId,todoarrayinput)
    }

    for(let arrayindex = 0; arrayindex< todoprogressdata.length; arrayindex++){
        let progressNo = todoprogressdata[arrayindex];
        let statusId = document.getElementById("progressbar"+(arrayindex+1));
        statusbar(statusId,progressNo,(arrayindex+1));
    }
});


inputButton.addEventListener('click', () => {
  const input = inputForm.value.trim();
  if (input !== "") {
    todoListarray.push(input);
    todoprogressdata.push(0);
    finishBoolean.push(0);
    localStorage.setItem('todoListarray', JSON.stringify(todoListarray));
    localStorage.setItem('todoprogressdata', JSON.stringify(todoprogressdata));
    localStorage.setItem('finishBoolean', JSON.stringify(finishBoolean));

    addTodo(input);
  }
  inputForm.value = "";
});

function createdivcontainer(todoCount,inputstoreDivId,input){

    if(parseInt(todoCount) != 0){
        document.getElementById('storagecon').style.display = "block";
      }
    
      const todoDiv = document.createElement('div');
      todoDiv.classList.add('inputstore');
      todoDiv.setAttribute("id", inputstoreDivId);
      todoDiv.innerHTML = `
          <ul class="inputstoretool">
              <li class="boxstore" id="siNo${todoCount}">${todoCount}</li>
              <li class="boxstore" id="todoContent">${input}</li>
              <li class="boxstore">
                  <div class="input-container">
                      <input type="number" class="number-input" id = "numberInput${todoCount}" min="0" max="100" value ="0" placeholder="Provide ToDo status" onchange="updateProgressBar(event)">
                      <div class="progress-bar" id = "progressbar${todoCount}"></div>
                  </div>
              </li>
              <li class="boxstore">
                  <ul class="actionlist">
                      <li class="actionbox">
                          <button class="actionboxbn" id = "finishButton${todoCount}" >
                            <img src="/finish.png" style="width:100%;height:100%;" id = "finishImg${todoCount}" onclick="finishAction(event)">
                          </button>
                      </li>
                      <li class="actionbox" id = "deleteButton${todoCount}">
                          <button class="actionboxbn">
                            <img src="/delete.png" style="width:30px;height:25px;"  id = "deleteImg${todoCount}" onclick="deleteAction(event)">
                          </button>
                      </li>
                  </ul>
              </li>
          </ul>
      `;
      document.getElementById('storagecon').appendChild(todoDiv);
    
}

function addTodo(input) {
  let todoCount = todoListarray.length;
  let inputstoreDivId = "inputstore"+todoCount;
  let valuetodos = input
  createdivcontainer(todoCount,inputstoreDivId,valuetodos)

}

function progressBarStyle(progressBar,progress) {

    progressBar.style.width = progress + '%';
  
    if (progress < 30) {
        progressBar.style.backgroundColor = 'red';
    } else if (progress < 75) {
        progressBar.style.backgroundColor = 'yellow';
    } else {
        progressBar.style.backgroundColor = 'green';
    }
}

function updateProgressBar(event) {
    const input = event.target;
    const inputIdNo = (input.getAttribute("id")).slice(11)
    todoprogressdata[parseInt(inputIdNo)-1] = input.value;
    localStorage.setItem('todoprogressdata', JSON.stringify(todoprogressdata));
    const progressId = "progressbar"+(input.getAttribute("id")).slice(11);
    const progressBar = document.getElementById(progressId);
  
    let progress = input.value.trim();
    if (progress < 0 || progress == "") {
        input.value = progress = 0;
    } 
    else if (progress > 100) {
        input.value = progress = 100;
    }

    statusbar(progressBar,progress,inputIdNo)
}

function statusbar(progressBar,progress,inputIdNo) {
    
    progressBarStyle(progressBar,progress)

    const finishId = "finishButton"+inputIdNo;
    const finishElement = document.getElementById(finishId);
    const indexNumber = document.getElementById(("siNo"+inputIdNo)).innerHTML;
    const inputStore = document.getElementById("inputstore"+inputIdNo);
    document.getElementById("numberInput"+inputIdNo).value = progress;

    if(progress == 100){
        finishElement.style.backgroundColor = "rgb(0, 138, 138)";
        finishElement.style.borderRadius = "10%";
        finishBoolean[indexNumber-1] = 1;
        inputStore.style.opacity = "0.5";
    }
    else{
        inputStore.style.opacity = "1";
        finishElement.style.background = "none";
        finishBoolean[indexNumber-1] = 0;
    }
}

function finishAction(event) {
    const finishImgId = event.target.getAttribute("id");
    const finishId = "finishButton"+finishImgId.slice(9);
    const finishElement = document.getElementById(finishId);
    const indexNumber = document.getElementById(("siNo"+finishImgId.slice(9))).innerHTML;

    const progressBar = document.getElementById("progressbar"+finishImgId.slice(9));
    const inputId = document.getElementById("numberInput"+finishImgId.slice(9));
    const inputStore = document.getElementById("inputstore"+finishImgId.slice(9));
    let progress

    if(finishBoolean[indexNumber-1] == 0){
        finishElement.style.backgroundColor = "rgb(0, 138, 138)";
        finishElement.style.borderRadius = "10%";
        finishBoolean[indexNumber-1] = 1;
        inputId.value= progress = todoprogressdata[indexNumber-1] =  100;
        progressBarStyle(progressBar,progress)
        inputStore.style.opacity = "0.5";
    }
    else{
        finishElement.style.background = "none";
        finishBoolean[indexNumber-1] = 0;
        inputId.value= progress = todoprogressdata[indexNumber-1] = 0;
        progressBarStyle(progressBar,progress)
        inputStore.style.opacity = "1";
    }
    localStorage.setItem('finishBoolean', JSON.stringify(finishBoolean));
    localStorage.setItem('todoprogressdata', JSON.stringify(todoprogressdata));
}

function deleteAction(event) {
    const deleteImgId = event.target.getAttribute("id");
    const indexNo = deleteImgId.slice(9);
    todoListarray.splice((indexNo-1), 1);
    todoprogressdata.splice((indexNo-1), 1);
    finishBoolean.splice((indexNo-1), 1);
    localStorage.setItem('todoListarray', JSON.stringify(todoListarray));
    localStorage.setItem('todoprogressdata', JSON.stringify(todoprogressdata));
    localStorage.setItem('finishBoolean', JSON.stringify(finishBoolean));
    const deleteElementId = "inputstore"+deleteImgId.slice(9);
    document.getElementById(deleteElementId).id = "inputstore0";
    const deleteElement = document.getElementById("inputstore0");
    iterateNextSibling(parseInt(indexNo)-1);
    deleteElement.remove();

    if (todoListarray.length == 0) {
        document.getElementById('storagecon').style.display = "none";
    }
}
  
function iterateNextSibling(no){
    let number = parseInt(no);
    let element = document.getElementById("inputstore0");
    let addno = 0;

    while (element.nextSibling) {
        addno++;
        number = parseInt(no) + addno;
        let noId = parseInt(number)+1;
        inputno = "inputstore"+number;
        document.getElementById("siNo"+noId).textContent = (document.getElementById("siNo"+noId).innerText)-1;
        document.getElementById("siNo"+noId).id = "siNo"+number;
        document.getElementById("inputstore"+noId).id  = "inputstore"+number;
        document.getElementById("numberInput"+noId).id  = "numberInput"+number;
        document.getElementById("progressbar"+noId).id  = "progressbar"+number;
        document.getElementById("finishButton"+noId).id  = "finishButton"+number;
        document.getElementById("finishImg"+noId).id  = "finishImg"+number;
        document.getElementById("deleteButton"+noId).id  = "deleteButton"+number;
        document.getElementById("deleteImg"+noId).id  = "deleteImg"+number;
        element = document.getElementById(("inputstore"+number));
    }
}

document.getElementById('btn-Img-search').addEventListener("click",() => {
    document.getElementById('title-search').style.display = "none";
    document.getElementById('searchContainer').style.display = "flex";
})

document.getElementById("searchBar").addEventListener("input",() => {
    //document.getElementById("searchBarBtn").style.backgroundColor = "rgb(0, 138, 138)";
    let searchInput = document.getElementById("searchBar").value.toLowerCase();
    let listElement = document.getElementsByTagName("li");

    for (let i = 0; i < listElement.length; i++) {
        if (listElement[i].id === "todoContent") {
            let contentTodo = listElement[i].textContent.toLowerCase();
            let grandparentElement = listElement[i].parentNode.parentNode;

            if (contentTodo.includes(searchInput)) {
                grandparentElement.style.display = 'block';
            } else {
                grandparentElement.style.display = 'none';
            }
        }
    }
})

function resetSearchBar() {
    let listElement = document.getElementsByTagName("li");

    for (let i = 0; i < listElement.length; i++) {
            let grandparentElement = listElement[i].parentNode.parentNode;
            grandparentElement.style.display = 'block';
    }
    document.getElementById('title-search').style.display = "flex";
    document.getElementById('searchContainer').style.display = "none";
    //document.getElementById("searchBarBtn").style.background = "none";
}
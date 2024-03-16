/*function updateProgressBar(event) {
  const input = event.target;
  const progressId = "progressbar"+(input.getAttribute("id")).slice(11);
  const progressBar = document.getElementById(progressId);

  let progress = input.value.trim();
  if (progress < 0 || progress == "") {
      input.value = 0;
      progress = 0;
  } 
  else if (progress > 100) {
      input.value = 100;
      progress = 100;
  }
  
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
  const input = event.target; // Get the input element that triggered the event
  const progressBar = input.nextElementSibling; // Assuming progressBar is the next sibling element
  let progress = input.value;
  
  if (progress < 0 || progress =="") {
    progress = 0;
  } else if (progress > 100) {
    progress = 100;
  }
  
  progressBar.style.width = progress + '%';
  
  if (progress < 30) {
    progressBar.style.backgroundColor = 'red';
  } else if (progress < 75) {
    progressBar.style.backgroundColor = 'yellow';
  } else {
    progressBar.style.backgroundColor = 'green';
  }
}


function updateProgressBar() {
    const input = document.getElementById('inputNumber');
    const progressBar = document.getElementById('progressBar');
    let progress = input.value;
    
    if (progress < 0 || progress =="") {
      progress = 0;
    } else if (progress > 100) {
      progress = 100;
    }
    
    progressBar.style.width = progress + '%';
    
    if (progress < 30) {
      progressBar.style.backgroundColor = 'red';
    } else if (progress < 75) {
      progressBar.style.backgroundColor = 'yellow';
    } else {
      progressBar.style.backgroundColor = 'green';
    }
  }


let originalElement = document.getElementById('originalElement');
  let clonedElement = originalElement.cloneNode(true);

  // Modify the id of the cloned element
  clonedElement.id = 'clonedElement'; 
  
  function updateProgressBar() {
    const class = document.getElementsByClassName('.number-input');
    const progressBarClass = document.getElementsByClassName('.progress-bar');
    const input = document.getElementById(class.id);
    let progress = input.value;
    console.log(progress);
    
    /*if (progress < 0 || progress =="") {
      progress = 0;
    } else if (progress > 100) {
      progress = 100;
    }
    
    progressBar.style.width = progress + '%';
    
    if (progress < 30) {
      progressBar.style.backgroundColor = 'red';
    } else if (progress < 75) {
      progressBar.style.backgroundColor = 'yellow';
    } else {
      progressBar.style.backgroundColor = 'green';
    }
  }


  let originalElement = document.getElementById('originalElement');
    let clonedElement = originalElement.cloneNode(true);
  
    // Modify the id of the cloned element
    clonedElement.id = 'clonedElement'; 
    
    function updateProgressBar(progress,progressBar) {
  
    if (progress < 0 || progress == "") {
      progress = 0;
    } else if (progress > 100) {
      progress = 100;
    }
  
    progressBar.style.width = progress + '%';
  
    if (progress < 30) {
      progressBar.style.backgroundColor = 'red';
    } else if (progress < 75) {
      progressBar.style.backgroundColor = 'yellow';
    } else {
      progressBar.style.backgroundColor = 'green';
    }
  }
  
  // Event listener for input change
  document.addEventListener('change', (event) => {
    // Check if the changed element is the input with class 'number-input'
    if (event.target.classList.contains('number-input')) {
      let progress = event.target.value;
      if (event.target.classList.contains('progress-bar')) {
        let progressBar =  event.target.classList.contains('progress-bar');
      }
      updateProgressBar(progress,progressBar);
    }
  });
  
  
  
  
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dynamic Function Attribute</title>
  </head>
  <body>
  
      <input type="number" class="number-input" id="inputNumber" min="0" max="100" placeholder="Provide ToDo status" onchange="updateProgressBar(event, 'progressBar', 'red', 'yellow', 'green')">
  
      <div class="progress-bar" id="progressBar" style="width: 0%; height: 20px; background-color: grey;"></div>
  
      <script>
          function updateProgressBar(event, progressBarId, color1, color2, color3) {
              let progress = event.target.value;
              let progressBar = document.getElementById(progressBarId);
  
              if (progress < 0 || progress == "") {
                  progress = 0;
              } else if (progress > 100) {
                  progress = 100;
              }
  
              progressBar.style.width = progress + '%';
  
              if (progress < 30) {
                  progressBar.style.backgroundColor = color1;
              } else if (progress < 75) {
                  progressBar.style.backgroundColor = color2;
              } else {
                  progressBar.style.backgroundColor = color3;
              }
          }
      </script>
  
  </body>
  </html>
  */
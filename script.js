const doAlert = (text) => {
  alert(text);
}

const changeBackground = () => {
  const id = 'js-example';
  const myDiv = document.getElementById(id);
  
  const currentColor = myDiv.style.backgroundColor;
  
  if (currentColor === 'white') {
    myDiv.style.backgroundColor = 'gray';
  } else if (currentColor === 'gray') {
    myDiv.style.backgroundColor = 'white';
  } else {
    myDiv.style.backgroundColor = 'gray';
  }
}
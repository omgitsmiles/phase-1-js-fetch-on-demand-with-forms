// const init = () => {
//  const form =  document.querySelector('form')
//  form.addEventListener('submit', e => {e.preventDefault()
//     e.target.children[1].value
//     fetch(`http://localhost:3000/movies/${e.target.children[1].value}`)
//     .then(data => console.log(data))
//     })
// }

const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');
  
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')
        title.innerText = data.title;
        summary.innerText = data.summary;
    });
  });
}

document.addEventListener('DOMContentLoaded', init);

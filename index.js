let div = document.querySelector('.post');
let title = document.querySelector('.title');
let text = document.querySelector('.text');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(post => {

        post.forEach(i => {

            let title = document.createElement('h2');
            title.classList.add('title');
            title.innerText = "Заголовок: " + i.title;
            document.body.append(title);

            let text = document.createElement('p');
            text.classList.add('text');
            text.innerText = i.body;
            document.body.append(text);
        });
    })
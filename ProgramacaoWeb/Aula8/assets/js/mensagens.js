function getMensagens(){
    fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
        .then(response => response.json())
        .then(posts => {

            const cards = document.getElementById('posts');
            posts.forEach(post => {

                const card = document.createElement('div');
                card.className = 'card'
                card.innerHTML = `<img src="">
                <div class='card-body'>
                    <h2 class = 'card-title'>${post.title} </h2>
                    <p class = 'card-text'>${post.body} </p>
                </div>
                <div class = 'card-footer'>Post ID: ${post.id} </div>`;

                cards.appendChild(card);
            });
        })
}

document.addEventListener('DOMContentLoaded', getMensagens)
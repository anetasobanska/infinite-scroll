const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const gridContainer = document.querySelector(".grid-container");
const watcher = document.querySelector(".intersection-watcher");

async function fetchPosts() {
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data)
        return data;
    } catch (e) {
        console.log(e);
    }
}

const addContent = async () => {
    const data = await fetchPosts();

    data.forEach(photo => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<h2>${photo.title}</h2>`;
            gridContainer.appendChild(card);
    })
}

const handleIntersect = entries => {
    if(entries[0].isIntersecting) {
        addContent();
    }
}

const options = {
    threshold: 0.9,
}

new IntersectionObserver(handleIntersect, options).observe(watcher);



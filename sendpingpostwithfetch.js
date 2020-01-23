function addPost(event) {
    event.preventDefault();
    
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    const myPost = {
        title: title,
        body: body
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myPost)
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}
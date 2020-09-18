
document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts() {

    fetch("http://localhost:3000/api/all").then(res => {
        return res.json();
    }).then(json => {

        let postElements = '';
        let posts = JSON.parse(json);

        posts.forEach((post) => {
            let postElement = 
            `<div id=${post.id} class="card mb-4">
                <div class="card-header bg-info">
                    <div class="close text-white" onClick="deletePost(this)">X</div>
                    <h5 class="card-title text-white"> ${post.title} </h5>
                </div>
                <div class="card-body bg-gray">
                    <div class="card-text"> ${post.description} </div>
                </div>
            </div>`;

            postElements += postElement;
        });

        document.getElementById("posts").innerHTML = postElements;
    })
}

function newPost() {

    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    let post = { title, description };

    const options = {method: "POST",
                     headers: new Headers({'content-type': 'application/json'}),
                     body: JSON.stringify(post)
    };

    fetch("http://localhost:3000/api/new", options).then(res => {
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
    })

}

function deletePost(e) {

    let id = e.closest('[id]').id;

    let post = { id };

    const options = {method: "DELETE",
                     headers: new Headers({'content-type': 'application/json'}),
                     body: JSON.stringify(post)
    };

    fetch("http://localhost:3000/api/del", options).then(res => {
        updatePosts();
    })
}
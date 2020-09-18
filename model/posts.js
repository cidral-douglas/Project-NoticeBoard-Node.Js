module.exports = {

    posts: [
        //Modelo de Post
        // {
        //     id: "laknscik",
        //     title: "Teste do Mural de Avisos",
        //     description: "Descrição do teste"
        // },
    ],

    getAll() {
        return this.posts;
    },

    newPost( title, description) {
        this.posts.push({ id: generateId(), title, description });
    },

    deletePost(id) {
        this.posts = this.posts.filter((post) => {
            if(post.id !== id) {
                return post;
            }
            })
    },
}

function generateId() {
    return Math.random().toString(36).substr(2,9);
}
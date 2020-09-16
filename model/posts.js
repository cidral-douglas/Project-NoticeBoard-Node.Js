module.exports = {

    posts: [
        {
            id: "laknscik",
            title: "Teste do Mural de Avisos",
            description: "Descrição do teste"
        },
    ],

    getAll() {
        return this.posts;
    },

    newPost( title, description) {
        this.posts.push({ id: generateId(), title, description });
    },
}

function generateId() {
    return Math.random().toString(36).substr(2,9);
}
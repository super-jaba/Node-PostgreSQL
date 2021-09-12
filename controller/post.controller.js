const db = require('../db');

class PostController {

    async createPost(req, res) {
        const { title, content, userId } = req.body;

        const newPost = await db.query(`INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *`, [title, content, userId]);
        res.json(newPost.rows[0]);
    }

    async getPosts(req, res) {
        const posts = await db.query(`SELECT * FROM post`);
        res.json(posts.rows);
    }

    async getPost(req, res) {
        const id = req.params.id;

        const post = await db.query(`SELECT * FROM post WHERE id=$1`, [id]);
        res.json(post.rows[0]);
    }

    async updatePost(req, res) {
        const { postId, newTitle, newContent } = req.body;

        const post = await db.query(`UPDATE post set title=$1, content=$2 WHERE id=$3 RETURNING *`, [newTitle, newContent, postId]);
        res.json(post.rows[0]);
    }

    async deletePost(req, res) {
        const postId = req.params.id;

        const deleted = await db.query(`DELETE FROM post WHERE id=$1`, [postId]);
        res.json(deleted.rows[0]);
    }

}

module.exports = new PostController();
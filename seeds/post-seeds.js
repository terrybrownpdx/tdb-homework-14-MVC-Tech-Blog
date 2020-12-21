const { Post } = require('../models');

const postData = [{
    title: "test2",
    content: "test2",
    user_id: 1
},
{
    title: "test2",
    content: "test2",
    user_id: 2
},
{
    title: "test2",
    content: "test2",
    user_id: 3
}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
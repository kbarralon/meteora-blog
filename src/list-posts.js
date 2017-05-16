import fetch from 'node-fetch';
import parameters from './settings/parameters';

const listPosts = (req, res) => {
    let locals = {};
    fetch(`${parameters.apiUrl}/blog/?limit=10&offset=0`)
        .then(res => res.json())
        .then(body => {

            const results = body.results;
            /**
             * Get the featured post
             */
            locals.featured_post = results[0];

            /**
             * Get All Posts
             */
            results.shift();
            const allPosts = results;
            locals.posts = allPosts.length > 1 ? allPosts : [allPosts];

            return locals;
        })
        .then(locals => {
            res.render('index', locals)
        });
};

export default listPosts;
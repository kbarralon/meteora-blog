import fetch from 'node-fetch';
import parameters from './settings/parameters';
import crypto from 'crypto';

const detailPost = (req, res) => {

    const categorySlug = req.params.category;
    const postSlug = req.params.title;

    fetch(`${parameters.apiUrl}/blog/${postSlug}`)
        .then(res => res.json())
        .then(body => {
            if (body.category.slug !== categorySlug) res.render('404');
            else res.render('post', {
                post: body,
                author_gravatar: crypto.createHash('md5').update(body.author.email).digest("hex")
            });
        })
        .catch(() => res.render('404'));
};

export default detailPost;
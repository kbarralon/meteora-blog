import express from 'express';
import listPosts from './list-posts';
import detailPost from './detail-post';
import nunjucksConfig from './settings/nunjucks';

const app = express();

app.set('views', 'public/templates');

nunjucksConfig(app);

app.use('/static', express.static('dist'));
app.use('/images', express.static('public/assets/images'));

app.get('/', listPosts);
app.get('/:slug', detailPost);

app.use((req, res) => res.render('404', { url: req.url }));

app.listen(3000);

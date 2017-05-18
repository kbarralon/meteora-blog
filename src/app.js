import express from 'express';
import listPosts from './list-posts';
import detailPost from './detail-post';
import nunjucksConfig from './settings/nunjucks';
import parameters from './settings/parameters';

const app = express();

const NODE_ENV = parameters.environment;

app.set('views', 'public/templates');

nunjucksConfig(app, NODE_ENV);

app.use('/static', express.static('dist'));
app.use('/images', express.static('public/assets/images'));

app.get('/', listPosts);
app.get('/:category/:title', detailPost);

app.use((req, res) => res.render('404'));

app.listen(3000, () => console.log('App listening on port 3000!'));

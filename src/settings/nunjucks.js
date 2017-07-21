import expressNunjucks from 'express-nunjucks';
import moment from 'moment';
moment.locale('fr');

export default function nunjucksConfig(app, env) {

    app.use((req,res,next) => {
        res.locals.website = 'https://www.meteora.io';
        res.locals.blog_url = `${req.protocol}://${req.get('host')}`;
        res.locals.full_url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
        next();
    });

    expressNunjucks(app, {
        watch: env !== 'production',
        noCache: env !== 'production',
        filters: {
            date: (value) => {
                const dateNow = new Date();
                const dateValue = new Date(value);
                dateNow.setDate(dateNow.getDate() - 1);
                return dateValue < dateNow ? `Le ${moment(value).format('DD MMMM YYYY')}` : moment(value).fromNow();
            }
        }
    });
}
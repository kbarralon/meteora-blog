import expressNunjucks from 'express-nunjucks';
import moment from 'moment';
moment.locale('fr');

export default function nunjucksConfig(app) {

    expressNunjucks(app, {
        watch: true,
        noCache: true,
        globals: {
          website: 'https://www.meteora.io'
        },
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
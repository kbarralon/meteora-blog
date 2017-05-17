import * as mdl from 'material-design-lite';
import Sticky from 'sticky-js';

function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function() {
    new Sticky('.share-post', {})
});

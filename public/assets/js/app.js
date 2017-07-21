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

    /**
     * Configuration menu
     */
    document.getElementById('menu-small').addEventListener('click', function() {
        var mainNav = document.querySelector('.main-nav');

        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mainNav.style.transform = 'translateX(-300px)';
            mainNav.style.opacity = 0;
            document.body.style.overflow = 'auto';
        }

        else {
            mainNav.classList.add('active');
            mainNav.style.transform = 'translateX(0)';
            mainNav.style.opacity = 1;
            document.body.style.overflow = 'hidden';
        }

    });

    /**
     * Set sticky in Posts
     */
    new Sticky('.share-post', {});
});

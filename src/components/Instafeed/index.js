import React from 'react';
import './style.css';

const Instafeed = (props) => {

    const $ = window.$;

    $(window).on('load', function(){
        $.instagramFeed({
            'username': 'annanogalska.photodiary',
            'container': "#instagram-feed1",
            'display_profile': false,
            'display_biography': false,
            'display_gallery': true,
            'callback': null,
            'styling': true,
            'items': 4,
            'items_per_row': 4,
            'margin': 1,
            'lazy_load': true,
            'on_error': console.error
        });
    });

    return (
        <div id="instafeedContainer">
        <hr/>
            <div>
                <a href="https://www.instagram.com/annanogalska.photodiary/" className="instagram-link fab fa-instagram"><a className="instagram-name">Instagram</a></a>
            </div>
            <div id="instagram-feed1" ></div>
         
        </div>
    );

};

export default Instafeed;
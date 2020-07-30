import React from 'react';
import './style.css';

const Instafeed = (props) => {
    return (
        <div className="instagramContent">
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <div style={{ marginBottom: "10px" }}>
                <a href="https://www.instagram.com/annanogalska.photodiary/" className="instagram-link fab fa-instagram"><a className="instagram-name">Instagram</a></a>
            </div>
            <iframe src="//lightwidget.com/widgets/a38a9f9196b1558fa1b20920e57253b0.html"
                scrolling="no" allowtransparency="true" className="lightwidget-widget"
                style={{ width: "100%", border: "0", overflow: "hidden" }}>
            </iframe>
            <br/>
            <br/>
            <iframe src="//lightwidget.com/widgets/c526c8f27f7b53fbb546e8c7ea211640.html"
                scrolling="no" allowtransparency="true" className="lightwidget-widget"
                style={{ width: "100%", border: "0", overflow: "hidden" }}>
            </iframe>
            <br/><br/>
        </div>
    );

};

export default Instafeed;
import React from 'react';
import './style.css';

const Instafeed = (props) => {
    return (
        <div id="content">
        
            {/* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script> */}
            <div style={{ marginBottom: "10px" }}>
                <a href="https://www.instagram.com/annanogalska.photodiary/" className="instagram-link fab fa-instagram"><a className="instagram-name">Instagram</a></a>
            </div>
            {/* <!-- SnapWidget --> */}
            <script src="https://snapwidget.com/js/snapwidget.js"></script>
            <iframe src="https://snapwidget.com/embed/856833" 
                className="snapwidget-widget" 
                allowtransparency="true" 
                frameborder="0" 
                scrolling="no" 
                style={{border:"none", overflow:"hidden", width: "100%"}}></iframe>
            {/* <iframe src="//lightwidget.com/widgets/0d6d51756b575edf8e12e076aceaca35.html"
                scrolling="no" allowtransparency="true" className="lightwidget-widget"
                style={{ width: "100%", border: "0", overflow: "hidden" }}>
            </iframe> */}

            
        </div>
    );

};

export default Instafeed;
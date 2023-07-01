import React from 'react';
import './Footer.css';
const Footer = () =>{
    return(
        <>
         <footer>
        <div className="lists">
        <ul>
            <li><img src="https://i.ibb.co/0qhj0Zy/starbuks-logo.png" alt="starbuks-logo" id='footerpic'/></li>
        </ul>
        </div>
            <div className="lists">
                <ul>
                    <li className="heading">About Us</li>
                    <li className="point">Our Heritage</li>
                    <li className="point">Our Company</li>
                    <li className="point">Coffee house</li>
                </ul>
                </div>
                <div className="lists">
                    <ul>
                        <li className="heading">Responsibility</li>
                        <li className="point">Community</li>
                        <li className="point">Ethnic Sourcing</li>
                        <li className="point">Environment</li>
                        <li className="point">Diversity</li>
                    </ul>
                    </div>
                    <div className="lists">
                        <ul>
                            <li className="heading">Quick Links</li>
                            <li className="point">Delivery</li>
                            <li className="point">Season's Gifting</li>
                            <li className="point">Careers</li>
                            <li className="point">Customer Service</li>
                            <li className="point">FAQs</li>
                        </ul>
                        </div>
                        <div className="lists">
                            <ul>
                                <li className="heading">SOCIAL MEDIA</li>
                                <li><i className="fa-brands fa-instagram fa-2x"></i>&nbsp;&nbsp;
                                    <i className="fa-brands fa-facebook-f fa-2x"></i>&nbsp;&nbsp;
                                    <i className="fa-brands fa-twitter fa-2x"></i></li></ul>
                            </div>
                            <div className="lists">
                                <ul>
                                    <li className="heading"><button type="submit"><i class="fa-brands fa-apple fa-2x"></i> Download Now</button></li>
                                    <li className="heading"><button type="submit"><i class="fa-brands fa-google-play fa-2x"></i> Download Now</button></li>
                                    </ul>
                                </div>
                                <hr id ="footerhr"/>
                                <div className="foot-list"><ul><li>Web accessibility</li></ul></div>
                                <div className="foot-list"><ul><li>Privacy Statement</li></ul></div>
                                <div className="foot-list"><ul><li>Terms of Use</li></ul></div>
                                <div className="foot-list"><ul><li>Contact Us</li></ul></div>
                                <div id="foot-list"><ul><li>&copy; Starbucks</li></ul></div>
    </footer>
        </>
    )
}

export default Footer;
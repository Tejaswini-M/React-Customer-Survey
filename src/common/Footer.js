import React from "react";
import '../styles/Footer.css';

function Footer(){
    return(
        <footer>
            <div id="site-footer">
                <div class="container">
                <div class="row">        
                    <ul class="support">
                    <h4 class="heading">MY OPTUS APP</h4>
                    <li><a href="https://www.optus.com.au/customer-extras/mobile-apps/my-optus-app" class="sd-hide">My Optus App</a></li>
                    <li><a href="https://sport.optus.com.au" class="sd-hide">Optus Sport</a></li>
                    <li><a href="https://yescrowd.optus.com.au/" class="sd-hide">Yes Crowd</a></li>
                    <li><a href="https://www.optus.com.au/about/legal/copyright" class="sd-hide">Copyright</a></li>
                    <li><a href="https://www.optus.com.au/entertainment/hype" class="sd-hide">Hype</a></li>
                    </ul>
                    <ul class="support">
                    <h4 class="heading">OPTUS GUIDE</h4>
                    <li><a href="https://www.optus.com.au/about/legal/privacy-and-security">Privacy &amp; Security</a></li>
                    <li><a href="https://www.optus.com.au/shop/stores" class="sd-hide">Store Locator</a></li>
                    <li><a href="https://www.optus.com.au/shop/support/answer/how-to-contact-optus?answerId=1371&#38;question=How%20to%20Contact%20Optus&#38;typeId=6">Contact Us</a></li>
                    <li><a href="https://www.optus.com.au/wholesale?SID=con:hme:whls:othr:foot:othr:whls" class="sd-hide">Wholesale</a></li>
                    <li><a href="https://www.optus.com.au/about/network/regional-coverage/" class="sd-hide">Regional</a></li>
                    </ul>
                </div>
                <div class="row1">
                    <ul class="support1">
                    <li><a href="https://www.optus.com.au/shop/stores" class="foot">Store Locator</a></li>
                    <li><a href="https://www.optus.com.au/contactus" class="foot">Contact Us</a></li>
                    <li><a href="https://www.singtel.com/about-us" class="foot">About Singtel</a></li>
                    <li><a href="https://www.optus.com.au/for-you/support/feedback-and-complaints?sid=complaints:source:homepage" class="foot">Feedback &amp; Complaints</a></li>
                    </ul>
                    <p class="icon">&copy; 2021 Singtel Optus Pty Limited</p>
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

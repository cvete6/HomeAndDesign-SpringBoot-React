import React, {Component} from 'react';
import './FooterSocials.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
//library.add(fab, faCheckSquare, faCoffee)
import SocialFollows from './SocialFollows.js';
class FooterSocials extends Component {

    render(){
        return (
            <div className={"pt-3"}>
                <div className={"text-center footer-text h5 "}>Follow us</div>
                <hr className={"hr-footer-link-color"}/>
                <div className={"text-center footer-text h5"}>
                    <SocialFollows/>
                </div>
            </div>
        );
    }
}

export default FooterSocials;

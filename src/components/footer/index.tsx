import * as C from './styles';

export const Footer = ()=>{
    return(
        <C.Footer>
            <div className='footer__container'>
                
                <div className='footer__leftSide'>
                    <h3 className='footer__leftSide--h2'>GPT-3</h3>
                    <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
                </div>
                <div className='footer__rightSide'>
                    <ul>
                        <p><strong>Links</strong></p>
                        <li><a href="#">Overons</a></li>
                        <li><a href="#">Social Media</a></li>
                        <li><a href="#">Counters</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ul>
                        <p><strong>Company</strong></p>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ul>
                        <p><strong>Company</strong></p>
                        <li><a href="#">Crechterwoord K12 182 DK Alknjkcb</a></li>
                        <li><a href="#">085-132567</a></li>
                        <li><a href="#">info@payme.net</a></li>
                    </ul>
                </div>
            </div>
            <p className='credits'> © 2021 GPT-3. All rights reserved.</p>
        </C.Footer>
    )
}
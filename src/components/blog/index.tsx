import * as C from './styled';
import { Header } from '../header';
import { Blur } from '../features/blur';
import { Button } from '../features/button';
import { Topic } from '../features/topic';
import { News } from '../features/new';
import { Footer } from '../footer';
const aifaceImg = require('../../assets/ai.png');
const peopleImg = require('../../assets/people.png');
const dropboxLogo = require('../../assets/dropbox.png')
const slack = require('../../assets/slack.png')
const shopify = require('../../assets/shopify.png')
const atlassian = require('../../assets/atlassian.png')
const googleLogo = require('../../assets/google.png')


export const Blog = ()=>{
    return(
        <C.BlogContainer>
            <Blur/>
            <Header/>
            <section className='section section--1'>
                <div className='leftSide'>
                    <h1>Let’s Build Something <br /> amazing with GPT-3 <br /> OpenAI</h1>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

                    
                    <form >
                        <input type="email" placeholder='Your email adress'/>
                        <Button primary text="Get started"/>
                    </form>
                    <div className='people'>
                        <img src={peopleImg} alt="" />
                        <p className='people p'>1,600 people requested access a visit in last 24 hours</p>
                    </div>
                    
                </div>
                <div className='rightSide'>
                    <img src={aifaceImg} alt="ai face image" />
                </div>
                <div className='logos'>
                        <img src={googleLogo} alt="google" />   
                        <img src={slack} alt="slack" />   
                        <img src={atlassian} alt="atlassian" />     
                        <img src={dropboxLogo} alt="dropbox" />  
                        <img src={shopify} alt="shopify" />  
                </div>
            </section>
            <section className='section section--2'>
                <div className='section section--2--container'>
                    <Topic row title='What is GPT-3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
                    <div className='section--2-largeTitle'>
                        <h2>
                            The possibilities are beyond <br /> your imagination
                        </h2>
                        <p className='section--2-smalltext'>Explore The Library</p>
                    </div>
                    <div className='section--2--topics'>
                        <Topic title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '/>
                        <Topic title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
                        <Topic title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
                    </div>
                </div>
            </section>
            <section className='section section--3'>
                <div className='section--3--top'>
                <div className='section--3--leftSide'>
                    <h2>The Future is Now and <br /> You Just Need To Realize <br /> It. Step into Future Today <br /> & Make it Happen.</h2>
                    <p>Request Early Access to Get Started</p>
                </div>
                <div className='section--3--rightSide'>
                    <Topic row title='Improving end distrusts instantly ' text='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'/>
                    <Topic row title='Become the tended active' text='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'/>
                    <Topic row title='Message or am nothing' text='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'/>
                    <Topic row title='Really boy law county' text='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'/>
                </div>
                </div>
                <div className='section--3--bottom'>
                        <div className="section--3--leftSide">
                            <img src={require('../../assets/possibility.png')} alt="possibility" />
                        </div>
                        <div className="section--3--rightSide-bottom">
                            <p className='blue'>Request Early Access to Get Started</p>
                            <h2>The possibilities are beyond your imagination</h2>
                        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                        <p className='rose'>Request Early Access to Get Started</p>
                        </div>
                </div>
                <div className='section--3--pinkContainer'>
                    <div>
                        <p>Request Early Access to Get Started</p>
                        <h3>Register today & start exploring the endless possiblities.</h3>
                    </div>
                    <button>
                        Get started
                    </button>
                </div>
            </section>
            <section className='section section__4'>
                    <h1>A lot is happening, <br /> We are blogging about it.</h1>
                    <div className='section__4--dashboard'>
                        <News gridArea='primary' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' img={require('../../assets/blog01.png')}/>
                        <News gridArea='second' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' img={require('../../assets/blog02.png')}/>
                        <News gridArea='third' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' img={require('../../assets/blog03.png')}/>
                        <News gridArea='fourth' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' img={require('../../assets/blog04.png')}/>
                        <News gridArea='fifith' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' img={require('../../assets/blog05.png')}/>
                    </div>
            </section>
            <section className='section section__5'>
                <h1>Do you want to step in to the future before others</h1>
                <button>
                    Request Early Access
                </button>
            </section>
            <Footer/>
        </C.BlogContainer>
    )
}
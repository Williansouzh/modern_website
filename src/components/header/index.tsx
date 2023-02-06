import * as C from './styles';
import { Button } from '../features/button';
export const Header = ()=>{
    return(
        <C.Header>
            <nav>
                <div>
                    <Button text="Home"/>
                    <Button text="What is ChatGPT?"/>
                    <Button text="Open AI"/>
                    <Button text="Case studies"/>
                    <Button text="Library"/>
                </div>
                <div>
                    <Button text="Sing in"/>
                    <Button  primary text="Sing up"/>
                </div>
                
            </nav>
        </C.Header>
    )
}
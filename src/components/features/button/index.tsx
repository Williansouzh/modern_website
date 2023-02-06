import { StringLiteralLike } from 'typescript';
import * as C from './styles';
import { buttonType } from '../../../types/featuresTypes';

export const Button = ({text, primary}:buttonType)=>{
    return(
        <C.Button primary={primary}>
            {text}
        </C.Button>
    )
}
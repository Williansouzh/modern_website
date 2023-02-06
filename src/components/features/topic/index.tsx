import { AnyARecord } from 'dns';
import * as C from './styles';
type TopicType = {
    title: string
    text?: string
    row?: any
}
export const Topic = ({title, text, row}: TopicType)=>{
    return(
        <C.Container row={row}>
            <div className='topic--header'>
                <div className='icon'></div>
                <h3>{title}</h3>
            </div>
            <div className='topic--text'>
                <p>{text}</p>
            </div>
        </C.Container>
    )
}

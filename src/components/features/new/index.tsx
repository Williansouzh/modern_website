import * as C from './styles';
type newsType = {
    title: string
    img: string
    gridArea?: string
}
export const News = ({title, img, gridArea}:newsType)=>{
    return(
        <C.Container className={gridArea} >
            <img src={img} alt="new img" />
            <div className='news__container'>
                <span>Sep 26, 2021</span>
                <h3 className='title'>{title}</h3>
                <a href="#">Read full article</a>
            </div>
        </C.Container>
    )
}
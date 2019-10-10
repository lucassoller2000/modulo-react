
import './Noticias.css'
import NoticiaItem from '../NoticiaItem/NoticiaItem'

export default class Noticias extends React.Component{

    getNoticiasItens() {
        return this.props.noticia.map((item) => {
            return <NoticiaItem noticia={item}/>
        })
    }
    
    render(){
        return <div className="noticia">
            {this.getNoticiasItens()}
        </div>
    }
}
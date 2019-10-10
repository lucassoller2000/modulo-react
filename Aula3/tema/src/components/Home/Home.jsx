import React from 'react'
import LoginService from '../../Services/LoginService'
import Modal from '../Modal/Modal'
import Movies from '../Movies/Movies'
import Button from '../generic/Button/Button'
import EmptyList from  '../EmptyList/EmptyList'
import ApiService from '../../Services/ApiService';


const EMPTY_LIST = {
    TRUE: 'TRUE',
    FALSE: 'FALSE'
  }

export default class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            movies: [],
             emptyList: EMPTY_LIST.FALSE
        }
    }
    
    componentWillMount(){
        const loggedUser = LoginService.getLoggedUser()
        return ApiService.getMovies(loggedUser.accessToken)
            .then((result => {
                if(result.data.movies.length > 0){
                    const movies = result.data.movies 
                    this.setState({
                        movies
                    })
                    this.changeListFalse()
                }else{
                    this.changeListTrue()
                }
            }))
            .catch(err => {
                console.error(err)
            })
    }

    renderContent() {
        if (this.state.emptyList === EMPTY_LIST.TRUE) {
          return <EmptyList />
        }
        return ''
      }
    
      changeListTrue() {
        this.setEmptyList(EMPTY_LIST.TRUE)
      }

      changeListFalse() {
        this.setEmptyList(EMPTY_LIST.FALSE)
      }
    
      setEmptyList(emptyList) {
        this.setState({
          emptyList
        })
      }

    onRemove(movie) {
        ApiService.deleteMovies()
        let movies = this.state.movies.filter((item) => {
            return item.id !== movie.id
        })
        this.setState = {
            movies
        }
    }

    renderMovies(){
    return this.state.movies.map((movie) =>{
        return <div key={movie.id} className="Movies">
                <Movies 
                image ={movie.image}
                title ={movie.title}
                text ={movie.text}
                category={movie.category}
                />
            </div>
        })
    }

    onClick(){
        const loggedUser = LoginService.getLoggedUser()
        return LoginService.logout(loggedUser.accessToken)
        .then((result) => {
            
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className="home">     
                {this.renderMovies()}
                {this.renderContent()}
                <div className="buttons">
                    <Modal />
                    <Button 
                    type="submit"
                    classButton="primary"
                    class="botao"
                    text="Logout"
                    onClick={this.onClick}/>
                    
                </div>
            </div>
        )
    }
}

const home = new Home()
home.componentWillMount()
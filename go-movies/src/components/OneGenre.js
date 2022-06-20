import React, { Component, Fragment } from 'react'
import { Link, useLocation, useParams} from 'react-router-dom'


const withRouter = WrappedComponent => props =>{
    const params = useParams()
    const location = useLocation()

    return(
        <WrappedComponent
        {...props}
        params={params}
        location={location}
        />
    )
}


class OneGenre extends Component{
    state = {
        movies : [],
        isLoaded : false,
        error : null,
        genreName:"",
    }

    componentDidMount(){
        fetch("http://localhost:4000/v1/movies/" + this.props.params.id)
        // .then((response)=>response.json())
        .then((response)=>{
            console.log("Status code is", response.status);
            if (response.status !== "200"){
                let err = Error
                err.message = "Invalid response code: " + response.status
                this.setState({error:err})
            }
            return response.json()
        })
        .then((json)=>{
            this.setState({
                movies:json.movies, 
                isLoaded:true,
                genreName: this.props.location.state.data,
            },
            (error)=>{
                this.setState({
                    isLoaded:true,
                    error
                })
            })
        })
    }

    render(){
        let {movies, isLoaded, error, genreName} = this.state

        if (!movies){
            movies = []
        }

        if (error){
            return <div>Error: {error.message}</div>
        }else if (!isLoaded){
            return <p>Loading..</p>
        }else{

            return(
            <Fragment>
            <h2>Genre: {genreName}</h2>
            <div className='list-group'>
                {movies.map((m)=>(
                    <Link key={m.id} to={`/movies/${m.id}`} className="list-group-item list-group-item-action">{m.title}</Link>
                ))}
            </div>
            </Fragment>
        );
    }
    }
}

export default withRouter(OneGenre)
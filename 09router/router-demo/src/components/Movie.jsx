
import React from 'react'

class Movie extends React.Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        let pathVars = this.props.match.params;
        console.log(this.props.match.params)
        let {tid, id} = pathVars;
        return <div>this is movie, tid : {tid}, id : {id}</div>
    }
}

export default Movie
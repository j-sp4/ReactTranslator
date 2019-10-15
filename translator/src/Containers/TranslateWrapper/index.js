import React from 'react'

class TranslateWrapper extends React.Component{
    constructor(props){
        super(props)
        console.log(props.children)
    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default TranslateWrapper
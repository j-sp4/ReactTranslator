import React from 'react'
import fetch from'node-fetch';

class TranslateWrapper extends React.Component{
    constructor(props){
        super(props)
        this.state={
            language: 'english'
        }
        console.log('this is the template wrapper',props.children)
        this.propsOrChildSearch(props)
    }
    // UNSAFE_componentWillMount(){
    //     this.propsOrChildSearch(this.props)
    // }
    propsOrChildSearch = (obj) =>{
        if(obj.props !== undefined){
            this.propsOrChildSearch(obj.props)
        }else if(obj.children !== undefined){
            this.propsOrChildSearch(obj.children)
        }else if(Array.isArray(obj)){
            obj.map((el)=> this.propsOrChildSearch(el))
        }else 
        this.checkForStrings(obj)
    }

    checkForStrings = (obj) =>{
        if(typeof obj !== 'string'){
            for(let key in obj){
                if(typeof obj[key] === 'string'){
                    this.checkForStrings(obj[key])
                }else if(Array.isArray(obj[key])){
                    this.propsOrChildSearch(obj[key])
                }
            }
        }else{
            obj = `${obj} dick`
            console.log(obj)
        }
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
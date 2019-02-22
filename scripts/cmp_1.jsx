import React ,{Component} from 'react'

class Cmp_1 extends React.Component{

    constructor(props){
        super(props)
        this.state = {value:props.initialValue}
    }

    soma(v,p){
        this.setState({value:this.state.value + v + p.initialValue } )
        console.log(JSON.stringify(this.state.value))
    }

    render(){

        return (
            <div>
                <h1>{this.state.value}</h1>
                <input type='button' value='+' onClick={() => this.soma(1,this.props)}  
                                     onMouseMove={() => this.soma(1,this.props)}/>
                <input type='button' value='-' onClick={() => this.soma(-1,this.props)  } />
            
            </div>
        )
     }

}

class Cmp_2 extends Component{
    
    constructor(props){
        super(props)
        this.state = {value:props.initialValue}
    }

    _onChange(evt){
        this.setState({value: evt.target.value})
    }

    render(){

        return (
                <div>
                    <br></br>
                    <input type='text' onChange={(event) => this._onChange(event)}></input>
                    <h1 >{this.state.value}</h1>
                </div>

               
              )
     }

}
export{Cmp_1, Cmp_2}
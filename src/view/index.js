import React from 'react'

class Home extends React.Component{
    state={
        num:1
    }
    render(){
        return(
            <div>
                {this.state.num}
                <span onClick={()=>{this.setState({num:this.state.num+1})}}>+</span>
            </div>
        )
    }
}

export default Home
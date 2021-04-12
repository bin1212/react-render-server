import React from 'react'
import {connect} from 'react-redux'
import * as TodoAction from '../../store/actions'
import {bindActionCreators} from 'redux'

class List extends React.Component{
    componentDidMount(){
       this.props.setHomeList(["wen","bin"])
    }
    render(){
        const {list} = this.props
        return(
            <div onClick={()=>{console.log(this.props.history);this.props.history.push('login')}}>
                List12
                {
                    list.map((item,index)=>(
                        <p key={index}>{item}</p>
                    ))
                }
            </div>
        )
    }
}
function mapStatesToProps(state){
    return state.home
}
function mapDispatchProps (dispatch) {
    const {setHomeList} = bindActionCreators(TodoAction,dispatch)
    return{
        setHomeList
    }
}
export default connect(mapStatesToProps,mapDispatchProps)(List)
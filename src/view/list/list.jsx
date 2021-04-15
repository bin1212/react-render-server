import React from 'react'
import {connect} from 'react-redux'
import * as TodoAction from '../../store/actions'
import {bindActionCreators} from 'redux'
import {getHomelist} from '../../api/index'


class List extends React.Component{
    componentDidMount(){
        if(!this.props.list.length){
            this.props.setHomeList()
        }
    }
    render(){
        const {list} = this.props
        return(
            <div onClick={()=>{this.props.history.push('login')}}>
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
List = connect(mapStatesToProps,mapDispatchProps)(List)
List.loadData = async function(store){
    let result = await getHomelist()
    return store.dispatch({
        type:'SET_HOME_LIST',
        payload:result.data
    })
  };
export default List
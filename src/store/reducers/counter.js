let initState = {show:false};
export default function counter(state=initState,action){
   switch(action.type){
    case 'SHOW_CONGRATULATION':
      console.log('SHOW_CONGRATULATION')
      return {show:true};
    default:
      return state;
   }
}
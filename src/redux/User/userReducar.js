import { ADD_USER } from "./userType";

const initialState = {
    id:'',
    email:'',
    name:'',
    token:'',
    mobile:'',
    isLogin:'',
    image:'',
    device_token:'',
    type:''
}

const UserReducar = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER : 
            return {
                ...state,
                ...action.payload
            }    
        default : 
            return state
    }
}

export default UserReducar
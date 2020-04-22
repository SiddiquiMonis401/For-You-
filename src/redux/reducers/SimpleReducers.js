const initialState = {
    login:false,   
};

export const simpleReducer = (state =initialState, action) => {
    const newState = {...state};
    switch(action.type){
        case 'SimpleAction':
       return {...newState,login:true};
        default :
             return newState;   
    };
};
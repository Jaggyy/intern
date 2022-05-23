export const initialstate={
    form : false,
    errormess : "",
    errorfound:false,
    success : false,
    user:{
        user: false,
        data: []
    }
}
export const reducer =(state= initialstate , action)=>{
    switch (action.type) {
        case "form":
            return {
                ...state,
                form: action.data
            }
        case "error":
            return {
                ...state,
                errormess: action.data,
            }
        case "success":
            return {
                ...state,
                success : action.data
            }
        case "user":
            return {
                ...state,
                user: {
                    user: action.data.user,
                    data:[action.data.data]
                }
            }
    
        default:
            return initialstate;
    }
}
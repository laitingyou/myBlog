
let count=function (state = 0, action) {
    switch (action.type){
        case 'ADD':
            return action.text
        case 'REDUCER':
            return action.text
        default:
            return state
    }
}
export {
    count
}
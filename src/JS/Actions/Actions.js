import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionTypes/ActionTypes"

export const done_task = id => {
    return{ type : DONE_TASK,
        payload : id 
    }
}

export const delete_task = id => {
    return{ type : DELETE_TASK,
        payload : id 
    }
}

export const edit_task = (id , newtask) => {
    return{ type : EDIT_TASK,
        payload : {id , newtask} 
    }
}

export const add_task = newtask => {
    return{ type : ADD_TASK,
        payload : newtask
    }
}



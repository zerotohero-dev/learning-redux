const toggleTodo = (todo) => {
    //todo.completed = !todo.completed;

    Object.assign({}, todo, {
        completed: !todo.completed
    });
};

const todos = (state=[], action) => {
    switch (action.type) {
    case 'ADD_TODO':
        return [
            ...state,  {
                id: action.id,
                text: action.text,
                completed: false
            }
        ];
    case 'TOGGLE_TODO':
        return state.map( (todo) => {
            if (todo.id !== action.id) {return todo;}

           return {
               ...todo, completed: !todo.completed
           };
        });
    }
};

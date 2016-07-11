const addCounter = (list) => {
    //list.push(0);
    //list.concat([0]);
    return [...list, 0];

    //return list;
};

const removeCounter = (list, index) => {
    //return list.slice(0, index)
   //         .concat(list.slice(index + 1));
    
    return [...list.slice(0, index), ...list.slice(index + 1)];
};

const incrementCounter = (list, index) => {
    return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];
};

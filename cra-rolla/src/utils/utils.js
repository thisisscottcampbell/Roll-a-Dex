  
  //grab list of techniques off of user obj
  export const getUserList = (userName, source)=> {
    const users = source.filter(user => user.name === userName);
    const list = users[0].list;
    return list;
  };

  //returns true or false if user is in db
  export const findUser = (name, source)=> source.some(user=> user.name === name);


import React, { createContext } from "react";

React.createContext({
    items : [],
    totalAmount : 0,
    addItem : (item)=>{},
    removeItem : (id)=>{}
});

export default createContext;
import React, { createContext } from 'react'

export const Routincontext = createContext();

const SingleProductPageProvider=({child})=>{
    const menProductsTBottomWare ="menProductsTBottomWare";
    const menProductsTopWare ="menProductsTopWare";
    const menProductsWinter ="menProductsWinter";
    const womemenProductsTopWare ="womemenProductsTopWare";

return (
    <Routincontext.Provider value={{menProductsTBottomWare,menProductsTopWare,menProductsWinter,womemenProductsTopWare}}>{child}</Routincontext.Provider>
)
}

export default SingleProductPageProvider;
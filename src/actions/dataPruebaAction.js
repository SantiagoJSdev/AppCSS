import { types } from "../types/types"




export const startDataGamesPrueba = (data) => {
    return {
        type: types.GETDATA,
        payload: data
    }
}

export const startDataGamesByNamePrueba = (data) => {
    return {
        type: types.GETDATABYNAME,
        payload: data
    }
}
export const deleteAddByNamePrueba = () => {
    return {
        type: types.DELETEBYNAME,
       
    }
}
export const orderBySortPrueba = (value) => {
    return {
        type: types.ORDERBYSORT,
        payload: value
    }
}

export const orderByRatingPrueba = (value) => {
    return {
        type: types.ORDERBYRATING,
        payload: value
    }
}
export const postVideoGamePrueba = (data)=> {

        return {
            type: types.POSTADDPRUEBA,
            payload: data
        }
    
}
export const startDataGenresPrueba = (data) => {
    return {
        type: types.GETDATABYGENRES,
        payload: data
    }
  
}
export const startDataPlatformPrueba = (data) => {
    
    return {
        type: types.GETDATABYPLATFORM,
        payload: data
    }
}
export const startDataGamesByIdDataBasePrueba = (data) => {

    return {
              
        type: types.ADDBYGAMEIDDB,
        payload: data
    }

}
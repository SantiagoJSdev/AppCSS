// state = {
//     dataGame: []
// }

import { types } from "../types/types";

export const gameReducer = (state = {}, action) => {
  
    switch (action.type) {

        case types.GETDATA:
            return {
                ...state,
                dataGame: action.payload
            }
        case types.GETDATABYGENRES:
            return {
                ...state,
                dataGenres: action.payload
            }
            case types.GETDATABYPLATFORM:
                return {
                    ...state,
                    dataPlatform: action.payload
                }

        case types.GETDATABYNAME:
            return {
                ...state,
                dataName: action.payload
                }
        case types.DELETEBYNAME:
            return {
                ...state,
                dataName: []
                    }
        case types.ADDBYGAMEIDDB:
            return {
                ...state,
                dataGameById: action.payload
                    }
        case types.POSTADDPRUEBA:
            return {
                ...state,
                dataGame: [...state.dataGame, action.payload]
            }            
        case types.ORDERBYSORT:
            let sortBy = (action.payload === 'A-Z') ?
            state.dataGame.sort((a,b)=> (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : (b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0 )
            :
            state.dataGame.sort((a,b)=> (a.name.toLowerCase() > b.name.toLowerCase()) ? -1 : (b.name.toLowerCase() > a.name.toLowerCase()) ? 1 : 0 )
            return {
                ...state,
                dataGame: sortBy
            }

        case types.ORDERBYRATING:

            let sortRating = action.payload === "minor" ?
            state.dataGame.sort( (a, b) => {
                if (a.rating > b.rating) {
                    return 1;
                }
                if (b.rating > a.rating) {
                    return -1;
                }
                return 0;
            })
            :state.dataGame.sort((a, b) =>{
                if (a.rating > b.rating) {
                    return -1;
                }
                if (b.rating > a.rating) {
                    return 1;
                }
                return 0;
            });
            return {
                ...state,
                dataGame: sortRating,
            };
        
        
    
        default:
           return state;
    }
    
};





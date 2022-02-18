import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { startDataGamesByIdDataBase } from '../actions/dataGames';
import { startDataGamesByIdDataBasePrueba } from '../actions/dataPruebaAction';
import { dataPrueba } from '../dataPrueba/dataPrueba';
import { getGameById } from '../selectors/getGameById';
import '../styles/detailStyles.css'
import { CardCss } from './CardCss';

export const DetailPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { id } = useParams()
    const gameId =  getGameById(dataPrueba, id)
    useEffect(() => {
       console.log(gameId)
       dispatch(startDataGamesByIdDataBasePrueba(gameId))
        // dispatch(startDataGamesByIdDataBase(id))
    }, [dispatch, id]);

    const state = useSelector(state => state.game.dataGameById);

    const handleDetail = () => {
        navigate('/videogame')
    }
    // aca obtengo el game x redux
    // const state = useSelector( state => state.game.dataGame );
    // const data =  getGameById(state, id);
    if (!state) {
        return <div className='Loading'>
            <h2 className='animation-loading'>
                <div></div>
                <div></div>
                <div></div>
            </h2>
        </div>
    }

    // if ( !Object.keys(state).length ) {

    //     return <Navigate to="/videogame" />;
    // }
    console.log(state)
    return <>
        <div className='detail-container'>
            <div className='detail-container-left'>
                <div className='container-left'>
                    <div className='container-left-card1'>
                        <h2>Description:</h2>
                        {
                            (state)
                                ?
                                <p>{state[0].description_raw || state[0].description}</p>
                                :
                                ''}
                    </div>
                    {/* <div className='container-left-card2'></div> */}
                </div>

            </div>
            <div className='detail-container-right'>
                <div className='container-right'>
                    <div>
                        <ul>
                            
                            {
                                state ?

                                    <li key={state[0].id}>
                                        <h2>{state[0].name}</h2>
                                        <CardCss
                                            name={state[0].name}
                                            released={state[0].released}
                                            img={state[0].image}
                                        />
                                        <button onClick={handleDetail} className='detail-btn'>Return</button>
                                    </li>
                                    :
                                    ''

                            }
                        </ul>



                    </div>
                </div>
                <div className='container-right-2'>
                    <div className='container-right-card1'>
                        <h2>Platforms:</h2>
                        <ul>{
                            state[0].platforms.map(g => (
                                (g.platform) ? <li key={g.platform.id}>{g.platform.name}</li>
                                    :
                                    <li key={g.id}>{g.name}</li>
                            ))
                        }</ul>
                    </div>
                    <div className='container-right-card2'>
                        <h2>Genres:</h2>
                        <ul>
                             {
                            state[0].genres.map(g => (
                                <li key={g.id}>{g.name}</li>
                            ))
                        }
                        </ul>
                    </div>
                    <div className='container-right-card3'>
                        <h2>Rating:</h2>
                        <ul>
                            <li>
                                <h4>{state[0].rating}</h4>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>




    </>;
};

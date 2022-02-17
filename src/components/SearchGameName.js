import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { deleteAddByName, startDataGamesByName } from '../actions/dataGames';
import { usePage } from '../hooks/usePage';

import '../styles/searchGameStyles.css'
import queryString from 'query-string';
import { InputSearch } from './InputSearch';
import { useFormVideoGame } from '../hooks/useFormVideoGame';
import { startDataGamesByNamePrueba } from '../actions/dataPruebaAction';
import { getGameByName } from '../selectors/getGameByName';

export const SearchGameName = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const name1  = queryString.parse(location.search) || '';
   // const query = new URLSearchParams(location.search);
  // const q = query.get('q') || '';
  const [formValues, handleInputChange, reset, error] = useFormVideoGame({
    name: ''
  })
  const { name } = formValues;

  /////////////////////
  const state = useSelector(state => state.game);
//////////////////////////

  useEffect(() => {

    const data = getGameByName(name1.q, state.dataGame)
    dispatch(startDataGamesByNamePrueba(data))
    // dispatch(startDataGamesByName(name1.q))
   
  }, [dispatch, name1.q])

  const { maximo, page, setpage } = usePage()

 
  // const state = useSelector(state => state.game.dataName);
  
  
 

  
  const handleNextPage = () => {
    setpage(page + 1)
  }
  const handlePrevPage = () => {
    setpage(page - 1)
  }
  if (page === 0) {
    setpage(1)
  }
  if (page === 8) {
    setpage(7)
  }

  if (!state.dataName) {
    return <div className='Loading'>
      <h2 className='animation-loading'>
      <div></div>
      <div></div>
      <div></div>
      </h2>
    </div>
  }
  const handleSearch = () => {
    dispatch(deleteAddByName())
    navigate('/videogame')
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (!Object.keys(error).length && name.length !== 0 ) {
      const data = getGameByName( name, state.dataGame)
      dispatch(startDataGamesByNamePrueba(data))
      // dispatch(startDataGamesByName(name))

    }
    reset()
  }
const styleinput = {
  
  nombre:'inputPageSearch'
}
  return <>

    <div className='container-search'>
      <div className='container-search-interno'>
        <div className='search-pages'>
          <div className='search-pages-content2'>
            <ul className='ul-game'>
              {
                (state.dataName.length > 15) ?
                  state.dataName?.slice((page - 1) * maximo, (page - 1) * maximo + maximo).map(game => (
                    <li className='ul-game-li' key={game.id}>
                      <Link to={`/detail/${game.id}`}>
                        <p>{game.name}</p>
                        <img src={game.image} alt={game.name} />
                      </Link>
                    </li>
                  ))
                  
                  :
                  (!state.dataName.length)
                  ?
                  <li className='ul-game-li' >
                      <h1>Name not found</h1>
                    </li>
                  :
                  state.dataName?.map(game => (
                    <li className='ul-game-li' key={game.id}>
                      <Link to={`/detail/${game.id}`}>
                        <p>{game.name}</p>
                        <img src={game.image} alt={game.name} />
                      </Link>
                    </li>
                  ))
              }
            </ul>
            {
              (state.dataName.length > 15)
              &&
              <div className='search-pages-btn'>
                <button className='search-btn-1' onClick={handlePrevPage}>Prev page</button>
                <button className='search-btn-2' onClick={handleNextPage}>Next page</button>
              </div>

            }
            <div className='search-return'>
            <ul>
              <li onClick={handleSearch} className='search-mail'>Return</li>
            </ul>
            <InputSearch
            handleSearchSubmit={handleSearchSubmit}
            handleInputChange={handleInputChange}
            name={name}
            style={styleinput}
            />
            </div>
          </div>














          {/* <button onClick={handleReturn}>return</button>
          <ul>
            {
              (state.length > 0) ?
                state?.map(ele => (
                  <li key={ele.id}>{ele.name}</li>
                ))
                :
                <h2>

                  <p>{state.msg}</p>
                </h2>


            }
          </ul> */}
        </div>

      </div>
    </div>
  </>;
};

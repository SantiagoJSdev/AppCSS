


export const getGenres = (data) => {

    if ( !data) {
        return [];
    }
 let genres = {}

     data.map(game => {
        
            return game.genres.map(ele => {
           
                genres[ele.name] = ele.id
            return genres

        })})
        // console.log(platform)
  return Object.keys(genres).map(ele=> ({name: ele, id: genres[ele]})) 
    
};


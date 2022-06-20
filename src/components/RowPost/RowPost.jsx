import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import {API_KEY,imgUrl} from '../../constants/constants'
import axios from '../../axios'
import './Style.css'
const RowPost = (props) =>{
  const [movies,setMovies]=useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(()=>{
     axios.get(props.urls).then((response)=>{
      setMovies(response.data.results)
     })
  },[props.urls])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data);
        if(response.data.results.length===0){
            alert('No videos')
        }else{
          
          console.log(response.data.results[0].key);
            setUrlId(response.data.results[0].key)
        }
    }).catch((error)=>{
      console.log(error)
        alert('No videos')
    })
}
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((data)=>
          <img key={data.id} onClick={(() =>handleMovie(data.id))} className={`${props.isSmall ? 'smallPoster' : 'poster'}`} src={`${imgUrl+data.backdrop_path}`} alt="poster" />
          )}
        </div>
        {
          urlId && <Youtube opts={opts} videoId={urlId}></Youtube>
        }
    </div>
  )

}

export default RowPost
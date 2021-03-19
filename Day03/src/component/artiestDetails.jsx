import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const ArtiestDetails = ({ match })=> {
    console.log(match)
    let [artiest, setArtiest] = useState({});
    let url = " http://localhost:3001/artists";
    useEffect(async () => {
        //fetch
        try {
            let response = await fetch(`${url}/${match.params.id}`);
            let data = await response.json()
            setArtiest(data)

        } catch (err) {
            console.log(err)
        }
    }, [])



    if (artiest.id) {
        return (
           
            <div className="alter alert-dark">
                  <div className=" col-12 alert alert-dark"> <Link to='/artiests' >
                     <img src="/images/db.png" alt="DataBaseMusic"></img>
                 </Link></div>
                <img src={`/images/covers/${artiest.cover}.jpg`} alt={`${artiest.name}`} style={{height:"300px"}}></img>
                <h2>{artiest.name}</h2>
                <div className="container col-6" > <p>{artiest.bio}</p></div>
               {artiest.albums.map((album)=><img src={`/images/albums/${album.cover}.jpg`} style={{height:"300px",width:"250px"}}></img>)}
            </div>
        )
    }
    return <p className="alert alert-danger">
        no student info available
   </p>
    }

 
export default ArtiestDetails
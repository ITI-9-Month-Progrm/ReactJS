import {Link} from 'react-router-dom'

const Artiest = ({artiestInfo})=>{
    return (
        <div className="m-5">
            <Link className="card-img img-fluid mx-auto d-block" to={`/artiests/${artiestInfo.id}`}>
            <div className="d-block">
            <img src={`/images/covers/${artiestInfo.cover}.jpg`} alt={`${artiestInfo.cover}`}></img>
            <center><h3 className="bg-primary text-light p-2 w-25 text-center">{artiestInfo.name}</h3></center>
            </div>
            </Link>
        </div>
       
    );

}
 
export default Artiest
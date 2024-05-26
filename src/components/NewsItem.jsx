
const Newsitem = ({title,description,src,url}) => {
    return (
              <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" style={{maxWidth:"360px"}}>
              <img src={src} style={{width:"325px",height:"250px" }} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title.slice(0,35)}</h5>
                <p className="card-text">{description? description.slice(0,90) : ''}</p>
                <a href={url} className="btn btn-primary">View Details</a>
              </div>
            </div>
    )
  }
  
  export default Newsitem
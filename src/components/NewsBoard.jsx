import { useEffect, useState } from "react"
import Newsitem from "./Newsitem";
const Newsboard = () => {
    const [articles,setArticle] = useState([])
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=feef7f23c6614ee5970fbb11c7dd0894`;
        fetch(url).then(response => response.json()).then(data => setArticle(data.articles))

    },[])
  return (
    <div>
        <h2 className="text-center">Latest <span className="text-success">News</span></h2>
        <hr/>
        {
            articles.map((item,index) =>{
                   
                  return <Newsitem key={index} title={item.title} description={item.description}
                  src={item.urlToImage} url={item.url}/>
            })
        }
    </div>
  )
}

export default Newsboard
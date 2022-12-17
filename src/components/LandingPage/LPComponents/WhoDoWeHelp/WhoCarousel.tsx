import { FC, useState, useEffect } from "react";
import style from "./WhoDoWeHelp.module.scss";
import FundationsData from "./FundationsData";
import OrganizationData from "./OrganizationsData";
import LocalsData from "./LocalsData";

interface SinglePostProps{
   type: string;
   name: string;
   goal: string;
   stuff: string[];
}
const SinglePost:FC<SinglePostProps> = ({type, name, goal, stuff}) => {
   return(
      <div className={style.single_post}>
         <div>
            <h3>{`${type}: "${name}"`}</h3>
            <p>Cel i misja: {goal}</p>
         </div>
         <span>
            {stuff.join(', ')}
         </span>
      </div>
   )
}

interface WhoCarouselProps{
   description: string;
   current_display: string;
}
const WhoCarousel:FC<WhoCarouselProps> = ({description, current_display}) => {
   const [posts, setPosts] = useState([...FundationsData]);
   const [page, setPage] = useState<number>(1);
   const [pageNumbers, setPageNumbers] = useState<number[]>([]);
   const postsPerPage = 3;

   const indexOfLastPost = page * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

   useEffect(() => {
      if(current_display === 'fund'){
         setPosts(prevState => [...FundationsData])
         setPageNumbers([]);
         for(let i = 1; i <= Math.ceil(FundationsData.length / postsPerPage); i ++){
            setPageNumbers(prevState => [...prevState, i])
         }
      }
      if(current_display === 'org'){
         setPosts(prevState => [...OrganizationData])
         setPageNumbers([]);
         for(let i = 1; i <= Math.ceil(OrganizationData.length / postsPerPage); i ++){
            setPageNumbers(prevState => [...prevState, i])
         }
      }
      if(current_display === 'loc'){
         setPosts(prevState => [...LocalsData])
         setPageNumbers([]);
         for(let i = 1; i <= Math.ceil(LocalsData.length / postsPerPage); i ++){
            setPageNumbers(prevState => [...prevState, i])
         }
      }
   },[current_display])

   return (
      <>
         <p className={style.who_description}>
            {description}
         </p>
         {
            <div className={style.who_single_post_box}>
               {
                  currentPosts.map(item => {
                     return(
                        <SinglePost 
                           key={item.index}
                           type={item.type}
                           name={item.name}
                           goal={item.goal}
                           stuff={item.stuff}
                        />
                     )
                  })
               }
            </div>
         }
         <ul className={style.who_pagination}>
            {
               pageNumbers.map(index => {
                  return(
                     <li key={index}>
                        <button 
                           onClick={() => setPage(index)}
                           className={`${style.who_pagination_button} ${page === index ? style.active_button : ''}`}
                        >
                           {index}
                        </button>
                     </li>
                  )
               })
            }
         </ul>
      </>
   );
}
 
export default WhoCarousel;
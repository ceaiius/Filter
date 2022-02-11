import { useEffect } from "react";
import React from "react";
import {motion} from "framer-motion"

function Filter({setActiveGenre, activeGenre, setFiltered, popular}){

    useEffect(()=>{
        if(activeGenre === 0) {
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
        setFiltered(filtered);
    }, [activeGenre])

    return (
        <div className="filter-container">
            <motion.button
             whileHover={{scale: 1.2,transition: { type: "spring", stiffness: 500},}} 
             whileTap={{ scale: 1.2 }} 
             className={activeGenre === 0 ? "active" : ""} 
             onClick={()=>setActiveGenre(0)}>All</motion.button>
            <motion.button 
             whileHover={{scale: 1.2,transition: { type: "spring", stiffness: 1000 },}} 
             whileTap={{ scale: 1.2 }} 
            className={activeGenre === 35 ? "active" : ""} 
            onClick={()=>setActiveGenre(35)}>Comedy</motion.button>
            <motion.button 
             whileHover={{scale: 1.2,transition: { type: "spring", stiffness: 1500 },}} 
             whileTap={{ scale: 1.2 }} 
            className={activeGenre === 28 ? "active" : ""} 
            onClick={()=>setActiveGenre(28)}>Action</motion.button>
        </div>
    )
}

export default Filter;
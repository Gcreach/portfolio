import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const Project = ({project}) => {
    return <div className="col">
        <div className="card">
 <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
  <img src={require(`../../assets/projects/${project.name}.JPG`)} class="card-img" alt={project.name}/>
  <div className="card-img-overlay">
    <h4 className="card-title">
        <a href={project.link} className="card-text">{project.name}</a>
    </h4>
    <div className="description">
    <p className="card-text">{project.description}</p>
    <a href={project.repo} className="card-text" >Repo</a>
    </div>
  </div>
</div>
    </div>
    };

    export default Project;
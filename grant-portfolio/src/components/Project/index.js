import React from "react";
import { motion } from "framer-motion";

const Project = ({project}) => {
    return <div className="col">
        <div class="card">
 <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
  <img src={require(`../../assets/projects/${project.name}.JPG`)} class="card-img" alt={project.name}/>
  <div class="card-img-overlay">
    <h4 class="card-title">
        <a href={project.link} className="card-text">{project.name}</a>
        <a href={project.repo} className="card-text" ><i className="fab fa-github"></i></a>
    </h4>
    <p class="card-text">{project.description}</p>
  </div>
</div>
    </div>
    };

    export default Project;
import React from 'react';

const Project = props => {
  const { title, image, desc, link } = props.project;

  return(
    <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
      <h3>{title}</h3>
      <img src={image} alt='profile' style={{width: 200, height: 120}} />
      <p>{desc}</p>
      <a href={link}>{link}</a>
    </div>
  )

}

export default Project;

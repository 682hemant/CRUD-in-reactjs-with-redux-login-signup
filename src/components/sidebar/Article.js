import React from 'react'
import './Article.css'


const Article = (props) => (        
             
            <div  className="article" onClick={props.showArea}>
                <h5> {props.title}</h5>
                {/* <p className="text-seconsary">{props.area}</p> */}
                <button onClick={props.clicked}>  <i class="far fa-trash-alt delete"></i>  </button>
                <button onClick={props.handleEdit}> <i class="fas fa-edit"></i></button>
                
                </div>
    )         
            

export default Article;


// onClick={props.clicked} 
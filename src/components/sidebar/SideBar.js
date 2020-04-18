import React ,{Fragment} from 'react'
//  import Modal from './Modal'
import './SideBar.css'
//  import Article from './Article'


function SideBar(props) {
  
  
  return (
    // <div className="container-fluid  ">
    //   <div className="row">
          <Fragment>
          <div className="upperlinks">
            <span> <button onClick={props.clicked}><i className="fas fa-plus"></i> </button> </span>
            <span><i className="fas fa-sync-alt"></i>  </span>
            <span><i className="fas fa-cog"></i> </span>
          </div>
          <div>
            <ul >
              <li> <button > <i class="far fa-sticky-note"></i> </button> all notes </li>
              <li> <button><i class="fas fa-star"></i> </button> Favourites </li>
              <li > <button> <i class="fas fa-trash"></i></button> Trash</li>
              <li>  categories  </li>


            </ul>
          </div>
          <div>
            <ul >
              <li> <button><i class="fas fa-folder"></i>  </button> goals </li>
              <li> <button><i class="fas fa-folder"></i> </button> health </li>
              <li> <button><i class="fas fa-folder"></i> </button> design</li>
              <li> <button><i class="fas fa-folder"></i>  </button> development </li>
              <li> <button><i class="fas fa-folder"></i> </button> personal </li>
              <li > <button><i class="fas fa-folder"></i> </button> recipes</li>
              <li> <i class="fas fa-plus"></i> categories </li>


            </ul>
          </div>


   
    </Fragment>
  )
}
export default SideBar;

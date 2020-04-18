import React, { Fragment, Component } from 'react'
import ReactDom from 'react-dom';
import './Modal.css'
import './BackDrop'
import BackDrop from './BackDrop';


class Modal extends Component {
  constructor(props) {
    super(props)
        
    this.state = {
      title: '',
      area: ''

    }
  }
  titleChangeHandler = (e) => {
    this.setState({ title: e.target.value });
  }
  areaChangeHandler=(e)=>{
    this.setState({area:e.target.value});
  }
  clearChangeHandler=()=>{
    this.setState({
      title:'',
      area:''
    })
    ReactDom.findDOMNode(this.refs.myInput).focus();
  }

  render() {
    return (

      <Fragment>
        <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className="Modal"
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
            <p className="text-info article-heading"> Add a article</p>
          <input className="field" type="text"
            placeholder="title..."
            value={this.state.title}
            onChange={this.titleChangeHandler}
              ref="myInput"  />
          <textarea placeholder="article..." cols="23" rows="4"
          value={this.state.area}
          onChange={this.areaChangeHandler}
              />        <br />

          <button className="btn btn-primary rounded-pill" onClick={() => this.props.onAddedArticle(this.state.title,this.state.area)}> save </button>
          <button className="btn btn-danger rounded-pill" onClick={this.props.modalClosed}> cancel</button>
          <button className="btn btn-outline-primary rounded-pill" onClick={this.clearChangeHandler}>  clear   </button>
        </div>
      </Fragment>
    )
  }
}
export default Modal



















// import React, { Component } from 'react'
// import {Button ,Modal} from 'react-bootstrap';

//  class Modale extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//              show:false
//         }
//     }
//     handleModal=()=>{
//         this.setState({show:!this.state.show})
//     }

//     render() {
//         return (
//             <div>
//                <Button  onClick={this.handleModal()}> </Button> 
//                <Modal show={this.state.show}> 
//                    <Modal.header closeButton> Modal heading</Modal.header>
//                    <Modal.body>  Hello everyon    </Modal.body>
//                    <Modal.Footer> 
//                        <Button onClick={this.handleModal()}> close</Button>

//                    </Modal.Footer>
//                </Modal>

//             </div>
//         )
//     }
// }
// export default Modale;

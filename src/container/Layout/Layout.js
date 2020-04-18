import React, { Component } from 'react'
import Modal from '../../components/sidebar/Modal'
import SideBar from '../../components/sidebar/SideBar'
import { connect } from 'react-redux'
//import {storeresult} from '../../redux';
import * as actionType from '../../redux/actions/index'
import Article from '../../components/sidebar/Article'
import './Layout.css'
import Area from '../../components/area'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      editId:null
    }

  }
  clickHandler = () => {
    this.setState({
      show: true
    })
  }
  cancelHandler = () => {
    this.setState({
      show: false
    })
  }
  handleEdit(id){
    var articles =this.props.spr;
    console.log(articles);
    for(let i=0;i<articles.length;i++){
      if(articles[i].id===id){
          let article =articles[i];
          console.log(article);
          this.setState({
              title:article.title,
              area:article.area,
              show:true
          });

      }
    }
  }


  render() {
    return (
      <div>
            {/* <SideBar clicked={this.clickHandler} /> */}
        <Modal
          onAddedArticle={this.props.onAddedArticle}
          show={this.state.show}
          modalClosed={this.cancelHandler} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-2 sidebar bg-dark">
            <SideBar clicked={this.clickHandler} />
            </div>
           <div className="col-3 art">
        {this.props.spr.map(article => (
          <Article
            key={article.id}
            title={article.title}
            // area={article.area}
            clicked={() => this.props.onRemovedArticle(article.id)} 
              handleEdit={()=>this.handleEdit(article.id)}
                showArea={()=>this.props.onShowArea(article.id)}/>
        ))}
        </div>
        <div className="col-7">
            <Area /> 
        </div>
        
        
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    spr: state.str.articles,
    // articleOutput: state.str.showArticle
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddedArticle: (title, area)  => dispatch( actionType.storeArticle({articleData: {title: title, area: area }})),
    onRemovedArticle: id => dispatch(actionType.deleteArticle(id)),
    onShowArea:id=>dispatch(actionType.showArea(id))
   
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(Layout);


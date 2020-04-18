import React from 'react';
//  import 'bootstrap/dist/css/bootstrap.min.css';
import Builder from './container/Builder'

import {connect} from 'react-redux'

import AuthorizedRoutes from './routes/authorized'
function App(props) {
    
  const isRedirect=props.usr;
  
  return (

    <div >
         
          {isRedirect
            ? <AuthorizedRoutes />
            :<Builder/>
            }  
         
      {/* <Layout /> */}
      
    </div>
  );
}
 const  mapStateToProps=(state)=>{
  return{
    usr:state.sgn.isLogged
  };
};

export default connect(mapStateToProps)(App);




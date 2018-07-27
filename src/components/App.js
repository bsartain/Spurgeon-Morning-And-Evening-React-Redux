import React, { Component } from 'react';
import { getPosts, showPost } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class App extends Component {

  componentDidMount(){
    this.props.getPosts();   
    window.scrollTo(0, 0); 
  }

  showSinglePost(){
    return _.map(this.props.posts, post => {

      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth()+1;

      today = mm + '/' + dd;

      if(post.date === today){
        console.log('POST', post)
        return(
          <div key={post.id} >
            <div className="devo-container" dangerouslySetInnerHTML={{__html: post.body}}></div>
            <div className="keyVerse" dangerouslySetInnerHTML={{__html: post.keyverse}}></div>
          </div>
        )
      }
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          {this.showSinglePost()}
        </div>      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    posts: state.posts,
    single: state.single
  }
}

export default connect(mapStateToProps, { getPosts, showPost })(App)
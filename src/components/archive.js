import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, showArchivePost, filterPosts } from '../actions';
import _ from 'lodash';

class Archive extends Component {
  constructor(){
    super();

    this.state = {
      term: ''
    }

    this.filterArchive = this.filterArchive.bind(this);
  }

  componentDidMount(){
    this.props.getPosts();
    window.scrollTo(0, 0);
  }

  getArchivePostAndRedirect(post){
    this.props.showArchivePost(post);
    this.props.history.push(`archive-post/${post.id}`);
  }

  renderPosts(term){  
    
    let filteredPosts = this.props.posts;

    return _.map(filteredPosts, post => {
      return (       
        <div className="col-md-4 devo" key={post.id} onClick={() => this.getArchivePostAndRedirect(post)}>
          <div>
            <p className="card-title">{post.keyverse}</p>
            <hr className="hr-line"/>
            <p className="devoTime">{post.point}: {post.date}</p>
          </div>
        </div>        
      )
    })
  }

  filterArchive(e){
    this.setState({term: e.target.value});
    this.props.filterPosts(this.state.term);
  }

  render() {
    return (         
        <div className="row">
          <div className="col-md-4">
            <h1>Archive</h1>
          </div>
          <div className="col-md-8 text-right">
            <input onChange={this.filterArchive} placeholder=" Search..."/>
          </div>
          {this.renderPosts()}        
        </div>
    )
  }
}


const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps, { getPosts, showArchivePost, filterPosts })(Archive)

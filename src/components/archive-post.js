import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showPostOnLoad } from '../actions';
import _ from 'lodash';
import RefTagger from './RefTagger'

class ArchivePost extends Component {

  componentDidMount(){
    this.props.showPostOnLoad();
    window.scrollTo(0, 0);
  }
  
  renderPostOnLoad(){

      return _.map(this.props.singleArchivePost, post => {
        if(post.id == this.props.match.params.id){
          return (
            <div>
              <div key={post.id} dangerouslySetInnerHTML={{__html: post.body}}></div>
              <RefTagger/>
            </div>
          )
        }
      });
  }

  render() {
    return (
      //dangerouslySetInnerHTML={{__html: this.props.singleArchivePost.body}}
      <div>
        {this.renderPostOnLoad()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    singleArchivePost: state.single
  }
}

export default connect(mapStateToProps, { showPostOnLoad })(ArchivePost)



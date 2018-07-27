import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProverbs } from '../actions'

class Proverbs extends Component {

    componentDidMount(){
        this.props.getProverbs();
      }
    
      renderProverbs(){
          for(let key in this.props.proverbs){
            if(key === 'passages'){
                return(
                    <div dangerouslySetInnerHTML={ { __html: this.props.proverbs[key] } } />
                )
            }
    
          }
      }
    
      render() {
        return (
          <div className="row">
            <div className="col-md-12">
                {this.renderProverbs()}
            </div>      
          </div>
        );
      }
    }
    
    const mapStateToProps = (state) => {
      return{
          proverbs: state.proverbs.data
      }
    }

export default connect(mapStateToProps, { getProverbs })(Proverbs)
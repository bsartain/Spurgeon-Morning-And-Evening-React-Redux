import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEcclesiastes } from '../actions'

class Ecclesiastes extends Component {

    componentDidMount(){
        this.props.getEcclesiastes();
      }
    
      renderEcclesiastes(){
          for(let key in this.props.ecclesiastes){
            if(key === 'passages'){
                return(
                    <div dangerouslySetInnerHTML={ { __html: this.props.ecclesiastes[key] } } />
                )
            }
    
          }
      }
    
      render() {
        return (
          <div className="row">
            <div className="col-md-12">
                {this.renderEcclesiastes()}
            </div>      
          </div>
        );
      }
    }
    
    const mapStateToProps = (state) => {
      return{
          ecclesiastes: state.ecclesiastes.data
      }
    }

export default connect(mapStateToProps, { getEcclesiastes })(Ecclesiastes)
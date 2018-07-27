import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPsalms } from '../actions'

class Psalms extends Component {
  
  componentDidMount(){
    this.props.getPsalms();
  }

  renderPsalm(){
      for(let key in this.props.psalm){
        if(key === 'passages'){
            return(
                <div dangerouslySetInnerHTML={ { __html: this.props.psalm[key] } } />
            )
        }

      }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
            {this.renderPsalm()}
        </div>      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
      psalm: state.psalms.data
  }
}

export default connect(mapStateToProps, { getPsalms })(Psalms)
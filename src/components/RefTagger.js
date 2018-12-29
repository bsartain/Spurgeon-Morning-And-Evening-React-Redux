import React, { Component } from 'react'

const scriptIsAdded = false

if (typeof window !== "undefined" && window !== null) {
    if (window.refTagger == null) {
      window.refTagger = {
            settings: {
              bibleVersion: "ESV"     
            }
      };
    }
}

export default class RefTagger extends Component {
    
    componentDidMount(){
        if (!scriptIsAdded) {
            return this.addScript();
        }
    }

    addScript() {
        var el, s;
        el = document.createElement('script');
        el.type = 'text/javascript';
        el.async = true;
        el.src = 'https://api.reftagger.com/v2/RefTagger.js';
        s = document.getElementsByTagName('script')[0];
        return s.parentNode.insertBefore(el, s);
    }

    render() {
        setTimeout(() => {
            window.refTagger.tag();
        }, 500)
        return (
            <div>
                
            </div>
        )
    }
}








// refTagger = React.createClass({

//   displayName: 'refTagger',
//   componentDidMount: function() {
//     if (!scriptIsAdded) {
//       return this.addScript();
//     }
//   },

//   componentDidUpdate: function(prevProps, prevState) {
//     window.refTagger.tag();
//   },

//   addScript: function() {
//     var el, s;
//     scriptIsAdded = true;
//     el = document.createElement('script');
//     el.type = 'text/javascript';
//     el.async = true;
//     el.src = 'https://api.reftagger.com/v2/RefTagger.js';
//     s = document.getElementsByTagName('script')[0];
//     return s.parentNode.insertBefore(el, s);
//   },
//   render: function() {
//     return script(null);
//   }

// });

// module.exports = refTagger;
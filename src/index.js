import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Switch, Route, HashRouter } from 'react-router-dom'

import App from './components/App';
import reducers from './reducers';
import About from './components/about';
import Archive from './components/archive';
import Links from './components/links';
import ArchivePost from './components/archive-post';
import Meta from './components/meta';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <HashRouter>
        <div className='top-level'>
            <Meta/>
            <Links />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/archive" component={Archive} />
                    <Route path="/archive-post/:id" component={ArchivePost} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </div>
        </HashRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();

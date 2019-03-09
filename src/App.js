import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import dmsApp from "./reducers";
import './App.scss';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import MainContainer from "./student/container/Main/MainContainer";
import AdminMainContainer from "./admin/container/Main/AdminMainContainer";
import ApplyMainContainer from "./student/container/Apply/ApplyMainContainer";
import DomitoryRuleContainer from "./admin/container/DomitoryRule/DomitoryRuleContainer"
import DomitoryRuleWriteContainer from "./admin/container/DomitoryRule/DomitoryRuleWriteContainer"
import DomitoryRuleEditContainer from "./admin/container/DomitoryRule/DomitoryRuleEditContainer"
import CommonDesign from "./admin/common/commonDesign/CommonDesign"
import ShowDomitoryRuleContainer from "./admin/container/DomitoryRule/ShowDomitoryRuleContainer"
import NoticeContainer from './admin/container/Notice/NoticeContainer';
import NoticeWriteContainer from './admin/container/Notice/NoticeWriteContainer';
import NoticeEditContainer from './admin/container/Notice/NoticeEditContainer';
import StudentDefaultLayout from './student/component/DefaultLayout/DefaultLayout';
import MyPageContainer from "./student/container/MyPage/MyPageContainer";
import QnaContainer from './admin/container/Qna/QnaContainer'
import QnaWriteContainer from './admin/container/Qna/QnaWriteContainer'
import FixContainer from './admin/container/Fix/FixContainer';
import FixDetailContainer from './admin/container/Fix/FixDetailContainer';
import SurveyContainer from './admin/container/Survey/SurveyContainer';
import SurveyWriteContainer from './admin/container/Survey/SurveyWriteContainer';
import LoginConatiner from './admin/container/Login/LoginContainer';
import ShowNoticeContainer from './admin/container/Notice/ShowNoticeContainer';
import GoingOutContainer from './admin/container/GoingOut/GointOutContainer';

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  dmsApp(history), 
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history)
    )
  )  
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <Switch>
              <Route path="/admin" component={AdminMainContainer} exact/>   
              <Route path="/mypage" component={MyPageContainer} exact/>
              <Route path="/admin/login" component={LoginConatiner} exact/>
              <Route path="/admin/:uri?" render={()=>
                <CommonDesign history = {history}>
                  <Switch>
                    <Route path="/admin/domitoryrule" component={DomitoryRuleContainer} exact/>
                    <Route path="/admin/domitoryrule/write" component={DomitoryRuleWriteContainer} exact />
                    <Route path="/admin/domitoryrule/edit/:postId" component={DomitoryRuleEditContainer} exact />
                    <Route path="/admin/domitoryrule/:postId" component={ShowDomitoryRuleContainer}/>
                    <Route path="/admin/notice" component={NoticeContainer} exact/>
                    <Route path="/admin/notice/write" component={NoticeWriteContainer} exact/>
                    <Route path="/admin/notice/edit/:postId" component={NoticeEditContainer} exact />
                    <Route path="/admin/notice/:postId" component={ShowNoticeContainer}/>
                    <Route path="/admin/qna" component={QnaContainer} exact/>
                    <Route path="/admin/qna/write" component={QnaWriteContainer} exact/>
                    <Route path="/admin/fix" component={FixContainer} exact/>
                    <Route path="/admin/fix/:uri" component={FixDetailContainer} exact/>
                    <Route path="/admin/goingout" component={GoingOutContainer} exact/>
                  </Switch>
                </CommonDesign>
              }
              />
              <Route path="/:uri?" render={() => 
                <Fragment>
                  <StudentDefaultLayout/>
                  <Switch>
                    <Route path="/" component={MainContainer} exact/>
                    <Route path="/apply" component={MainContainer} exact/>
                    <Route path="/post" component={MainContainer} exact/>
                    <Route path="/extra" component={MainContainer} exact/>
                  </Switch>
                </Fragment>
              }/>
              
            }/>
              <Redirect to="/"/>
              {/* <Route path="/admin" component={} exact/> */}
            </Switch>
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

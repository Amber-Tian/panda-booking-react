import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Nav from './components/Nav';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Redirect exact from="/" to="/money"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

function NoMatch() {
  return (
    <div>地址错误，页面不存在。<Link to="/">返回首页</Link></div>
  );
}

function Money() {
  return (
    <Wrapper>
      <Main>
        <h2>记账</h2>
      </Main>
      <Nav/>
    </Wrapper>
  );
}

function Tags() {
  return (
    <Wrapper>
      <Main>
        <h2>标签</h2>
      </Main>
      <Nav/>
    </Wrapper>
  );
}

function Statistics() {
  return (
    <Wrapper>
      <Main>
        <h2>统计</h2>
      </Main>
      <Nav/>
    </Wrapper>
  );
}

export default App;

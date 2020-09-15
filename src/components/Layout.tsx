import Nav from './Nav';
import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  background: #f5f5f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  )
}

export default Layout
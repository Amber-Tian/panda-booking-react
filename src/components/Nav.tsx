import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import x from '../icons/panda.svg'

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      > img {
        width: 24px;
        height: 24px;
      }
    }
  }
  `;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <img src={x} alt='记账'/>
          <Link to="/money">
            记账
          </Link>
        </li>
        <li>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
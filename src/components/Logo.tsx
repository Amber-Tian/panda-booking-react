import React from 'react'
import styled from 'styled-components';
import Icon from './icon';

const Wrapper = styled.div`
  min-height: 54px;
    background-color: #42b983;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .icon {
      width: 40px;
      height: 40px;
      margin-left: 12px;
    }

    > p {
      font-size: 20px;
      text-align: center;
      margin-right: 50%;
      transform: translate(50%);
    }
`

const Logo: React.FC = () => {
  return (
    <Wrapper>
      <Icon name="panda" />
      <p>熊猫记账</p>
    </Wrapper>
  )
}

export default Logo
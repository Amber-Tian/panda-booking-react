import React, {useState} from 'react';
import styled from 'styled-components';
import Icon from '../../components/icon';

const TypesWrapper = styled.ul`
  display: flex;
  text-align: center;
  font-size: 18px;
  
  > li {
    width: 50%;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;

    > .icon {
      margin-right: 8px;
      width: 24px;
      height: 24px;
    }
    
    &.selected {
      font-size: 24px;
    }
  }
`
type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void
}
const Types: React.FC<Props> = (props) => {
  const typeMap = {'-': '支出', '+': '收入'}
  type Keys = keyof typeof typeMap
  const [typeList] = useState<Keys[]>(['-', '+'])
  const type = props.value
  return (
    <TypesWrapper>
      {typeList.map(t =>
        <li className={type === t ? 'selected' : ''}
            onClick={() => {props.onChange(t)}}
            key={t}
        >
          {type === t  ? <Icon name="bamboo" /> : ''}
          {typeMap[t]}
        </li>
      )}
    </TypesWrapper>
  )
}

export default Types
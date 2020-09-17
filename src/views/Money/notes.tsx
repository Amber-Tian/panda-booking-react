import React, {ChangeEventHandler} from 'react';
import styled from 'styled-components';

const Wrapper = styled.label`
  background: #f5f5f5;
  display: flex;
  align-items: center;
  font-size: 16px;
  padding-left: 16px;

  input {
    padding: 16px;
    background: transparent;
    border: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    outline: none;
  }
`
type Props = {
  value: string,
  onChange: (value: string) => void
}
const Notes: React.FC<Props> = (props) => {
  const notes = props.value
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value)
  }
  return (
    <Wrapper>
      <span>备注</span>
      <input type="text" placeholder="在这里添加备注"
             value={notes}
             onChange={onChange}
      />
    </Wrapper>
  )
}

export default Notes

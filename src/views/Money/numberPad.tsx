import React, {useState} from 'react';
import styled from 'styled-components';
import Icon from '../../components/icon';

const Wrapper = styled.div`
  .topWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, .25),
    inset 0 3px 3px -3px rgba(0, 0, 0, .25);
  
    .notes {
      background: #f5f5f5;
      display: flex;
      align-items: center;
      font-size: 16px;
      padding-left: 8px;
      width: 55%;
  
      input {
        padding: 8px;
        background: transparent;
        border: none;
        width: 80%;
        outline: none;
      }
    }
  
    .output {
      font-size: 32px;
      font-family: Consolas, monospace;
      text-align: right;
      padding: 8px;
      width: 45%;
    }
  }
  
  .buttons {
    &:after{
      content: ' ';
      display: block;
      clear: both;
    }
    height: 256px;
    background: linear-gradient(to bottom right, #9adbbe, #42b983);
  
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: 1px solid #9adbbe;
      outline: none;
  
      &.ok {
        height: 128px;
        float: right;
      }
  
      &.zero {
        width: 50%;
      }
  
      > .icon {
        width: 40%;
        height: 40%;
      }
    }
  }
`;
type Props = {
  value: number,
  onChange: (value: number) => void,
  onOk: () => void,
  value2: string,
  onChange2: (value: string) => void
}
const NumberPad: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState(props.value.toString());
  const setOutput = (output: string) => {
    _setOutput(output);
    props.onChange(parseFloat(output));
  };
  const inputContent: any = (event: React.MouseEvent) => {
    const button = (event.target as HTMLButtonElement);
    const input = button.textContent!;
    if (output.length === 9) {return;}
    if (output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        setOutput(input);
      } else {
        setOutput(output + input);
      }
      return;
    }
    if (output.indexOf('.') >= 0 && input === '.') {return;}

    setOutput(output + input);
  };

  const remove = () => {
    if (output.length === 1) {
      setOutput('0');
    } else {
      setOutput(output.slice(0, -1));
    }
  };
  const clear = () => {
    setOutput('0');
  };
  const Ok = () => {
    setOutput('0');
    props.onOk();
  };

  const today = `${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${new Date().getDate()}`;
  const [day, setDay] = useState(props.value2);

  return (
    <Wrapper>
      <div className="topWrapper">
        <label className="notes">
          <span>日期</span>
          <input type="date" value={day}
                 max={today}
                 onChange={(e) => setDay(e.target.value)}
          />
        </label>
        <div className="output">{output}</div>
      </div>
      <div className="buttons">
        <button onClick={inputContent}>1</button>
        <button onClick={inputContent}>2</button>
        <button onClick={inputContent}>3</button>
        <button onClick={remove}>
          <Icon name="delete"/>
        </button>
        <button onClick={inputContent}>4</button>
        <button onClick={inputContent}>5</button>
        <button onClick={inputContent}>6</button>
        <button onClick={clear}>清空</button>
        <button onClick={inputContent}>7</button>
        <button onClick={inputContent}>8</button>
        <button onClick={inputContent}>9</button>
        <button onClick={Ok} className="ok">OK</button>
        <button onClick={inputContent} className="zero">0</button>
        <button onClick={inputContent}>.</button>
      </div>
    </Wrapper>
  );
};

export default NumberPad;
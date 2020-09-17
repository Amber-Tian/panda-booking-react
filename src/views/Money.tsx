import Layout from 'components/Layout';
import React, {useState} from 'react';
import Types from './Money/types';
import NumberPad from './Money/numberPad';
import Tags from './Money/tags';
import Notes from './Money/notes';
import styled from 'styled-components';
import {useRecords} from '../lib/useRecords';

const MoneyLayout = styled(Layout)`
  justify-content: flex-end;
`;

const TypesWrapper = styled.div`
  background: #42b983;
  position: absolute;
  top: 0;
  width: 100%;
`;

const today = `${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${new Date().getDate()}`;

const defaultSelectedItem = {
  tagIds: [] as number[],
  notes: '',
  type: '-' as ('-' | '+'),
  amount: 0,
  createAt: [today, '']
};

function Money() {
  const [selected, setSelected] = useState(defaultSelectedItem);
  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功');
      setSelected(defaultSelectedItem);
    }
  };
  return (
    <MoneyLayout>
      <TypesWrapper>
        <Types value={selected.type} onChange={type => onChange({type})}/>
      </TypesWrapper>
      <Tags value={selected.tagIds} onChange={tagIds => onChange({tagIds})}/>
      <Notes value={selected.notes} onChange={notes => onChange({notes})}/>
      <NumberPad value={selected.amount}
                 onChange={amount => onChange({amount})}
                 value2={selected.createAt}
                 onChange2={createAt => onChange({createAt})}
                 onOk={submit}
      />
    </MoneyLayout>
  );
}

export default Money;
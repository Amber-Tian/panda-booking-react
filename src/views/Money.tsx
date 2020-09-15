import Layout from 'components/Layout'
import React, {useState} from 'react';
import Types from './Money/types';
import NumberPad from './Money/numberPad';
import Tags from './Money/tags';
import Notes from './Money/notes';
import styled from 'styled-components';

const MoneyLayout = styled(Layout)`
  justify-content: flex-end;
`
function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    notes: '',
    type: '-' as ('-' | '+'),
    amount: 0
  })
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  return (
    <MoneyLayout>
      <Types value={selected.type} onChange={type => onChange({type})}/>
      <Tags value={selected.tags} onChange={tags => onChange({tags})}/>
      <Notes value={selected.notes} onChange={notes => onChange({notes})}/>
      <NumberPad value={selected.amount} onChange={amount => onChange({amount})}/>
    </MoneyLayout>
  );
}

export default Money
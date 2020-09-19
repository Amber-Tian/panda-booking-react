import Layout from 'components/Layout';
import React, {ReactNode, useState} from 'react';
import Logo from '../components/Logo';
import Types from './Money/types';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../lib/useRecords';
import {useTags} from '../lib/useTags';

const TypesWrapper = styled.div`
  background: white;
`;

const Title = styled.h3`
  padding: 0 16px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Li = styled.li`
  padding: 0 16px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  overflow: hidden;

  &:not(:last-child) {
    border-bottom: 1px dashed #ccc;
  }

  > .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const NoResult = styled.div`
  padding: 16px;
  text-align: center;
`;

function Statistics() {
  const [type, setType] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const selectedRecords = records.filter(i => i.type === type);
  const hash: { [key: string]: RecordItem[] } = {}; // {'YYYY-MM-DD': [records, records, ...]}

  selectedRecords.forEach(i => {
    const key = i.createAt[0];
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(i);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  const totalMoney = (item: RecordItem[]) => {
    const amounts = item.map(i => i.amount);
    return amounts.reduce((total, i) => {
      return total + i;
    }, 0);
  };

  return (
    <Layout>
      <Logo/>
      <TypesWrapper>
        <Types value={type} onChange={value => setType(value)}/>
      </TypesWrapper>
      {selectedRecords.length === 0 ? <NoResult>目前没有相关记录</NoResult> :
        array.map(([date, records]) =>
          <ul key={date}>
            <Title>{date}<span>￥{totalMoney(records)}</span></Title>
            {records.map(t =>
              <ul key={Math.random()}>
                <Li>
                  {t.tagIds
                    .map(i => <span key={i}>{getName(i)}</span>)
                    .reduce((result, span, index, array) =>
                      result.concat(index < array.length - 1 ? [span, '&'] : [span]), [] as ReactNode[])
                  }
                  <span className="notes">{t.notes}</span>
                  <span>￥{t.amount}</span>
                </Li>
              </ul>
            )}
          </ul>
        )}
    </Layout>
  );
}

export default Statistics;
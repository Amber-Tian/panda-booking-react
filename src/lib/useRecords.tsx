import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
  tagIds: number[]
  notes: string
  type: '-' | '+'
  amount: number
  createAt: string
}
const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);

  const addRecord = (record: RecordItem) => {
    if (record.amount === 0 || record.amount === 0.) {
      alert('请输入正确金额');
      return false;
    }
    if (record.tagIds.length === 0) {
      alert('请选择标签');
      return false;
    }
    setRecords([...records, record]);
    return true;
  };

  return {records, addRecord};
};

export {useRecords};
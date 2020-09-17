import Layout from '../components/Layout';
import Icon from '../components/icon';
import styled from 'styled-components';
import React, {useRef} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useTags} from '../lib/useTags';

const Wrapper = styled.div`
  .navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 12px 16px;

    > span > .icon {
      width: 24px;
      height: 24px;
    }

    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }

  .tagName {
    background: #fff;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-left: 16px;
    margin-top: 8px;

    .name {
      /*padding-right: 16px;*/
    }

    input {
      font-size: 14px;
      padding: 16px;
      background: transparent;
      border: none;
      flex-grow: 1;
      outline: none;
    }
  }

  .updateTag, .removeTag {
    font-size: 16px;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 20px;
    margin: 0 36px;
    color: #fff;
    outline: none;
  }

  .button-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 28px;

    > .removeTag {
      background-color: #FF4D4F;
    }

    > .updateTag {
      background-color: #42b983;
    }
  }
`;
type Params = {
  id: string
}
const EditLabel: React.FC = () => {
  const {findTag, removeTag, updateTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  const history = useHistory();
  const refInput = useRef<HTMLInputElement>(null);
  const tagContent = (tag: { id: number, name: string }) => (
    <div>
      <label className="tagName">
        <span className="name">标签名</span>
        <input type="text" placeholder="请输入标签名" ref={refInput}
               value={tag.name}
               onChange={(e) => updateTag(tag.id, {name: e.target.value})}
        />
      </label>
      <div className="button-wrapper">
        <button className="updateTag"
                onClick={() => {
                  if (!refInput.current) { return; }
                  if (refInput.current.value === '') {
                    window.alert('标签名为空');
                  } else {history.goBack();}
                }}
        >保存
        </button>
        <button className="removeTag"
                onClick={() => {
                  if (window.confirm('确认删除标签？')) {
                    removeTag(tag.id);
                    history.goBack();
                  }
                }}
        >删除
        </button>
      </div>
    </div>
  );
  return (
    <Layout>
      <Wrapper>
        <div className="navBar">
          <span onClick={() => {
            if (!refInput.current) { return; }
            if (refInput.current.value === '') {updateTag(parseInt(id), {name: '无'})}
            history.goBack();
          }}>
            <Icon name="left"/>
          </span>
          <span className="title">编辑标签</span>
          <span className="rightIcon"/>
        </div>
        {tag ? tagContent(tag) : <hr/>}
      </Wrapper>
    </Layout>
  );
};

export default EditLabel;
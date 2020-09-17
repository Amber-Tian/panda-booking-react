import Layout from 'components/Layout'
import React from 'react';
import Logo from '../components/Logo'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../components/icon';
import {useTags} from '../lib/useTags';

const Wrapper = styled.div`
  .tags {
    background-color: #fff;
    padding-left: 16px;

    > .tag {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
      color: #000;

      .icon {
        color: #333;
        margin-right: 16px;
        width: 18px;
        height: 18px;
      }
    }
  }

  .createTag {
    font-size: 16px;
    background-color: #42b983;
    color: #ffffff;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
    outline: none;

    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 28px;
    }
  }
`

function Labels() {
  const {tags, addTag} = useTags()
  return (
    <Layout>
      <Logo />
      <Wrapper>
        <div className="tags">
          {tags.map(t =>
            <Link to={'/labels/' + t.id}
                  className="tag"
                  key={t.id}
            >
              <span>{t.name}</span>
              <Icon name="right" />
            </Link>
          )}
        </div>
        <div className="createTag-wrapper">
          <button className="createTag" onClick={addTag}>新建标签</button>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default Labels
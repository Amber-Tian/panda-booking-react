import React from 'react';
import styled from 'styled-components';
import {useTags} from '../../lib/useTags';

const TagsWrapper = styled.div`
  overflow: auto;
  font-size: 14px;
  padding: 16px;

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      cursor:pointer;
      background: #d9d9d9;
      height: 24px;
      border-radius: 12px;
      line-height: 24px;
      padding: 0 16px;
      margin: 4px 6px;

      &.selected {
        background: #42b983;
        color: white;
      }
    }
  }

  > div {
    padding-top: 16px;

    button {
      cursor:pointer;
      outline: none;
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
`
type Props = {
  value: number[],
  onChange: (value: number[]) => void
}

const Tags: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags()
  const selectedTagIds = props.value
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId)
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId))
    }else{
      props.onChange([...selectedTagIds, tagId])
    }
  }
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''
  return (
    <TagsWrapper>
      <ul>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => {onToggleTag(tag.id)}}
              className={getClass(tag.id)}
          >{tag.name}</li>
        )}
      </ul>
      <div>
        <button onClick={addTag}>新增标签</button>
      </div>
    </TagsWrapper>
  )
}

export default Tags
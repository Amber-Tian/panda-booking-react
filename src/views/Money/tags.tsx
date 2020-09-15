import React, {useState} from 'react';
import styled from 'styled-components';

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
  value: string[],
  onChange: (value: string[]) => void
}

const Tags: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(['衣','食','住','行'])
  const selectedTag = props.value
  const onAddTag = () => {
    const tagName = window.prompt('请输入标签名')
    if (tagName !== null && tagName !== '') {
      setTags([...tags, tagName])
    }
  }
  const onToggleTag = (tag: string) => {
    const index = selectedTag.indexOf(tag)
    if (index >= 0) {
      props.onChange(selectedTag.filter(t => t !== tag))
    }else{
      props.onChange([...selectedTag, tag])
    }
  }
  const getClass = (tag: string) => selectedTag.indexOf(tag) >= 0 ? 'selected' : ''
  return (
    <TagsWrapper>
      <ul>
        {tags.map(tag =>
          <li key={tag} onClick={() => {onToggleTag(tag)}}
              className={getClass(tag)}
          >{tag}</li>
        )}
      </ul>
      <div>
        <button onClick={onAddTag}>新增标签</button>
      </div>
    </TagsWrapper>
  )
}

export default Tags
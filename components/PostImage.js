import Image from 'next/Image'
import styled from 'styled-components'

const ImageWrap = styled.span`
  margin: 32px auto;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
  }
`

const PostImage = ({ alt, source, width, height }) => {
  return (
    <ImageWrap>
      <Image
        alt={alt}
        src={`images/${source}`}
        width={width}
        height={height}
        quality={70}
      />
    </ImageWrap>
  )
}

export default PostImage

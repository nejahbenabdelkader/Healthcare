import styled from  'styled-components'

export const Main = styled.div`
  overflow: hidden;
  box-sizing: content-box;
  padding-right: 10px;
  height: 150px;
  width: 1000px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(196, 196, 196, 1);
`;

export const FlexWrapper = styled.div`
  display: flex;
  background-color: inherit;
  align-items: flex-start;
`;
export const ImgWrap = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin: 10px;
`;

export const MoreButton = styled.button`
  background-color: inherit;
  background-color: ${(props) => props.backgroundColor};
  width:200px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid rgba(196, 196, 196, 1);
`;

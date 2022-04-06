import styled from 'styled-components';

export const Content = styled.div`
  background-color: #fff;
  max-width: 100%;
  min-height: 200px;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 60px 2px;
  border-radius:4px;
  
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
  `
  export const H1 = styled.h1`
  margin-bottom: 32px;
  color: #01bf71;
  font-size: 40px;
  font-family:sans-serif;
  font-weight: 400;
  text-align: left;
  margin-right:auto;
  margin-left:auto;
  font-style:oblique;
  
`
export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 70%;
  margin:auto;
`
export const Td = styled.td`
border: 1px solid #ddd;
padding: 8px;
`
export const Tr = styled.tr`
&:nth-child(even){background-color: #f2f2f2;}
&:hover {background-color: #ddd;}
text-align: center;
`
export const Th = styled.th`
  padding:12px;
  text-align: center;
  background-color: #000000;
  color: white;
` 
export const Search = styled.div`
max-width: 1000px;
background-color:white;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    align-items: center;
    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
  width:100%;
  margin:auto;
  border-radius: 10px;
`
export const InputSearch = styled.input`
  type: search;
  width:300px;
  border-radius:5px;
  margin-left:20px;
  padding:8px;
`
export const BtnAdd = styled.button`
background:#1E90FF;
color:#fff;
width:200px;
font-size:15px;
border-radius:5px;
padding:8px;
border-color:#1E90FF;
&:hover {
  transition: all 0.2s ease-in-out;
  background: #fff;
 color: #010606;
 cursor :pointer;
 border: 1px solid #000;
}

`
export const Position = styled.div`
display:flex;
flex-direction:row;
margin-bottom:20px;
margin-left:15%;
margin-top:10px;
`
export const BtnEdit = styled.button`
background:#04AA6D;
color:#fff;
width:80px;
font-size:15px;
border-radius:5px;
padding:5px;
margin-right:10px;
border-color:#04AA6D;
&:hover {
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
  cursor: pointer;
}
`
export const BtnDelete = styled.button`
background:#DC143C;
color:#fff;
width:80px;
font-size:15px;
border-radius:5px;
padding:5px;
border-color:#DC143C;
&:hover {
  transition: all 0.2s ease-in-out;
  background: #fff;
 color: #010606;
 cursor: pointer;
}
`

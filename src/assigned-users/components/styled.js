import styled from 'styled-components'

export const TableStyled = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  td {
    text-align: left;
    padding-left: 20px;
    height: 42px;
    font-size: 11px;
  }
  th {
    background: linear-gradient(#ffffff, #efefef);
    font-size: 11px;
    height: 28px;
    padding-left: 20px;
    border-bottom: 1px solid #d2d2d2;
    text-align: left;
    font-weight: bold;
  }
`

export const PartnerCodeStyled = styled.div`
  position: relative;
  cursor: pointer;
  input {
    width: 100px;
  }
`
export const ButtonContainerStyled = styled.div(({active}) => ({
	display: active ? 'inline-block' : 'none',
	position: 'absolute',
	'& button': {},
}))
export const AssignedResellersStyled = styled.div`
  border: 1px solid #e4e7ee;
  border-radius: 6px;
`
export const HeaderStyled = styled.div`
  padding: 10px;
  background: linear-gradient(#ffffff, #efefef);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ButtonAdd = styled.button`
  border: none;
  color: #086bc8;
  background: url(/img/campaign_def/icon_star.gif) no-repeat center left;
  padding-left: 20px;
  margin-left: 20px;
  cursor: pointer;
  &:disabled{
  	opacity: 0.5;
  }
  &:focus{
   outline: none;
  }
`
export const ModalWrapper = styled.div`
	width: 280px;
	p {
		overflow-wrap: break-word;	
		text-align: center;
	}
`
export const ButtonContainer = styled.div`
   	display: flex;
   	justify-content: space-around;
`
export const ResellerDropdownContainer = styled.div`
		display: flex;
`
export const Title = styled.div`
	font-weight: bold;
	text-decoration: underline dotted;
	font-size: 12px;
`

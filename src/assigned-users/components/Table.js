// @flow
import React from 'react'
import {PartnerCodeStyled, TableStyled} from './styled'
import type {BrandAssignedUser} from '../types'
import {dictionary} from '../const'
import {Button} from "../../components/Button";
import {ClassicButton} from "../../components/classic-button";
import InputText from "../../components/inputs/inputText/InputText";

type TableRowProps = {
	item: BrandAssignedUser,
	isActive: boolean,
	value: any,
	countries: [],
	handleDelete: Function,
	handleChangeCode: Function,
	handleSaveCode: Function,
	handleCancelCode: Function,
}
const Table = ({list = [], ...props}) => {
	return (
		<TableStyled>
			<thead>
			<tr>
				<th>{dictionary.PERSON}</th>
				<th>{dictionary.COMPANY}</th>
				<th>{dictionary.COUNTRY}</th>
				<th>{dictionary.PARTNER_CODE}</th>
				<th>{dictionary.ACTION}</th>
			</tr>
			</thead>
			<tbody>
			{list.map(item => (
				<TableRow
					key={item.BrandAssignedUserId}
					item={item} {...props}
				/>
			))}
			</tbody>
		</TableStyled>
	)
}

export default Table

let TableRow = ({
	                item = {},
	                countries = [],
	                handleDelete,
	                handleChangeCode,
	                handleSaveCode,
                }: TableRowProps) => {
	const country = countries.find((c) => c.CountryId === item.CountryId)
	return (
		<tr>
			<td>{item.UserName} ({item.Login})</td>
			<td>{item.Company}</td>
			<td>{country && country.Name}</td>
			<td>
				<PartnerCodeStyled>
					<InputText
						maxLength={30}
						value={item.PartnerCode}
						onChange={e => handleChangeCode(item.BrandAssignedUserId, e.target.value)}
						onBlur={() => handleSaveCode(item.BrandAssignedUserId, item.PartnerCode)}
					/>
					{/*<ButtonContainerStyled active={isActive}>*/}
					{/*  <button onClick={handleSaveCode}>{dictionary.SAVE}</button>*/}
					{/*  <button onClick={handleCancelCode}>{dictionary.CANCEL}</button>*/}
					{/*</ButtonContainerStyled>*/}
				</PartnerCodeStyled>
			</td>
			<td>
				<ClassicButton
					type={'button'}
					onClick={() => handleDelete(item)}>
					{dictionary.DELETE}
				</ClassicButton>
			</td>
		</tr>
	)
}
// TableRow = connect((state: Store) => ({
//   countries: state.data.countries,
// }))(TableRow)

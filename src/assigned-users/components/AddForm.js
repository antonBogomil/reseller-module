import React, {useEffect, useState} from 'react'
import {ButtonAdd, ResellerDropdownContainer} from './styled'
import AutocompleteNew from "../../components/AutocompleteNew";
import {usersSelectData} from "../../mockData";
import {getBrandsUsersSuggestions} from "../../api/brand-users";

function convertItems(rawData) {
	return rawData.map((item)=>({key: item.id,value: item.name}))
}

const AddReseller = ({handleAdd}) => {
	const [state, setState] = useState({
		users: [],
		selected: {},
		filterString: ''
	})
	useEffect(() => {
		getBrandsUsersSuggestions(state.filterString, '').then((res) => {
			console.log(res);
		})
		setState((state) => ({...state, users:convertItems([])}))
	}, [])
	return (
		<>
			<div title="Assigned resellers ...">Assigned resellers</div>
			<ResellerDropdownContainer>
				<div style={{width: 200}}>
					<AutocompleteNew
						items={state.users}
						onChange={(selected) => {
							console.log(selected);
						}}
						onInput={(inputText) => {
							console.log(inputText);
						}}
						selected={state.selected}
						placeholder="Choose user"
					/>
				</div>
				<ButtonAdd onClick={handleAdd}>Add the reseller</ButtonAdd>
			</ResellerDropdownContainer>
		</>
	)
}

export default AddReseller

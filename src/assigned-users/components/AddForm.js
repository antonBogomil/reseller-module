import React, {useEffect, useState} from 'react'
import {ButtonAdd, ResellerDropdownContainer, Title} from './styled'
import AutocompleteNew from "../../components/AutocompleteNew";
import {getBrandsUsersSuggestions} from "../../api/brand-users";
import {dictionary} from "../const";

function convertItems(rawData) {
	return rawData.map((item) => ({key: item.id, value: item.name}))
}

const MIN_FILTER_LENGTH = 2;
let timer;

const initialState = {
	users: [],
	selected: null,
	filterString: '',
	loading: false,
}
const AddReseller = ({handleAdd}) => {
	const [state, setState] = useState(initialState)
	useEffect(() => {
		if (state.filterString.length >= MIN_FILTER_LENGTH) {
			setState((state) => ({...state, loading: true}))
			timer = setTimeout(() => {
				getBrandsUsersSuggestions(state.filterString, '').then((res) => {
					setState((state) => ({...state, users: convertItems(res),loading: false}))

				})
			}, 200)
		}
		return () => {
			clearTimeout(timer)
		}
	}, [state.filterString])

	function handleSelect(selected) {
		setState((state) => ({...state, selected}));
	}

	function handleChange(input) {
		setState((state) => ({...state, filterString: input}))
	}

	function handleAddButton() {
		if (state.selected) {
			handleAdd(state.selected)
			setState(initialState)
		}
	}

	return (
		<>
			<Title title={dictionary.ASSIGN_RESELLERS_TITLE_DESC}>
				{dictionary.ASSIGN_RESELLERS_TITLE}
			</Title>
			<ResellerDropdownContainer>
				<div style={{width: 300}}>
					<AutocompleteNew
						items={state.users}
						onChange={handleSelect}
						onInput={handleChange}
						selected={state.selected || {}}
						placeholder="Choose user"
						loading={state.loading}
					/>
				</div>
				<ButtonAdd onClick={handleAddButton}>
					{dictionary.ADD_RESELLER}
				</ButtonAdd>
			</ResellerDropdownContainer>
		</>
	)
}

export default AddReseller

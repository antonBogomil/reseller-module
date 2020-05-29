import React, {useReducer, useEffect} from 'react'
import Table from './components/Table'
import AddReseller from './components/AddForm'
import {AssignedResellersStyled, ButtonContainer, HeaderStyled, ModalWrapper} from './components/styled'
import {initialState, reducer} from './store/reducer'
import {cancelDelete, changeCode, confirmDelete, saveCode, setLoading, setUsers, setUserToDelete} from './store/actions'
import {
	deleteBrandAssignedUser,
	getBrandAssignedUsers,
	patchBrandAssignedPartnerCode,
} from '../api/brand-users'
import {isChangedPartnerCode} from "./utils";
import ModalWindowNew from "../components/ModalNew";
import {Button} from "../components/Button";
import {ClassicButton} from "../components/classic-button";
import {dictionary} from "./const";

const AssignedUsers = ({accessKey, brandId}) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	function handleChangeCode(id, value) {
		dispatch(changeCode(id, value))
	}

	function handleSaveCode(id, value) {
		const {users, originalUsers} = state;
		if (isChangedPartnerCode(id, originalUsers, users)) {
			patchBrandAssignedPartnerCode(
				id,
				value,
				accessKey,
			)
				.then((res) => {
					dispatch(saveCode())
				})
				.catch((e) => {
					console.log(e);
				})
		} else {
			console.log('Not changed');
		}
	}


	function handleDeleteButton(user) {
		dispatch(setUserToDelete(user))
	}

	function deleteUser(BrandAssignedUserId) {
		dispatch(confirmDelete())
		deleteBrandAssignedUser(BrandAssignedUserId, accessKey).then((res) => {
			getUsers()
		})
	}

	function handleAddUser(user) {
		console.log('added user', user)
	}

	function getUsers() {
		dispatch(setLoading(true))
		getBrandAssignedUsers(brandId, accessKey)
			.then((data) => {
				dispatch(setUsers(data['BrandAssignedUsers']))
			})
			.finally(() => {
				dispatch(setLoading(false))
			})
	}

	useEffect(() => {
		if (brandId) {
			getUsers()
		}
	}, [brandId])
	const {users, userToDelete, loading} = state
	return (
		<>
			<AssignedResellersStyled>
				<HeaderStyled>
					<AddReseller handleAdd={handleAddUser}/>
				</HeaderStyled>
				{
					loading ? 'Loading...' :
						<Table
							list={users}
							handleDelete={handleDeleteButton}
							handleSaveCode={handleSaveCode}
							handleChangeCode={handleChangeCode}
						/>
				}
			</AssignedResellersStyled>
			{userToDelete &&
			<ModalWindowNew
				isVisible={userToDelete}
				isCloseBtn={true}
				hideModal={() => {
					dispatch(cancelDelete)
				}}
			>
				<ModalWrapper>
					<p>{dictionary.DELETE_CONFIRM} <br/> {userToDelete.Login} ? </p>
					<ButtonContainer>
						<ClassicButton
							onClick={() => deleteUser(userToDelete.BrandAssignedUserId)}
						>
							{dictionary.DELETE}
						</ClassicButton>
						<ClassicButton
							onClick={() => {
								dispatch(cancelDelete)
							}}
						>
							{dictionary.CANCEL}
						</ClassicButton>
					</ButtonContainer>
				</ModalWrapper>
			</ModalWindowNew>}
		</>
	)
}

export {AssignedUsers}

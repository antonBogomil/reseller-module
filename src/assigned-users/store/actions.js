// @flow
import {actionTypes} from '../const'
import type {BrandAssignedUser} from '../types'

export const setLoading = (loading: boolean) => {
	return {
		type: actionTypes.LOADING,
		payload: {
			loading
		}
	}
}
export const setUsers = (users: BrandAssignedUser[] = []) => {
	return {
		type: actionTypes.SET_USERS,
		payload: {
			users,
		},
	}
}
export const setUserToDelete = (user: BrandAssignedUser) => {
	return {
		type: actionTypes.PRE_DELETE,
		payload: {
			user
		}
	}
}
export const confirmDelete = () => {
	return {
		type: actionTypes.CONFIRM_DELETE
	}
}
export const cancelDelete = {
	type: actionTypes.CANCEL_DELETE
}
export const changeCode = (id, value) => {
	return {
		type: actionTypes.CHANGE_CODE,
		payload: {
			BrandAssignedUserId: id,
			PartnerCode: value,
		},
	}
}

export const saveCode = () => {
	return {
		type: actionTypes.SAVE_CODE,
	}
}

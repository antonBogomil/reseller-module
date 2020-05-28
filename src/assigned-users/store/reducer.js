// @flow
import {actionTypes} from '../const'
import {BrandAssignedUser} from '../types'

type State = {
	users: BrandAssignedUser[],
	originalUsers: BrandAssignedUser[],
	loading: boolean,
	errorMessage: string,
}

export const initialState: State = {
	loading: true,
	errorMessage: null,
	users: [],
	originalUsers: [],
	userToDelete: null,
}

export const reducer = (state, {type, payload}) => {
	switch (type) {
		case actionTypes.LOADING: {
			return {
				...state,
				loading: payload.loading,
			}
		}
		case actionTypes.PRE_DELETE: {
			return {
				...state,
				userToDelete: payload.user
			}
		}
		case actionTypes.CANCEL_DELETE: {
			return {
				...state,
				userToDelete: null
			}
		}
		case actionTypes.CONFIRM_DELETE: {
			return {
				...state,
				userToDelete: null
			}
		}
		case actionTypes.SET_USERS: {
			return {
				...state,
				users: payload.users,
				originalUsers: payload.users.map((user) => ({...user}))
			}
		}
		case actionTypes.CHANGE_CODE: {
			const updatedUsers = state.users;
			const index = updatedUsers.findIndex((user) => user.BrandAssignedUserId === payload.BrandAssignedUserId);
			updatedUsers[index].PartnerCode = payload.PartnerCode
			return {
				...state,
				users: updatedUsers
			}
		}
		default:
			return state
	}
}

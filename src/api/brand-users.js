// @flow
import axios from 'axios'
import {usersSelectData} from "../mockData";

const BASE_PATH = '/restful/v3/BrandAssignedUsers'

export const getBrandAssignedUsers = (SupplierId: string, AccessKey: string) => {
	return axios
		.get(BASE_PATH, {
			params: {
				SupplierId,
				AccessKey,
			},
		})
		.then((res) => {
			return res.data['Data']
		})
}
export const patchBrandAssignedPartnerCode = (BrandAssignedUserId: string, PartnerCode: string, AccessKey: string) => {
	return axios({
		method: 'PATCH',
		url: `${BASE_PATH}/${BrandAssignedUserId}`,
		params: {
			AccessKey,
		},
		data: {
			PartnerCode,
		},
	})
}
export const deleteBrandAssignedUser = (BrandAssignedUserId: string, AccessKey: string) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, 200)
	})
}
export const getBrandsUsersSuggestions = (searchString: string, AccessKey: string) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return resolve(usersSelectData.filter((item) => item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1))
		}, Math.random() * 300)
	})
}

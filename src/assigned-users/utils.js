export function isChangedPartnerCode(BrandAssignedUserId, originalUsers, users) {
	const isChanged = users.find((user) => user.BrandAssignedUserId === BrandAssignedUserId).PartnerCode !==
		originalUsers.find((user) => user.BrandAssignedUserId === BrandAssignedUserId).PartnerCode
	return isChanged
}

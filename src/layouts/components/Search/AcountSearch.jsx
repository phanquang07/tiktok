import { memo } from 'react'
import AccountItem from '../../../components/AccountItem/AccountItem'

export default memo(function AcountSearch({ searchResult }) {
	return (
		<>
			{searchResult.map(item => (
				<AccountItem key={item.id} data={item} />
			))}
		</>
	)
})

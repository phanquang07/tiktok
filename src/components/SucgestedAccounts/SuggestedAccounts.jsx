import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem'

const cx = classNames.bind(styles)

export default function SucgestedAcounts({ label }) {
	return (
		<div className={cx('suggested')}>
			<h2 className={cx('suggested-label')}>{label}</h2>
			<ul className={cx('suggested-list')}>
				<AccountItem />
			</ul>
			<button className={cx('more-accounts-btn')}>
				<span>See more</span>
			</button>
		</div>
	)
}

SucgestedAcounts.propTypes = {
	label: PropTypes.string.isRequired,
}

import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

export default function Sidebar() {
	return (
		<div className={cx('sidebar')}>
			<h3>Sidebar</h3>
		</div>
	)
}

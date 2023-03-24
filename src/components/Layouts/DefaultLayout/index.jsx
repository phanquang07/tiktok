import classNames from 'classnames/bind'
import { createContext } from 'react'
import Header from '../Header'
import Sidebar from './Sidebar'
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)

export default function DefaultLayout({ children }) {
	return (
		<div className={cx('wrapper')}>
			<Header />
			<main className={cx('main')}>
				<div className={cx('container')}>
					<Sidebar />
					<div className={cx('content')}>{children}</div>
				</div>
			</main>
		</div>
	)
}
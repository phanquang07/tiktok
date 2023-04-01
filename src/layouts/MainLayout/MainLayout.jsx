import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from './MainLayout.module.scss'

const cx = classNames.bind(styles)

export default function MainLayout({ children }) {
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

MainLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

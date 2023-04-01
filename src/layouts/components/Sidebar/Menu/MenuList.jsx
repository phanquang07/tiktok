import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

export default function MenuList({ children }) {
	return <nav className={cx('sidebar-inner')}>{children}</nav>
}

MenuList.propTypes = {
	children: PropTypes.node.isRequired,
}

import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

export default function MenuItem({ title, icon, to }) {
	return (
		<li className={cx('nav-item')}>
			<NavLink
				className={nav => cx('menu-link', { active: nav.isActive })}
				to={to}
			>
				{icon}
				<span className={cx('menu-title')}>{title}</span>
			</NavLink>
		</li>
	)
}

MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired,
}

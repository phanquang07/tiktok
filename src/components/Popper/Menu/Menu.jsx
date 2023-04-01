import { useState } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import PropTypes from 'prop-types'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import Header from './Header'
import Popper from '../Popper'

const cx = classNames.bind(styles)
const defaultFn = () => {}

export default function Menu({
	children,
	items = [],
	hideOnClick = false,
	onChange = defaultFn,
}) {
	const [history, setHistory] = useState([{ data: items }])
	const current = history[history.length - 1]
	const renderItems = () => {
		return current.data.map((item, index) => {
			const isParent = !!item.children
			return (
				<MenuItem
					key={index}
					data={item}
					onClick={() => {
						if (isParent) {
							setHistory(prev => [...prev, item.children])
						} else {
							onChange(item)
						}
					}}
				/>
			)
		})
	}
	const handleResetMenu = () => setHistory(prev => prev.slice(0, 1))

	return (
		<Tippy
			interactive
			offset={[16, 6]}
			delay={[0, 600]}
			placement='bottom-end'
			hideOnClick={hideOnClick}
			render={attrs => (
				<div className={cx('menu-list')} tabIndex={-1} {...attrs}>
					<Popper>
						{history.length > 1 && (
							<Header
								title={current.title}
								onBack={() => {
									setHistory(prev => prev.slice(0, prev.length - 1))
								}}
							/>
						)}
						<div className={cx('menu-body')}>{renderItems()}</div>
					</Popper>
				</div>
			)}
			onHide={handleResetMenu}
		>
			{children}
		</Tippy>
	)
}

Menu.propTypes = {
	children: PropTypes.node.isRequired,
	items: PropTypes.array,
	hideOnClick: PropTypes.bool,
	onChange: PropTypes.func,
}

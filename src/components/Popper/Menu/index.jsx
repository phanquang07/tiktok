import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import { Wrapper as PopperWrapper } from '../../Popper'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import Header from './Header'
import { useState } from 'react'

const cx = classNames.bind(styles)
const defaultFn = () => {}

export default function Menu({ children, items = [], onChange = defaultFn }) {
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

	return (
		<Tippy
			interactive
			offset={[16, 6]}
			delay={[0, 600]}
			placement='bottom-end'
			render={attrs => (
				<div className={cx('list')} tabIndex={-1} {...attrs}>
					<PopperWrapper>
						{history.length > 1 && (
							<Header
								title={'Language'}
								onBack={() => {
									setHistory(prev => prev.slice(0, prev.length - 1))
								}}
							/>
						)}
						{renderItems()}
					</PopperWrapper>
				</div>
			)}
			onHide={() => setHistory(prev => prev.slice(0, 1))}
		>
			{children}
		</Tippy>
	)
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faEllipsisVertical,
	faPlus,
	faA,
	faCircleQuestion,
	faVideoCamera,
	faGear,
	faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { faKeyboard, faMoon, faUser } from '@fortawesome/free-regular-svg-icons'
import classNames from 'classnames/bind'

import TippyTooltip from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'
import Menu from '../../../components/Popper/Menu/Menu'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { InboxIcon, MessageIcon } from '../../../components/Icons/Icons'
import Image from '../../../components/Image/Image'
import images from '../../../assets/images'
import Search from '../Search/Search'
import { config } from '../../../config/config'

const cx = classNames.bind(styles)
const MENU_ITEMS = [
	{
		icon: <FontAwesomeIcon icon={faA} />,
		title: 'English',
		children: {
			title: 'Language',
			data: [
				{
					code: 'en',
					title: 'English',
					type: 'language',
				},
				{
					code: 'vi',
					title: 'Tiếng Việt',
					type: 'language',
				},
				{
					code: 'chinese',
					title: 'Chinese',
					type: 'language',
				},
			],
		},
	},
	{
		icon: <FontAwesomeIcon icon={faCircleQuestion} />,
		title: 'Feedback end helps',
		to: config.routes.feedback,
	},
	{
		icon: <FontAwesomeIcon icon={faKeyboard} />,
		title: 'Keyboard shortcuts',
	},
	{
		icon: <FontAwesomeIcon icon={faMoon} />,
		title: 'Dark mode',
	},
]

export default function Header() {
	const currentUser = true

	// Handle logic
	const handleChange = menuItem => {
		switch (menuItem.type) {
			case 'language':
				// handleChange language
				break

			default:
				break
		}
	}
	const userMenuItem = [
		{
			icon: <FontAwesomeIcon icon={faUser} />,
			title: 'View profile',
			to: config.routes.profile,
		},
		{
			icon: <FontAwesomeIcon icon={faTiktok} />,
			title: 'Get Coins',
		},
		{
			icon: <FontAwesomeIcon icon={faVideoCamera} />,
			title: 'LIVE Studio',
		},
		{
			icon: <FontAwesomeIcon icon={faGear} />,
			title: 'Setting',
			to: config.routes.setting,
		},
		...MENU_ITEMS.slice(0, -1),
		{
			icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
			title: 'Log out',
			to: config.routes.logout,
			separate: true,
		},
	]
	return (
		<header className={cx('header')}>
			<div className='container'>
				<div className={cx('inner')}>
					<div className={cx('logo')}>
						<Link to={config.routes.home}>
							<img src={images.logo} alt='TikTok' />
						</Link>
					</div>
					<Search />
					<div className={cx('actions')}>
						<Button text className={cx('action-btn')}>
							<FontAwesomeIcon icon={faPlus} />
							<span className={cx('name')}>Upload</span>
						</Button>
						{currentUser ? (
							<>
								<TippyTooltip
									delay={[0, 130]}
									content='Messenger'
									placement='bottom'
								>
									<button className={cx('action-btn')}>
										<MessageIcon />
									</button>
								</TippyTooltip>
								<TippyTooltip
									delay={[0, 200]}
									content='Inbox'
									placement='bottom'
								>
									<button className={cx('action-btn')}>
										<InboxIcon />
									</button>
								</TippyTooltip>
							</>
						) : (
							<>
								<Button primary>Login</Button>
							</>
						)}
						<Menu
							items={currentUser ? userMenuItem : MENU_ITEMS}
							onChange={handleChange}
						>
							{currentUser ? (
								<div className={cx('user-avatar')}>
									<Image src={images.avtUser} alt='Nguyen A' />
								</div>
							) : (
								<button className={cx('more-option')}>
									<FontAwesomeIcon icon={faEllipsisVertical} />
								</button>
							)}
						</Menu>
					</div>
				</div>
			</div>
		</header>
	)
}

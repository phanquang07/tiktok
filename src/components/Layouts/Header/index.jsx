import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleXmark,
	faEllipsisVertical,
	faMagnifyingGlass,
	faPlus,
	faSpinner,
	faA,
	faCircleQuestion,
	faVideo,
	faVideoCamera,
	faGear,
	faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import {
	faKeyboard,
	faMessage,
	faMoon,
	faPaperPlane,
	faUser,
} from '@fortawesome/free-regular-svg-icons'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import TippyTooltip from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import styles from './Header.module.scss'
import logo from '../../../assets/images/logo.png'
import avtUser from '../../../assets/images/avatar/avt2.jpeg'
import { Link } from 'react-router-dom'
import { Wrapper as PopperWrapper } from '../../Popper'
import AccountItem from '../../AccountItem'
import Button from '../../Button'
import Menu from '../../Popper/Menu'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

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
			],
		},
	},
	{
		icon: <FontAwesomeIcon icon={faCircleQuestion} />,
		title: 'Feedback end helps',
		to: '/feedback',
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
	const [searchResult, setSearchResult] = useState([])
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
			to: '/profile',
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
			to: '/setting',
		},
		...MENU_ITEMS.slice(0, -1),
		{
			icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
			title: 'Log out',
			to: '/logout',
			separate: true,
		},
	]
	return (
		<header className={cx('header')}>
			<div className='container'>
				<div className={cx('inner')}>
					<div className={cx('logo')}>
						<Link to={'/'}>
							<img src={logo} alt='TikTok' />
						</Link>
					</div>
					<Tippy
						interactive
						render={attrs => (
							<div className={cx('search-result')} tabIndex={-1} {...attrs}>
								<PopperWrapper>
									<h4 className={cx('search-title')}>Accounts</h4>
									<AccountItem />
								</PopperWrapper>
							</div>
						)}
					>
						<div className={cx('search')}>
							<div className={cx('form-search')}>
								<input
									type='text'
									placeholder='Search account and video'
									spellCheck={false}
								/>
								<button className={cx('clear-btn')}>
									<FontAwesomeIcon icon={faCircleXmark} />
								</button>
								<span className={cx('loading')}>
									<FontAwesomeIcon icon={faSpinner} />
								</span>
							</div>
							<button className={cx('search-btn')}>
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</button>
						</div>
					</Tippy>
					<div className={cx('actions')}>
						<Button text>
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
										<FontAwesomeIcon icon={faPaperPlane} />
									</button>
								</TippyTooltip>
								<TippyTooltip
									delay={[0, 200]}
									content='Inbox'
									placement='bottom'
								>
									<button className={cx('action-btn')}>
										<FontAwesomeIcon icon={faMessage} />
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
									<img src={avtUser} alt='Nguyen A' />
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

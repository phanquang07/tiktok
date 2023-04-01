import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	HomeIcon,
	UserGroupIcon,
	CompassIcon,
	VideoIcon,
} from '../../../components/Icons/Icons'
import classNames from 'classnames/bind'
import MenuItem from './Menu/MenuItem'
import MenuList from './Menu/MenuList'
import styles from './Sidebar.module.scss'
import { config } from '../../../config/config'
import SucgestedAcounts from '../../../components/SucgestedAccounts/SuggestedAccounts'

const cx = classNames.bind(styles)

export default function Sidebar() {
	const navItem = [
		{
			title: 'For You',
			icon: <HomeIcon />,
			to: config.routes.home,
		},
		{
			title: 'Following',
			icon: <UserGroupIcon />,
			to: config.routes.following,
		},
		{
			title: 'Explore',
			icon: <CompassIcon />,
			to: config.routes.explore,
		},
		{
			title: 'LIVE',
			icon: <VideoIcon />,
			to: config.routes.live,
		},
	]
	return (
		<aside className={cx('sidebar')}>
			<MenuList>
				<ul className={cx('sidebar-list')}>
					{navItem.map((item, index) => (
						<MenuItem
							key={index}
							title={item.title}
							icon={item.icon}
							to={item.to}
						/>
					))}
				</ul>
				<SucgestedAcounts label='Suggested accounts' />
				<SucgestedAcounts label='Following accounts' />
			</MenuList>
		</aside>
	)
}

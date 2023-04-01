import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './AccountPreview.module.scss'
import Button from '../../Button/Button'

const cx = classNames.bind(styles)

export default function AccountPreview() {
	return (
		<div className={cx('account-preview')}>
			<div className={cx('header')}>
				<Link to='/nickname' className={cx('avatar')}>
					<img
						src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f90cc529e5bacc99b1459a81ab73ca87~c5_100x100.jpeg?x-expires=1680530400&x-signature=9608LwAywCaN5ZXO6lwEgs7BLLs%3D'
						alt=''
					/>
				</Link>
				<Button primary className={cx('follow-btn')}>
					Follow
				</Button>
			</div>
			<div className={cx('body')}>
				<Link to='/nickname' className={cx('account-username')}>
					<span>NguyenA</span>
					<FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
				</Link>
				<Link to='/nickname'>
					<p className={cx('account-name')}>Nguyen A</p>
				</Link>
				<div className={cx('statistics')}>
					<span className={cx('value')}>8M</span>
					<span className={cx('label')}>Follower</span>
					<span className={cx('value')}>23.3M</span>
					<span className={cx('label')}>Likes</span>
				</div>
			</div>
		</div>
	)
}

import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import styles from './SuggestedAccounts.module.scss'
import Popper from '../Popper/Popper'
import AccountPreview from './AccountPreview/AccountPreview'

const cx = classNames.bind(styles)

export default function AccountItem() {
	const renderPreview = attrs => {
		return (
			<div className={cx('account-preview')} tabIndex={-1} {...attrs}>
				<Popper>
					<AccountPreview />
				</Popper>
			</div>
		)
	}
	return (
		<div>
			<Tippy
				// visible
				interactive
				placement='bottom'
				offset={[-16, 0]}
				delay={[800, 0]}
				render={renderPreview}
			>
				<div className={cx('account-item')}>
					<Link to='acc' className={cx('account-link')}>
						<div className={cx('account-img')}>
							<img
								src='https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f4376eb4a748eb7e2eb7d961a0c2e5d2.jpeg?x-expires=1680444000&x-signature=wf5nTKCioBOAevMt2gdsX7dkUMw%3D'
								alt=''
							/>
						</div>
						<div className={cx('account-info')}>
							<p className={cx('account-username')}>
								<span>NguyenA</span>
								<FontAwesomeIcon
									className={cx('icon-check')}
									icon={faCheckCircle}
								/>
							</p>
							<p className={cx('account-name')}>Nguyen A</p>
						</div>
					</Link>
				</div>
			</Tippy>
		</div>
	)
}

AccountItem.propTypes = {}

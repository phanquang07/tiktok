import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'

import styles from './AccountItem.module.scss'
import Image from '../Image/Image'

const cx = classNames.bind(styles)

export default function AccountItem({ data }) {
	return (
		<ul className={cx('search-list')}>
			<Link to={`/@${data.nickname}`} className={cx('search-item')}>
				<div className={cx('avatar')}>
					<Image src={data.avatar} alt='Nguyen A' />
				</div>
				<div className={cx('info')}>
					<div className={cx('name')}>
						<h4>{data.full_name}</h4>
						{data.tick && (
							<span>
								<FontAwesomeIcon icon={faCheckCircle} />
							</span>
						)}
					</div>
					<p className={cx('username')}>{data.nickname}</p>
				</div>
			</Link>
		</ul>
	)
}

AccountItem.propTypes = {
	data: PropTypes.object.isRequired,
}

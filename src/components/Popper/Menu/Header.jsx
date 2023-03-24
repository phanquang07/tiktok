import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

export default function Header({ title, onBack }) {
	return (
		<div className={cx('header')}>
			<button className={cx('btn-back')} onClick={onBack}>
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
			<h4 className={cx('language-title')}>{title}</h4>
		</div>
	)
}

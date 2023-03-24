import classNames from 'classnames/bind'
import styles from './Popper.module.scss'

const cx = classNames.bind(styles)

export default function Wrapper({ children }) {
	return <div className={cx('account')}>{children}</div>
}

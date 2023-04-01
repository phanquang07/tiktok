import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)
export default function Button({
	to,
	href,
	onClick,
	children,
	primary = false,
	outline = false,
	small = false,
	large = false,
	text = false,
	disabled = false,
	rounded = false,
	className,
	leftIcon,
	rightIcon,
	...passProps
}) {
	let Comp = 'button'
	const props = {
		onClick,
		...passProps,
	}
	if (disabled) {
		delete props.onClick
	}
	if (to) {
		props.to = to
		Comp = Link
	} else if (href) {
		props.href = href
		Comp = 'a'
	}
	const classes = cx('button', {
		[className]: className,
		primary,
		outline,
		small,
		large,
		text,
		disabled,
		rounded,
	})

	return (
		<Comp className={classes} {...props}>
			{leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
			<span className={cx('title')}>{children}</span>
			{rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
		</Comp>
	)
}

Button.propyType = {
	to: PropTypes.string,
	href: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
	primary: PropTypes.bool,
	outline: PropTypes.bool,
	small: PropTypes.bool,
	large: PropTypes.bool,
	text: PropTypes.bool,
	disabled: PropTypes.bool,
	rounded: PropTypes.bool,
	className: PropTypes.string,
	leftIcon: PropTypes.node,
	rightIcon: PropTypes.node,
}

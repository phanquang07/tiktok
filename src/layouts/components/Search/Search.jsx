import { useState, useEffect, useRef } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleXmark,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

import styles from './Search.module.scss'
import Popper from '../../../components/Popper/Popper'
import useDebounce from '../../../hooks/useDebounce'
import { searchServices } from '../../../services/searchService'
import AcountSearch from './AcountSearch'

const cx = classNames.bind(styles)

export default function Search() {
	const [searchResult, setSearchResult] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [showResult, setShowResult] = useState(false)
	const debouncedValue = useDebounce(searchValue, 700)

	const inputRef = useRef()

	useEffect(() => {
		if (!debouncedValue.trim()) {
			setSearchResult([])
			return
		}
		fetchApi()
	}, [debouncedValue])

	const fetchApi = async () => {
		const result = await searchServices(debouncedValue)
		setSearchResult(result)
	}

	const handleClear = () => {
		setSearchValue('')
		inputRef.current.focus()
		setSearchResult([])
	}

	const handleHideResult = () => {
		setShowResult(false)
	}

	const handleChange = e => {
		const searchValue = e.target.value
		if (!searchValue.startsWith(' ')) {
			setSearchValue(searchValue)
		}
	}

	return (
		// Using a wrapper <div> or <span> tag around the reference
		// element solves this by creating a new parentNode context.
		<div className={cx('search-wrap')}>
			<Tippy
				interactive
				visible={showResult && searchResult.length > 0}
				onClickOutside={handleHideResult}
				render={attrs => (
					<div className={cx('search-result')} tabIndex={-1} {...attrs}>
						<Popper>
							<h4 className={cx('search-title')}>Accounts</h4>
							<AcountSearch searchResult={searchResult} />
						</Popper>
					</div>
				)}
			>
				<div className={cx('search')}>
					<div className={cx('form-search')}>
						<input
							value={searchValue}
							ref={inputRef}
							type='text'
							placeholder='Search account and video'
							spellCheck={false}
							onChange={handleChange}
							onFocus={() => setShowResult(true)}
						/>
						{!!searchValue && (
							<button className={cx('clear-btn')} onClick={handleClear}>
								<FontAwesomeIcon icon={faCircleXmark} />
							</button>
						)}
					</div>
					<button
						className={cx('search-btn')}
						onMouseDown={e => e.preventDefault()}
					>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</div>
			</Tippy>
		</div>
	)
}

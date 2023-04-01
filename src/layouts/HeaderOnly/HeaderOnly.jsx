import Header from '../../layouts/components/Header/Header'

export default function HeaderOnly({ children }) {
	return (
		<>
			<Header />
			<div className='upload'>{children}</div>
		</>
	)
}

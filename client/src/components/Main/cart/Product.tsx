import React from 'react'
import Image from 'next/image'

const Product = () => {
	return (
		<>
			<div className='grid grid-cols-2 my-8'>
				<div className='flex items-center gap-5'>
					<Image src='/vegetables-main.svg' alt='vegetables' width={100} height={100} />
					<p>Juicy Tomato</p>
				</div>
				<div className='flex items-center justify-around '>
					<p>5.99$</p>
					<p>- 3 +</p>
					<p>14.97$</p>
				</div>
			</div>
			<div className='my-4 border-b'></div>
		</>
	)
}

export default Product
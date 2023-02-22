import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Landpage() {
	return (
		<div className='min-h-screen flex justify-center items-center'>
			<div className='text-center'>
				<h1 className='my-5'>melania</h1>
				<p className='mx-40 mb-10'>
					I like to design and structure Web Apps, developing features to
					enhance the use's experience while striking a balance between
					functional design and aesthetics.
				</p>
				<AnchorLink href='#skills'>skills</AnchorLink>✽
				<AnchorLink href='#projects'>projects</AnchorLink>✽
				<AnchorLink href='#contact'>contact</AnchorLink>
			</div>
		</div>
	);
}

import React from 'react';

// Contact component
const Contact = () => {
	return (
		<div className='container-fluid'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 my-4 text-center'>
						{/* Display contact information with email link */}
						<p>
							<i className='bi bi-mailbox-flag me-2'></i>
							Email Tim here:{' '}
							<a href='mailto:timlemkedeveloper@gmail.com'>
								timlemkedeveloper@gmail.com
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

// Export the Contact component
export default Contact;

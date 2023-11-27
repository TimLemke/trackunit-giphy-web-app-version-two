import React from 'react';

// About component
const About = () => {
	return (
		<div className='container-fluid'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 my-4 text-center'>
						{/* Display a message with a heart icon */}
						<p>
							This was built with <i className='bi bi-heart-fill'></i> by Tim
							for Trackunit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

// Export the About component
export default About;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		// Footer Section with a margin-top set to auto
		<footer className='mt-auto'>
			{/* Fluid container with a dark background */}
			<div className='container-fluid bg-dark'>
				{/* Row within the container */}
				<div className='row'>
					{/* Column taking the full width with padding on the y-axis */}
					<div className='col-12 py-2'>
						{/* Navigation links centered in the footer */}
						<ul className='nav justify-content-center'>
							{/* Home link */}
							<li className='nav-item'>
								<Link to='/' className='nav-link link-secondary'>
									Home
								</Link>
							</li>
							{/* About link */}
							<li className='nav-item'>
								<Link to='/about' className='nav-link link-secondary'>
									About
								</Link>
							</li>
							{/* Contact link */}
							<li className='nav-item'>
								<Link to='/contact' className='nav-link link-secondary'>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className='col-12 text-center mb-2'>
						<p className='text-secondary'>Tim + Trackunit = <i className='bi bi-heart-fill'></i></p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

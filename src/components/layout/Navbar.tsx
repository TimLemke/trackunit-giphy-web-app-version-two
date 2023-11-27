import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		// Header Section
		<header>
			{/* Fluid container with no padding */}
			<div className='container-fluid p-0'>
				{/* Bootstrap Navbar */}
				<nav
					className='navbar navbar-expand-lg navbar-primary bg-dark py-2'
					data-bs-theme='dark'
				>
					{/* Container within the Navbar */}
					<div className='container-fluid'>
						{/* Home link in the Navbar */}
						<Link to='/' className='navbar-brand'>
							Tim + Trackunit = <i className='bi bi-heart-fill'></i>
						</Link>
						{/* Navbar Toggler for mobile view */}
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNav'
							aria-controls='navbarNav'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						{/* Navbar Links */}
						<nav className='collapse navbar-collapse' id='navbarNav'>
							{/* Navbar navigation aligned to the right */}
							<ul className='navbar-nav ms-auto'>
								{/* About page link */}
								<li className='nav-item'>
									<Link to='/about' className='nav-link'>
										About
									</Link>
								</li>
								{/* Contact page link */}
								<li className='nav-item'>
									<Link to='/contact' className='nav-link'>
										Contact
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;

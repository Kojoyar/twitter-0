import React, { useState, useEffect } from 'react';
import './Profile.scss'
import prev from './img/prev.png'
import profile1 from './img/profile.png'
import bgc from './img/Placeholder.png'
import '../../styles/index.scss'
const Profile = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const handleScroll = () => {
		setIsVisible(true);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<div className='profile'>
				<div className='profile__container'>
					{isVisible && (
						<div
							onClick={scrollToTop}
							className='profile__fixed'>
							<div className='profile__scroll'>
								<div className="profile_icon">
									<img
										src={prev}
										alt=""
									/>
								</div>
								<div className='profile__name'>
									<div className='profile__name-name'>Name</div>
									<div className='profile__name-tweet'>9 tweets</div>
								</div>
							</div>
						</div>
					)}
				</div>

				<div className='profile__parent'>
					<div>
						<img src={bgc} alt="" />
					</div>
					<div className='profile__child'>
						<img src={profile1} alt="" />
					</div>
					<div className='profile__block'>
						<div className='profile__info'>
							<h2>Davide Biscuso</h2>
							<span>@biscuttu</span>
							<p>Product Designer</p>
							<div className='profile__info-data'>
								{/* location */}
								<div className='profile__location'>
									<svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7.50003 10.3327C5.84702 10.3327 4.50198 8.98841 4.50198 7.33541C4.50198 5.68241 5.84782 4.33578 7.50003 4.33578C9.15223 4.33578 10.4981 5.68162 10.4981 7.33383C10.4981 8.98604 9.15223 10.3303 7.50003 10.3303V10.3327ZM7.50003 5.52487C6.50253 5.52487 5.68948 6.33712 5.68948 7.33541C5.68948 8.3337 6.50253 9.14437 7.50003 9.14437C8.49752 9.14437 9.31057 8.33291 9.31057 7.33462C9.31057 6.33633 8.49752 5.52328 7.50003 5.52328V5.52487Z" fill="#8899A6" />
										<path d="M14.3812 7.46292C14.3812 3.67083 11.2937 0.583334 7.5 0.583334C3.70634 0.583334 0.618835 3.67083 0.618835 7.46292C0.618835 8.96867 1.09621 10.3984 1.99871 11.5978L2.00109 11.5962L2.00663 11.6081C3.29546 13.2468 6.97671 16.1657 7.13267 16.2884C7.24192 16.3755 7.37175 16.4175 7.50079 16.4175C7.62984 16.4175 7.75967 16.3755 7.86892 16.2892C8.02488 16.1665 11.7061 13.2492 12.995 11.6089L13.0005 11.5978L13.0021 11.5994C13.9046 10.3992 14.3812 8.97104 14.3812 7.4645V7.46292ZM7.5 15.0629C6.531 14.2792 3.92167 12.1219 2.94317 10.879C2.199 9.88938 1.80634 8.70821 1.80634 7.46529C1.80634 4.32554 4.36104 1.77083 7.5 1.77083C10.639 1.77083 13.1937 4.32475 13.1937 7.46292C13.1937 8.70583 12.8002 9.887 12.0568 10.8774C11.0783 12.1203 8.469 14.2768 7.5 15.0613V15.0629Z" fill="#8899A6" />
									</svg>
									<span>London</span>
									{/* location  end*/}
								</div>
								{/* data */}
								<div className='profile__location'>
									<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14.6022 0.583334H2.39783C1.39716 0.583334 0.583328 1.39717 0.583328 2.39783V14.6022C0.583328 15.6028 1.39716 16.4167 2.39783 16.4167H14.6022C15.6028 16.4167 16.4167 15.6028 16.4167 14.6022V2.39783C16.4167 1.39717 15.6028 0.583334 14.6022 0.583334ZM15.2292 14.6022C15.2292 14.9481 14.9481 15.2292 14.6022 15.2292H2.39783C2.05187 15.2292 1.77083 14.9481 1.77083 14.6022V4.08092C1.77083 3.73496 2.05108 3.4555 2.39624 3.45392H14.6037C14.9489 3.45392 15.2292 3.73496 15.2292 4.07933V14.6038V14.6022Z" fill="#8899A6" />
										<path d="M4.56702 6.94431C5.12885 6.94431 5.58431 6.48885 5.58431 5.92702C5.58431 5.36518 5.12885 4.90973 4.56702 4.90973C4.00519 4.90973 3.54973 5.36518 3.54973 5.92702C3.54973 6.48885 4.00519 6.94431 4.56702 6.94431Z" fill="#8899A6" />
										<path d="M4.56702 10.4324C5.12885 10.4324 5.58431 9.97694 5.58431 9.4151C5.58431 8.85327 5.12885 8.39781 4.56702 8.39781C4.00519 8.39781 3.54973 8.85327 3.54973 9.4151C3.54973 9.97694 4.00519 10.4324 4.56702 10.4324Z" fill="#8899A6" />
										<path d="M12.433 6.94431C12.9948 6.94431 13.4503 6.48885 13.4503 5.92702C13.4503 5.36518 12.9948 4.90973 12.433 4.90973C11.8712 4.90973 11.4157 5.36518 11.4157 5.92702C11.4157 6.48885 11.8712 6.94431 12.433 6.94431Z" fill="#8899A6" />
										<path d="M12.433 10.4324C12.9948 10.4324 13.4503 9.97694 13.4503 9.4151C13.4503 8.85327 12.9948 8.39781 12.433 8.39781C11.8712 8.39781 11.4157 8.85327 11.4157 9.4151C11.4157 9.97694 11.8712 10.4324 12.433 10.4324Z" fill="#8899A6" />
										<path d="M8.50003 6.94431C9.06187 6.94431 9.51733 6.48885 9.51733 5.92702C9.51733 5.36518 9.06187 4.90973 8.50003 4.90973C7.9382 4.90973 7.48274 5.36518 7.48274 5.92702C7.48274 6.48885 7.9382 6.94431 8.50003 6.94431Z" fill="#8899A6" />
										<path d="M8.50003 10.4324C9.06187 10.4324 9.51733 9.97694 9.51733 9.4151C9.51733 8.85327 9.06187 8.39781 8.50003 8.39781C7.9382 8.39781 7.48274 8.85327 7.48274 9.4151C7.48274 9.97694 7.9382 10.4324 8.50003 10.4324Z" fill="#8899A6" />
										<path d="M4.56702 13.8604C5.12885 13.8604 5.58431 13.4049 5.58431 12.8431C5.58431 12.2812 5.12885 11.8258 4.56702 11.8258C4.00519 11.8258 3.54973 12.2812 3.54973 12.8431C3.54973 13.4049 4.00519 13.8604 4.56702 13.8604Z" fill="#8899A6" />
										<path d="M8.50003 13.8604C9.06187 13.8604 9.51733 13.4049 9.51733 12.8431C9.51733 12.2812 9.06187 11.8258 8.50003 11.8258C7.9382 11.8258 7.48274 12.2812 7.48274 12.8431C7.48274 13.4049 7.9382 13.8604 8.50003 13.8604Z" fill="#8899A6" />
									</svg>
									<span>Joined September 2011</span>
									{/* data end*/}
								</div>
							</div>

							<div className='profile__info-followers'>
								{/* location */}
								<div className='profile__title'>
									<h5>700</h5>
									<span>Following</span>
									{/* location  end*/}
								</div>
								{/* data */}
								<div className='profile__title'>
									<h5>70</h5>
									<span>Followers</span>
								</div>
							</div>

						</div>
						{/* button */}
						<div className='profile__btn'>
							<button>Edit profile</button>
						</div>
						{/* button  end*/}
					</div>
				</div>
			</div >
		</>
	)
}

export default Profile
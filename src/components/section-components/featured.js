import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import features from '../../data/features';

class Featured extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <section className="featured-area bg-sky-blue pd-top-90 pd-bottom-100">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-5">
						<div className="section-title text-center">
							<h2>Dịch vụ Digital Media</h2>
							<p>Các giải pháp tăng tương tác, theo dõi và uy tín cho doanh nghiệp bạn </p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<ul className="featured-product">
							{
								features.map(feature =>
									<li className="thumb">
										<Link to="/product-details">
											<img src={publicUrl + feature.image} alt="img" />
										</Link>
									</li>
								)
							}

						</ul>
					</div>
					<div className="col-lg-12 text-center go-top">
						<Link className="btn btn-base" to="/product">Tư vấn dịch vụ</Link>
						<Link className="btn btn-white" to="/product">Xem tất cả dịch vụ</Link>
					</div>
				</div>
			</div>
		</section>


	}
}

export default Featured
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="banner-area" style={{background: 'url('+publicUrl+'assets/img/banner/2.png)'}}>
			  <div className="container">
			    <div className="banner-area-inner">
			      <div className="row justify-content-center">
			        <div className="col-lg-8">
			          <div className="banner-inner text-center">
			            <h2>Drketa <br /> <span>Marketing</span></h2>
			            <p>Chúng tôi mang đến cho các bạn giải pháp tăng tương tác Mạng Xã Hội uy tín và an toàn.</p>
			          </div>
			        </div>
			        {/* <div className="col-md-10">
			          <form>
			            <select>
			              <option>All resources</option>
			              <option value={1}>1 resource</option>
			              <option value={2}>2 resource</option>
			              <option value={3}>3 resource</option>
			            </select>
			            <input type="text" className="form-control" />
			            <button type="submit" className="btn"><img src={publicUrl+"assets/img/icon/1.png"} alt="img" /></button>
			          </form>
			        </div> */}
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default Banner
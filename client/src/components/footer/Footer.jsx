import React from "react";
import { Link } from "react-router-dom";
import Maps from "./maps/Maps";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaPinterest,
	FaTwitter,
	FaWhatsapp,
	FaYoutube,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
	return (
		<div className="container" id="containerfoot">
			<div className="row mt-5 inner">
				<div className="col-md-3">
					<h4 className="text">NEED HELP?</h4>
					<p className="text">(9am-10pm, Mon-Sat)</p>
					<p className="mt-3 text">+92 307 0790425</p>
					<p className="mt-4">
						<Link id="footer" to="#">
							support@desiretech.com
						</Link>
					</p>
				</div>
				<div className="col-md-2">
					<h4 className="text">Useful Links</h4>
					<br />
					<Link id="footer" to="#">
						Home
					</Link>
					<Link id="footer" to="#">
						Contact Us
					</Link>
					<Link id="footer" to="#">
						Login
					</Link>
					<Link id="footer" to="#">
						Register
					</Link>
				</div>
				<div className="col-md-2">
					<h4 className="text">FOLLOW US</h4>
					<br />
					<Link to="#">
						<FaFacebook className="mx-2 mt-3 fb" />
					</Link>
					<Link to="#">
						<FaWhatsapp className="mx-2 mt-3 wa" />
					</Link>
					<Link to="#">
						<FaTwitter className="mx-2 mt-3 tw" />
					</Link>
					<Link to="#">
						<FaYoutube className="mx-2 mt-3 yt" />
					</Link>
					<Link to="#">
						<FaInstagram className="mx-2 mt-3 it" />
					</Link>
					<Link to="#">
						<FaPinterest className="mx-2 mt-3 pi" />
					</Link>
					<Link to="#">
						<FaLinkedin className="mx-2 mt-3 in" />
					</Link>
				</div>
				<div className="col-md-5">
					<Maps />
				</div>
			</div>
		</div>
	);
};

export default Footer;

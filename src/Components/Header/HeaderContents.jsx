import React from "react";

function HeaderContents() {
	return (
		<div className="container">
			<div className="nav-inner">
				<a href="https://mybizvi.com/" className="logo-wrapper">
					Chatbot
				</a>
				<a href="https://mybizvi.com/contact-us/" className="contact-btn">
					Contact Us
				</a>
			</div>
		</div>
	);
}

export default React.memo(HeaderContents);

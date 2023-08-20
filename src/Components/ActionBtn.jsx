import { motion } from "framer-motion";
import { useUserInfo } from "../contexts/userInfoContext";

export default function Button({ node }) {
	const { userInfo } = useUserInfo();

	const handleClick = (event) => {
		// send users messages to the registration handler
		const {
			businessName,
			island,
			firstName,
			employees,
			physicalAddress,
			mailingAddress,
			industry,
			lastName,
			email,
			phone,
		} = userInfo;

		const hydratedUrl = `${actionUrl}?businessName=${businessName}&island=${island}&firstName=${firstName}&employees=${employees}&physicalAddress=${physicalAddress}&mailingAddress=${mailingAddress}&industry=${industry}&lastName=${lastName}&email=${email}&phone=${phone}`;

		window.location = hydratedUrl;
	};

	return (
		<motion.button
			initial={{ opacity: 0, scale: 0.5, translateX: 200 }}
			animate={{ opacity: 1, scale: 1, translateX: 0 }}
			transition={{ duration: 0.3 }}
			onClick={handleClick}
			className={node.sender}
		>
			{node.message}
		</motion.button>
	);
}

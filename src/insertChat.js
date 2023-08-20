export default function insertChat(contents, chat, setChat) {
	const newContentsArr = [];
	newContentsArr.push(contents[0]);

	setChat({
		...chat,
		step: chat.step++,
		contents: [...chat.contents, ...newContentsArr],
	});

	if (contents.length > 1) {
		let index = 1;
		const intervalId = setInterval(() => {
			newContentsArr.push(contents[index]);

			setChat({
				...chat,
				contents: [...chat.contents, ...newContentsArr],
			});

			index++;

			if (index >= contents.length) {
				clearInterval(intervalId);
			}
		}, 1000);
	}
}

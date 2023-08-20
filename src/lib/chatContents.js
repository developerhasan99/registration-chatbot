export const chatContents = [
	[
		{
			message: "Hello! Let’s get started on getting you in business!",
			sender: "bot",
			type: "p",
		},
		{
			message:
				"Here’s how it works. Initially, we'll ask you a few simple questions about yourself and your company.",
			sender: "bot",
			type: "p",
		},
		{
			message:
				"Then, we can suggest the most suitable products or services for your business formation.",
			sender: "bot",
			type: "p",
		},
		{
			message: "Are you ready to get started with your business formation?",
			sender: "bot",
			type: "p",
		},
		{
			message: "Yes, I am prepared to start my business formation.",
			sender: "user",
			type: "button",
		},
	],
	[
		{ message: "Nice!", sender: "bot", type: "p" },
		{
			message:
				"Let’s start by telling us what you would like to name your business.",
			sender: "bot",
			type: "p",
		},
		{
			message: "Enter your preferred business name...",
			sender: "bot",
			type: "form",
			name: "businessName",
		},
	],
	[
		{ message: "Perfect!", sender: "bot", type: "p" },
		{
			message: "What island are you forming your business in?",
			sender: "bot",
			type: "p",
		},
		{
			type: "buttonGroup",
			name: "island",
			buttons: [
				{
					message: "St. Croix, U.S. Virgin Islands",
					sender: "user",
				},
				{
					message: "St. John, U.S. Virgin Islands",
					sender: "user",
				},
				{
					message: "St. Thomas, U.S. Virgin Islands",
					sender: "user",
				},
			],
		},
	],
	[
		{
			message:
				"Awesome! MyBizVI will perform a comprehensive check when we file your formation to verify if your desired name is available.",
			sender: "bot",
			type: "p",
		},
		{
			message:
				"Next up, please provide your first name of the responsible party…",
			sender: "bot",
			type: "p",
		},
		{
			message: "Enter your first name...",
			sender: "bot",
			name: "firstName",
			type: "form",
		},
	],
	[
		{
			message:
				"<strong>__first_name</strong>, it is a pleasure to have been chosen to assist you with your business formation. Thank you.",
			sender: "bot",
			type: "p",
		},
		{
			message:
				"Will “<strong>__business_name</strong>” have any employees (excluding you) within the first 12 months?",
			sender: "bot",
			type: "p",
		},
		{
			type: "buttonGroup",
			name: "employees",
			buttons: [
				{
					message: "No",
					sender: "user",
				},
				{
					message: "Yes, 1- 5 employees!",
					sender: "user",
				},
				{
					message: "Yes, 6 or more employees!",
					sender: "user",
				},
			],
		},
	],
	[
		{
			message:
				"Will “<strong>__business_name</strong>” have a physical location other than your residential address?",
			sender: "bot",
			type: "p",
		},
		{
			type: "buttonGroup",
			name: "addressConfirmation",
			buttons: [
				{
					message: "Yes",
					sender: "user",
				},
				{
					message: "No",
					sender: "user",
				},
			],
		},
	],
	[
		{
			message:
				"Please provide the physical address of “<strong>__business_name</strong>” as it appears on your lease/deed.",
			sender: "bot",
			type: "p",
		},
		{
			message: "Enter street address, city, state, and zip code",
			sender: "bot",
			type: "form",
			name: "physicalAddress",
		},
	],
	[
		{
			message:
				"Please provide the mailing address of “<strong>__business_name</strong>”.",
			sender: "bot",
			type: "p",
		},
		{
			message: "Enter street address, city, state, and zip code",
			sender: "bot",
			type: "form",
			name: "mailingAddress",
		},
	],
	[
		{
			message:
				"Lastly, tell us what the nature of your business is. For example, retail sales, bookkeeping, restaurant, etc.",
			sender: "bot",
			type: "p",
		},
		{
			message: "Enter your industry …",
			sender: "bot",
			type: "form",
			name: "industry",
		},
	],
	[
		{
			message:
				"Several “<strong>__industry</strong>” companies that we helped start have gone on to have remarkable success. We are looking forward to having the opportunity start this journey with you.",
			sender: "bot",
			type: "p",
		},
		{
			message: "Let’s Go! What’s your last name?",
			sender: "bot",
			type: "p",
		},
		{
			message: "Enter your last name here…",
			sender: "bot",
			type: "form",
			name: "lastName",
		},
	],
	[
		{
			message: "Great, And your email address?",
			sender: "bot",
			type: "p",
		},
		{
			message: "Enter your email address here…",
			sender: "bot",
			type: "form",
			name: "email",
		},
	],
	[
		{
			message: "And the best phone number where we may contact you please?",
			sender: "bot",
			type: "p",
		},
		{
			message: "Enter your phone number here…",
			sender: "bot",
			type: "form",
			name: "phone",
		},
	],
	[
		{
			message:
				"“<strong>__first_name</strong>” That is all the preliminary information that we will need for now. It was great chatting with you and determining your business formation needs.",
			sender: "bot",
			type: "p",
		},
		{
			message:
				"Perfect, we are just about done! We are ready to get your business going.",
			sender: "bot",
			type: "p",
		},
		{
			message: "LET’S GO!",
			sender: "user",
			type: "actionBtn",
			name: "final",
		},
	],
];

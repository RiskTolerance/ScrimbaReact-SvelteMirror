export type Card = {
	status: string;
	rating: number;
	numberOfRatings: number;
	city: string;
	country: string;
	descriptionShort: string;
	price: string;
	imgUrl: string;
};

export type cardData = Array<Card>;

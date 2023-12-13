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

export type CardData = Array<Card>;

export type Meme = {
	id: string;
	name: string;
	url: string;
	height: number;
	width: number;
	box_count: number;
};

export type MemeData = Array<Meme>;

export type MemeState = {
	top_text: string;
	bottom_text: string;
	id: string;
	name: string;
	url: string;
	height: number;
	width: number;
	box_count: number;
};

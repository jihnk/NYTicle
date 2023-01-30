interface Person {
	firstname: string;
	middlename: string | null;
	lastname: string;
	qualifier: string | null;
	title: string | null;
	role: string;
	organization: string;
	rank: number;
}

interface ArticleType {
	abstract: string;
	web_url: string;
	snippet: string;
	lead_paragraph: string;
	source: string;
	multimedia: any[];
	headline: {
		main: string;
		kicker: null;
		content_kicker: null;
		print_headline: null;
		name: null;
		seo: null;
		sub: null;
	};
	pub_date: string;
	keywords: any[];
	document_type: string;
	news_desk: string;
	section_name: string;
	subsection_name?: string;
	byline: {
		original: string | null;
		person: Person[];
		organization: string | null;
	};
	type_of_material: string;
	_id: string;
	word_count: number;
	uri: string;
}

export type { ArticleType };

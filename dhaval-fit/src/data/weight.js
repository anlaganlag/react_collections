// Data for Weight Loss curve

export const data = [
	{ date: "2017-08-01", value: 100, desc: "Started Journey" },
	{ date: "2018-07-21", value: 89, desc: "Hit pleatu" },
	{ date: "2019-05-28", value: 82 },
	{ date: "2019-08-30", value: 77.2, dec: "Hit another pleatu " },
	{ date: "2020-07-13", value: 84.4 },
	{ date: "2020-07-14", value: 83.8 },
	{ date: "2020-07-15", value: 83.0 },
	{ date: "2020-07-16", value: 82.4 },
	{ date: "2020-07-17", value: 82.6 },
	{ date: "2020-07-18", value: 82.4 },
	{ date: "2020-07-19", value: 82.6 },
	{ date: "2020-07-20", value: 82.4 },
	{ date: "2020-07-21", value: 82.4 },
	{ date: "2020-07-22", value: 81.8 },
	{ date: "2020-07-23", value: 81.5 },
	{ date: "2020-07-24", value: 81.3 },
	{ date: "2020-07-25", value: 81.3 },
	{ date: "2020-07-26", value: 81.0 },
	{ date: "2020-07-27", value: 80.6 },
	{
		date: "2020-09-05",
		value: 79,
	},
	{
		date: "2020-09-06",
		value: 78.5,
	},
	{
		date: "2020-09-07",
		value: 78.7,
	},
	{
		date: "2020-09-08",
		value: 78.5,
	},
	{
		date: "2020-09-09",
		value: 78.2,
	},
	{
		date: "2020-09-10",
		value: 78.2,
	},
	{
		date: "2020-09-11",
		value: 78.4,
	},
	{
		date: "2020-09-12",
		value: 78.3,
	},
	{
		date: "2020-09-13",
		value: 78.3,
	},
	{
		date: "2020-09-14",
		value: 79.4,
	},
	{
		date: "2020-09-15",
		value: 78.6,
	},
	{
		date: "2020-09-16",
		value: 78.6,
	},
	{
		date: "2020-09-17",
		value: 78.3,
	},
	{
		date: "2020-09-18",
		value: 78.2,
	},
	{
		date: "2020-09-19",
		value: 78.1,
	},
	{
		date: "2020-09-20",
		value: 78,
		desc: "START",
	},
	{
		date: "2020-09-21",
		value: 78.3,
	},
	{
		date: "2020-09-22",
		value: 77.7,
	},
	{
		date: "2020-09-23",
		value: 77.6,
	},
	{
		date: "2020-09-24",
		value: 77.8,
	},
	{
		date: "2020-09-25",
		value: 77.3,
	},
	{
		date: "2020-09-26",
		value: 77.5,
	},
	{ date: "2020-09-27", value: 76.9 },
	{ date: "2020-09-28", value: 76.5 },
	{ date: "2020-09-29", value: 77.3 },
	{ date: "2020-09-30", value: 77.0 },
	{ date: "2020-10-01", value: 77.7 },
	{ date: "2020-10-02", value: 77.2 },
	{ date: "2020-10-03", value: 77.2 },
];

export const config = {
	data,
	forceFit: true,
	title: {
		visible: true,
		text: "Weight Loss Curve",
	},
	markerPoints: [
		{
			visible: true,
			data: [{ date: "22017-08-01", value: 100 }],
			size: 20,
			symbol:
				"image://https://www.flaticon.com/svg/static/icons/svg/1694/1694157.svg",
			label: {
				visible: true,
				position: "bottom",
				offsetY: 20,
				field: "desc",
			},
		},
	],
	padding: "auto",
	xField: "date",
	yField: "value",
	/*     theme: "dark",
	 */ responsive: true,
	smooth: true,
	interactions: [
		{
			type: "slider",
			cfg: {
				start: 0.5,
				end: 1,
			},
		},
	],
	yAxis: {
		min: 69,
		max: 105,
	},
	point: {
		visible: true,
	},
	label: {
		visible: false,
		type: "point",
	},
	animation: { appear: { animation: "clipingWithData" } },
};

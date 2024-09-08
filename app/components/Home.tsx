import React from 'react'
import { BulletPoints, SingleLine, TwoLines } from './Description';

const steps = [
	{
		id: 0,
		title: 'How does it work?',
		description: (
			<SingleLine
				text="We make it possible in a quick and easy few steps process, takes max 5 mins."
				active={false}
			/>
		),
		arrowVisible: false,
		image: 'https://i.postimg.cc/wMPgqyyV/how-it-works.png',
	},
	{
		id: 1,
		title: 'Step 1',
		description: (
			<TwoLines
				active
				text=""
				textArray={[
					'Tenant selects the property',
					'Tenant selects flexible rent tenure & corresponding amount',
				]}
				activeIndex={0}
			/>
		),
		image: 'https://i.postimg.cc/wMPgqyyV/how-it-works.png',
		scaleImage: true,
		scaleImageNumber: 1.2,
		arrowVisible: true,
		arrowImage: 'https://i.postimg.cc/Vv5zPB6v/arrow.png',
		arrowTop: 'top-[260px]',
		arrowLeft: 'left-[-290px]',
	},
	{
		id: 2,
		title: 'Step 1',
		description: (
			<TwoLines
				text=""
				active
				textArray={[
					'Tenant selects the property',
					'Tenant selects flexible rent tenure & corresponding amount',
				]}
				activeIndex={1}
			/>
		),
		image: 'https://i.postimg.cc/J4fMSXW7/step-1.png',
		scaleImage: true,
		scaleImageNumber: 1.3,
		arrowVisible: true,
		arrowImage: 'https://i.postimg.cc/Vv5zPB6v/arrow.png',
		arrowTop: 'top-[320px]',
		arrowLeft: 'left-[-250px]',
		arrowRight: '',
		arrowRotate: 'rotate-[-180deg]',
	},
	{
		id: 3,
		title: 'Step 2',
		description: (
			<BulletPoints
				active
				text="Tenant gets approved to move-in"
				bulletPoints={[
					'Zero security deposit move-in',
					'Reduceed rent offer',
					'3 months salary cover',
				]}
			/>
		),
		image: 'https://i.postimg.cc/RV6vPRyb/step-2.png',
		arrowVisible: true,
		arrowTop: 'top-[350px]',
		arrowLeft: 'left-[-250px]',
		arrowRight: '',
		arrowImage: 'https://i.postimg.cc/Vv5zPB6v/arrow.png',
	},
	{
		id: 4,
		title: 'Step 3',
		description: (
			<SingleLine
				text="Smooth Onboarding for the Tenant begins"
				active={true}
			/>
		),
		image: 'https://i.postimg.cc/fWgwjF29/step-3.png',
		arrowVisible: true,
		arrowTop: 'top-[420px]',
		arrowLeft: 'left-[-130px]',
		arrowRight: '',
		arrowImage: 'https://i.postimg.cc/Vv5zPB6v/arrow.png',
	},
	{
		id: 5,
		title: 'Step 4',
		description: (
			<BulletPoints
				active
				text="Tenant gets approved to move-in"
				bulletPoints={[
					'Gets Zero-security deposit approval',
					'Zero cost EMI = Monthly Rent',
				]}
			/>
		),
		image: 'https://i.postimg.cc/Y9DwRG3H/step-4.png',
		arrowVisible: true,
		arrowTop: 'top-[230px]',
		arrowLeft: 'left-[-220px]',
		arrowRight: '',
		arrowImage: 'https://i.postimg.cc/Vv5zPB6v/arrow.png',
	},
];

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home
import {Audio} from 'remotion'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Logo} from './EmagVideo/Logo';
import {Bubble} from './EmagVideo/Bubble';
import {Title} from './EmagVideo/Title';
import {VideoReview} from './EmagVideo/Video';
import {Screen1} from './EmagVideo/Screen1';
import {Screen2} from './EmagVideo/Screen2';
import {Screen3} from './EmagVideo/Screen3';
import {Screen4} from './EmagVideo/Screen4';
import {Screen5} from './EmagVideo/Screen5';
import {Screen6} from './EmagVideo/Screen6';
import {Screen7} from './EmagVideo/Screen7';
import {Screen8} from './EmagVideo/Screen8';
import {Screen9} from './EmagVideo/Screen9';
import {BackgroundMusic} from './EmagVideo/BackgroundMusic';
import audio2 from './EmagVideo/assets/audios/huawei00.wav'
import audio1 from './EmagVideo/assets/fata/emag.mp4'
import Bg from './EmagVideo/bg.png';
export const EmagVideo: React.FC<{
	productName: string;
	productFullName: string;
  productPrice: string;
  productDiscount: string;
  productRating: string;
  productReview1: string;
  productReview2: string;
}> = ({productName, productFullName, productPrice, productDiscount, productRating, productReview1, productReview2}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div style={{flex: 1,  backgroundColor: `#000`}}>
			<div style={{opacity}}>
				<Sequence from={0} durationInFrames={Infinity}>
					<BackgroundMusic/>
				</Sequence>
				<Sequence from={0} durationInFrames={160}>
					<Screen1 productName={productName} />
				</Sequence>
				<Sequence from={20} durationInFrames={Infinity}>
					<Audio
						src={audio1}
						volume={1}
		    />
				</Sequence>
				<Sequence from={100} durationInFrames={140}>
					<Screen2 productFullName={productFullName} />
				</Sequence>
				<Sequence from={100} durationInFrames={Infinity}>
					<Audio
						src={audio2}
						volume={1}
		    />
				</Sequence>
				<Sequence from={210} durationInFrames={160}>
					<Screen4 productPrice={productPrice} />
				</Sequence>
				<Sequence from={300} durationInFrames={160}>
					<Screen3 productDiscount={productDiscount} />
				</Sequence>
				<Sequence from={430} durationInFrames={160}>
					<Screen5 productRating={productRating} />
				</Sequence>
				<Sequence from={530} durationInFrames={240}>
					<Screen6 productReview1={productReview1} productReview2={productReview2} />
				</Sequence>
				<Sequence from={700} durationInFrames={400}>
					<Screen7  />
				</Sequence>
				<Sequence from={1050} durationInFrames={500}>
					<Screen8  />
				</Sequence>
				<Sequence from={1530} durationInFrames={Infinity}>
					<Screen9  />
				</Sequence>
			</div>
		</div>
	);
};

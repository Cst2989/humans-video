import {Audio} from 'remotion'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
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
export const EmagVideo: React.FC<{
	productName: string;
  screenOneVideo: string;
  screnOneAudio: string;
  screenTwoVideo: string;
  screenTwoAudio: string;
  screenThreeVideo: string;
  screenFourVideo: string;
  screenFiveVideo: string;
  ratingVideo: string;
  screenSixVideo: string;
  productReviewAudio1: string;
  productReviewAudio2: string;
  screenSevenVideo: string;
  screenSevenFaceVideo: string;
  screenEightVideo: string;
  screenEightFaceVideo: string;
  screenNineVideo: string;
  screenNineAudio: string;
	productFullName: string;
  productPrice: string;
  productDiscount: string;
  productRating: string;
  productReview1: string;
  productReview2: string;
  bgMusic: string;
  show3DVideo: boolean;
}> = ({productName, screenOneVideo,screnOneAudio, screenTwoVideo, screenTwoAudio, screenThreeVideo, screenFourVideo, screenFiveVideo, ratingVideo, screenSixVideo, productReviewAudio1, productReviewAudio2,screenSevenVideo, screenSevenFaceVideo,screenEightVideo,  screenEightFaceVideo, screenNineVideo, screenNineAudio, productFullName, productPrice, productDiscount, productRating, productReview1, productReview2, bgMusic, show3DVideo}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
  const audio1 = require( `${screnOneAudio}`);
  const audio2 = require( `${screenTwoAudio}`);
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
					<BackgroundMusic bgMusic={bgMusic}/>
				</Sequence>
				<Sequence from={0} durationInFrames={160}>
					<Screen1 screenOneVideo={screenOneVideo} productName={productName} />
				</Sequence>
				<Sequence from={20} durationInFrames={Infinity}>
					<Audio
						src={audio1}
						volume={1}
		    />
				</Sequence>
				<Sequence from={100} durationInFrames={140}>
					<Screen2 screenTwoVideo={screenTwoVideo} productFullName={productFullName} />
				</Sequence>
				<Sequence from={100} durationInFrames={Infinity}>
					<Audio
						src={audio2}
						volume={1}
		    />
				</Sequence>
				<Sequence from={210} durationInFrames={160}>
					<Screen4 screenThreeVideo={screenThreeVideo} productPrice={productPrice} />
				</Sequence>
				<Sequence from={300} durationInFrames={160}>
					<Screen3 screenFourVideo={screenFourVideo} productDiscount={productDiscount} />
				</Sequence>
				<Sequence from={430} durationInFrames={160}>
					<Screen5 ratingVideo={ratingVideo} screenFiveVideo={screenFiveVideo} productRating={productRating} />
				</Sequence>
				<Sequence from={530} durationInFrames={240}>
					<Screen6 productReviewAudio1={productReviewAudio1} productReviewAudio2={productReviewAudio2} screenSixVideo={screenSixVideo} productReview1={productReview1} productReview2={productReview2} />
				</Sequence>
				{show3DVideo && (
					<div>
						<Sequence from={700} durationInFrames={400}>
							<Screen7 screenSevenVideo={screenSevenVideo} screenSevenFaceVideo={screenSevenFaceVideo} />
						</Sequence>
						<Sequence from={1050} durationInFrames={500}>
							<Screen8 screenEightVideo={screenEightVideo} screenEightFaceVideo={screenEightFaceVideo}/>
						</Sequence>
					</div> )}
				<Sequence from={show3DVideo ? 1530 : 760} durationInFrames={Infinity}>
					<Screen9 screenNineVideo={screenNineVideo} screenNineAudio={screenNineAudio} />
				</Sequence>
			</div>
		</div>
	);
};

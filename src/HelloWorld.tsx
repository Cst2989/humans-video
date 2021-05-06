import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Logo} from './HelloWorld/Logo';
import {Bubble} from './HelloWorld/Bubble';
import {Title} from './HelloWorld/Title';
import {VideoReview} from './HelloWorld/Video';
import Bg from './HelloWorld/bg.png';
export const HelloWorld: React.FC<{
	titleText: string;
	videoUrl: string;
}> = ({titleText, videoUrl}) => {
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
	const transitionStart = 5;

	return (
		<div style={{flex: 1,  backgroundImage: `url(${Bg})`}}>
			<div style={{opacity}}>
				<Sequence from={0} durationInFrames={Infinity}>
					<VideoReview videoUrl={videoUrl}/>
				</Sequence>
				<Sequence from={transitionStart} durationInFrames={Infinity}>
					<Bubble titleText={titleText}/>
				</Sequence>
			</div>
		</div>
	);
};

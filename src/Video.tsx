import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Bubble} from './HelloWorld/Bubble';
import {Title} from './HelloWorld/Title';
import {VideoReview} from './HelloWorld/Video';
export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'And it has a rating of 4.7 stars',
					videoUrl: 'https://humans-highway.s3.eu-central-1.amazonaws.com/dummy/2285/2285.mp3',
				}}
			/>
			<Composition
				id="VideoReview"
				component={VideoReview}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Bubble"
				component={Bubble}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};

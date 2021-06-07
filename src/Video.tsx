import { Composition } from 'remotion';
import { EmagVideo } from './EmagVideo';
export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="EmagVideo"
				component={EmagVideo}
				durationInFrames={1700}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'And it has a rating of 4.7 stars',
					videoUrl: 'https://humans-highway.s3.eu-central-1.amazonaws.com/dummy/2285/2285.mp3',
				}}
			/>
		</>
	);
};

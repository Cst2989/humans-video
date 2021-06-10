import {getInputProps} from 'remotion'
import { Composition } from 'remotion';
import { EmagVideo } from './EmagVideo';
export const RemotionVideo: React.FC = () => {
	return (
		<div className="video">
			<Composition
				id="EmagVideo"
				component={EmagVideo}
				durationInFrames={1700}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={getInputProps()}
			/>
		</div>
	);
};

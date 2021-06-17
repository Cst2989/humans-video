import {useVideoConfig} from 'remotion'
import {getInputProps} from 'remotion'
import { Composition } from 'remotion';
import { EmagVideo } from './EmagVideo';
export const RemotionVideo: React.FC = () => {
  const props = getInputProps();
  console.log(props)
	return (
		<div className="video">
			<Composition
				id="EmagVideo"
				component={EmagVideo}
				durationInFrames={props.show3DVideo ? 1700 : 970}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={props}
			/>
		</div>
	);
};

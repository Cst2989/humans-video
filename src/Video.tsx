import {useVideoConfig} from 'remotion'
import {getInputProps} from 'remotion'
import { Composition } from 'remotion';
import { ModularVideo } from './ModularVideo';
export const RemotionVideo: React.FC = () => {
  const props = getInputProps();
  const videoDuration = props.screen1.duration + props.screen2.duration + props.screen3.duration + props.screen4.duration + props.screen5.duration + props.screen6.duration + props.screen7.duration + props.screen8.duration +props.screen9.duration + props.screen10.duration;
	return (
		<div className="video">
			<Composition
				id="ModularVideo"
				component={ModularVideo}
				durationInFrames={videoDuration}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={props}
			/>
		</div>
	);
};

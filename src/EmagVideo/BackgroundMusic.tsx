import {Audio} from 'remotion'
import audio from './assets/audio.mp3'
export const BackgroundMusic: React.FC = () => {
	return (
		<Audio
			src={audio}
			volume={0.1}
			startFrom={900} // if composition is 30fps, then it will start at 2s
		/>
	);
};

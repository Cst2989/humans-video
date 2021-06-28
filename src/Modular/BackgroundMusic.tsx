import {Audio} from 'remotion'
export const BackgroundMusic: React.FC <{bgMusic: string}> = ({bgMusic}) => {
  const audio = require( `${bgMusic}`);
	return (
		<Audio
			src={audio}
			volume={0.1}
			startFrom={900} // if composition is 30fps, then it will start at 2s
		/>
	);
};

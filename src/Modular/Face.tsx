import {Video} from 'remotion'
import FaceBg from './assets/bara.png';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
export const Face: React.FC<{
	faceVideoUrl: string;
}> = ({faceVideoUrl}) => {
	return (
		<div style={{
      backgroundImage: `url(${FaceBg})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      textTransform: 'uppercase',
      textAlign: 'center',
      position: 'absolute',
      right: 0,
      top: '200px',
      width: '400px',
      height: '500px',
      overflow: 'hidden',
		}}
		>
			<Video
				src={faceVideoUrl}
				style={{
          marginTop: '30px',
          width: 'auto',
          height: '100%',
          marginLeft:'-220px'
				}}
		/>
		</div>

	);
};

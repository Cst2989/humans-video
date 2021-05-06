import {Video} from 'remotion'
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
export const VideoReview: React.FC<{
	videoUrl: string;
}> = ({videoUrl}) => {
	return (
		<Video
			src={videoUrl}
			style={{
				fontFamily: 'SF Pro Text, Helvetica, Arial',
				fontWeight: 'bold',
				fontSize: 100,
				textAlign: 'center',
				position: 'absolute',
				right: 0,
				width: '200px',
        height: '400px'
			}}
		/>
	);
};

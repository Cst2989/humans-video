import {Video} from 'remotion'
export const VideoScreen: React.FC<{
	videoUrl: string;
}> = ({videoUrl}) => {
	return (
		<Video
			src={videoUrl}
			volume={0}
			style={{
				position: 'absolute',
				right: 0,
        top:0,
				width: '100%',
        height: '100%'
			}}
		/>
	);
};

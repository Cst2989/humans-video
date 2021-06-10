import {Video} from 'remotion'
import { Face } from './Face'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
export const Screen8: React.FC<{screenEightVideo: string, screenEightFaceVideo: string }> = ({screenEightVideo, screenEightFaceVideo}) => {
  const screen8 = require( `${screenEightVideo}`);
  const screen8Face = require( `${screenEightFaceVideo}`);
  const frame = useCurrentFrame();
  const bottom  = interpolate(frame, [0, 35], [-1920, 0], {
    extrapolateRight: "clamp"
  });
	return (
		<div style={{
      position: 'absolute',
      bottom,
      left: 0,
      height: '100%',
      width: '100%',
		}}
		>
			<Sequence from={0} durationInFrames={Infinity}>
				<Video
					src={screen8}
					startFrom={1020}
					volume={0}
					style={{
            position: 'absolute',
            right: 0,
            top:0,
            width: '100%',
            height: '100%'
					}}
		    />
			</Sequence>
			<Sequence from={120} durationInFrames={300} >
				<Face faceVideoUrl={screen8Face} />
			</Sequence>
		</div>
	);
};

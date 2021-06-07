import {Video} from 'remotion'
import screen7 from './assets/videos/huawei.mp4'
import { VideoScreen } from './VideoScreen'
import { Face } from './Face'
import screen7Face from './assets/fata/screen7-2.mp4'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
export const Screen8: React.FC = () => {
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
					src={screen7}
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
				<Face faceVideoUrl={screen7Face} />
			</Sequence>
		</div>
	);
};

import screen7 from './assets/videos/huawei.mp4'
import { VideoScreen } from './VideoScreen'
import { Face } from './Face'
import screen7Face from './assets/fata/screen7.mp4'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
export const Screen7: React.FC = () => {
  const frame = useCurrentFrame();
  const left  = interpolate(frame, [0, 35], [-1920, 0], {
    extrapolateRight: "clamp"
  });
	return (
		<div style={{
      position: 'absolute',
      left,
      top: 0,
      height: '100%',
      width: '100%',
		}}
		>
			<Sequence from={0} durationInFrames={Infinity}>
				<VideoScreen videoUrl={screen7} />
			</Sequence>
			<Sequence from={90} durationInFrames={Infinity} >
				<Face faceVideoUrl={screen7Face} />
			</Sequence>
		</div>
	);
};

import {Audio} from 'remotion'
import screen1 from './assets/videos/screen-1.mp4'

import { VideoScreen } from './VideoScreen'
import { ProductFullName } from './ProductFullName'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
export const Screen2: React.FC<{productFullName: string}> = ({productFullName}) => {
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
				<VideoScreen videoUrl={screen1} />
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity}>
				<ProductFullName productFullName={productFullName} />
			</Sequence>

		</div>
	);
};

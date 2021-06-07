import screen3 from './assets/videos/screen-3.mp4'
import { VideoScreen } from './VideoScreen'
import { ProductDiscount } from './ProductDiscount'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
export const Screen3: React.FC<{productDiscount: string}> = ({productDiscount}) => {
  const frame = useCurrentFrame();
  const bottom  = interpolate(frame, [0, 25], [-1920, 0], {
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
				<VideoScreen videoUrl={screen3} />
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity}>
				<ProductDiscount productDiscount={productDiscount} />
			</Sequence>
		</div>
	);
};

import screen4 from './assets/videos/screen-4.mp4'
import { VideoScreen } from './VideoScreen'
import { ProductDiscount } from './ProductDiscount'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
export const Screen4: React.FC<{productPrice: string}> = ({productPrice}) => {
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
				<VideoScreen videoUrl={screen4} />
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity}>
				<ProductDiscount productDiscount={productPrice} />
			</Sequence>
		</div>
	);
};

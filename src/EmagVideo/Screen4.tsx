import { VideoScreen } from './VideoScreen'
import { ProductDiscount } from './ProductDiscount'
import {interpolate, Sequence, useCurrentFrame} from 'remotion';
export const Screen4: React.FC<{screenThreeVideo: string, productPrice: string}> = ({productPrice, screenThreeVideo}) => {
  const screen4 = require( `${screenThreeVideo}`);
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

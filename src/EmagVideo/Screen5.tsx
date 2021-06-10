import { VideoScreen } from './VideoScreen'
import { ProductDiscount } from './ProductDiscount'
import { Face } from './Face'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
export const Screen5: React.FC<{ratingVideo: string, screenFiveVideo: string, productRating: string}> = ({ratingVideo, screenFiveVideo ,productRating}) => {
  const screen5 = require( `${screenFiveVideo}`);
  const rating = require( `${ratingVideo}`);
  const frame = useCurrentFrame();
  const top  = interpolate(frame, [0, 25], [-1920, 0], {
    extrapolateRight: "clamp"
  });
	return (
		<div style={{
      position: 'absolute',
      top,
      left: 0,
      height: '100%',
      width: '100%',
		}}
		>
			<Sequence from={0} durationInFrames={Infinity}>
				<VideoScreen videoUrl={screen5} />
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity}>
				<ProductDiscount productDiscount={productRating} />
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity}>
				<Face faceVideoUrl={rating} />
			</Sequence>
		</div>
	);
};

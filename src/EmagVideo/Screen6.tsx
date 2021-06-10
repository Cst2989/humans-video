import {Audio} from 'remotion'
import { VideoScreen } from './VideoScreen'
import { ProductReview } from './ProductReview'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
export const Screen6: React.FC<{productReviewAudio1: string, productReviewAudio2: string, screenSixVideo: string, productReview1: string, productReview2: string}> = ({productReviewAudio1, productReviewAudio2, screenSixVideo, productReview1, productReview2}) => {
  const frame = useCurrentFrame();
  const screen6 = require( `${screenSixVideo}`);
  const audio1 = require( `${productReviewAudio1}`);
  const audio2 = require( `${productReviewAudio2}`);
  const bottom  = interpolate(frame, [0, 20], [-1920, 0], {
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
				<VideoScreen videoUrl={screen6} />
			</Sequence>
			<Sequence from={0} durationInFrames={80}>
				<ProductReview review={productReview1} />
			</Sequence>
			<Sequence from={0} durationInFrames={80}>
				<Audio
					src={audio1}
					volume={1}
		    />
			</Sequence>
			<Sequence from={80} durationInFrames={160}>
				<ProductReview review={productReview2} />
			</Sequence>
			<Sequence from={80} durationInFrames={170}>
				<Audio
					src={audio2}
					volume={1}
		    />
			</Sequence>
		</div>
	);
};

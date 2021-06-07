import {Audio} from 'remotion'
import screen6 from './assets/videos/screen-6.mp4'
import audio1 from './assets/audios/guy01.wav'
import audio2 from './assets/audios/guy02.wav'
import { VideoScreen } from './VideoScreen'
import { ProductReview } from './ProductReview'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
export const Screen6: React.FC<{productReview1: string, productReview2: string}> = ({productReview1, productReview2}) => {
  const frame = useCurrentFrame();
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

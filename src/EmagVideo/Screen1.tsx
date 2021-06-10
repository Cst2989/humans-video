import { VideoScreen } from './VideoScreen'
import { ProductName } from './ProductName'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
export const Screen1: React.FC<{screenOneVideo: string, productName: string}> = ({productName , screenOneVideo}) => {
  const screen1 = require( `${screenOneVideo}`);
	return (
		<div>
			<Sequence from={0} durationInFrames={Infinity}>
				<VideoScreen videoUrl={screen1} />
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity}>
				<ProductName productName={productName} />
			</Sequence>
		</div>
	);
};

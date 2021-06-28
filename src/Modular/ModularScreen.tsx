import {Audio} from 'remotion'
import { VideoScreen } from './VideoScreen'
import { Text } from './Text'
import {screenOptionsDTO} from '../types'
import { Face } from './Face'
import {Image} from './Image'
import {interpolate, Sequence, useCurrentFrame} from 'remotion';
export const ModularScreen: React.FC<{screenOptions: screenOptionsDTO}> = ({screenOptions}) => {
  const frame = useCurrentFrame();
  const backgroundVideo = require( `${screenOptions.backgroundVideo}`);
  const audio = require( `${screenOptions.audio}`);
  const faceVideo = require( `${screenOptions.faceVideo}`);
  const transition  = interpolate(frame, [0, 25], [-1920, 0], {
    extrapolateRight: "clamp"
  });
	return (
		<div style={{
      position: 'absolute',
      bottom: screenOptions.screenTranzition === 'bottom' ? transition : 0,
      left: screenOptions.screenTranzition === 'left' ? transition : 0,
      right: screenOptions.screenTranzition === 'right' ? transition : 0,
      top: screenOptions.screenTranzition === 'top' ? transition : 0,
      height: '100%',
      width: '100%',
		}}
		>
			<Sequence from={0} durationInFrames={Infinity}>
				<VideoScreen videoUrl={backgroundVideo} />
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity}>
				<Face faceVideoUrl={faceVideo} />
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity}>
				<Audio
					src={audio}
					volume={1}
		    />
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity}>
				<Image
					imageUrl={screenOptions.image}
					imageTransition={screenOptions.imageTranzition}
		    />
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity}>
				<Text
					text={screenOptions.text}
					textTransition={screenOptions.textTranzition}
		    />
			</Sequence>
		</div>
	);
};

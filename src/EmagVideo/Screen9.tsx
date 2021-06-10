import {Audio} from 'remotion'
import { VideoScreen } from './VideoScreen'
import Logo from './assets/logo-emag.png';
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
export const Screen9: React.FC<{screenNineVideo: string, screenNineAudio: string}>= ({screenNineVideo,screenNineAudio }) => {
  const screen9 = require( `${screenNineVideo}`);
  const audio1 = require( `${screenNineAudio}`);
  const frame = useCurrentFrame();
  const left  = interpolate(frame, [0, 35], [-1920, 0], {
    extrapolateRight: "clamp"
  });
  const opacity = interpolate(frame, [0, 30], [0, 1]);
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
				<VideoScreen videoUrl={screen9} />
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity}>
				<div style={{
        backgroundImage: `url(${Logo})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
				position: 'absolute',
				bottom: '450px',
        left: '650px',
				width: '600px',
        height: '170px',
				opacity,
				}}/>
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity}>
				<Audio
					src={audio1}
					volume={1}
      />
			</Sequence>

		</div>
	);
};

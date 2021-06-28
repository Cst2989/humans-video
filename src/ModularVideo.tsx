import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {ModularScreen} from './Modular/ModularScreen';
import {BackgroundMusic} from './Modular/BackgroundMusic';
import {screenOptionsDTO} from './types'
export const ModularVideo: React.FC<{
	screen1: screenOptionsDTO;
  screen2: screenOptionsDTO;
  screen3: screenOptionsDTO;
  screen4: screenOptionsDTO;
  screen5: screenOptionsDTO;
  screen6: screenOptionsDTO;
  screen7: screenOptionsDTO;
  screen8: screenOptionsDTO;
  screen9: screenOptionsDTO;
  screen10: screenOptionsDTO;
  bgMusic: string;
}> = ({screen1 , screen2, screen3, screen4, screen5, screen6, screen7, screen8, screen9 ,screen10, bgMusic }) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div style={{flex: 1,  backgroundColor: `#000`}}>
			<div style={{opacity}}>
				<Sequence from={0} durationInFrames={Infinity}>
					<BackgroundMusic bgMusic={bgMusic}/>
				</Sequence>
				<Sequence from={0} durationInFrames={screen1.duration}>
					<ModularScreen screenOptions={screen1} />
				</Sequence>
				<Sequence from={screen1.duration - 20} durationInFrames={screen2.duration}>
					<ModularScreen screenOptions={screen2} />
				</Sequence>
				<Sequence from={screen1.duration + screen2.duration - 20} durationInFrames={screen3.duration}>
					<ModularScreen screenOptions={screen3} />
				</Sequence>
				<Sequence from={screen1.duration + screen2.duration + screen3.duration - 20} durationInFrames={screen4.duration}>
					<ModularScreen screenOptions={screen4} />
				</Sequence>
				<Sequence from={screen1.duration + screen2.duration + screen3.duration + screen4.duration - 20} durationInFrames={screen5.duration}>
					<ModularScreen screenOptions={screen5} />
				</Sequence>
				<Sequence from={screen1.duration + screen2.duration + screen3.duration + screen4.duration + screen5.duration - 20} durationInFrames={screen6.duration}>
					<ModularScreen screenOptions={screen6} />
				</Sequence>
				<Sequence from={screen1.duration + screen2.duration + screen3.duration + screen4.duration + screen5.duration + screen6.duration - 20} durationInFrames={screen7.duration}>
					<ModularScreen screenOptions={screen7} />
				</Sequence>
				<Sequence from={screen1.duration + screen2.duration + screen3.duration + screen4.duration + screen5.duration + screen6.duration + screen7.duration - 20} durationInFrames={screen8.duration}>
					<ModularScreen screenOptions={screen8} />
				</Sequence>
				<Sequence from={screen1.duration + screen2.duration + screen3.duration + screen4.duration + screen5.duration + screen6.duration + screen7.duration + screen8.duration - 20} durationInFrames={screen9.duration}>
					<ModularScreen screenOptions={screen9} />
				</Sequence>
				<Sequence from={screen1.duration + screen2.duration + screen3.duration + screen4.duration + screen5.duration + screen6.duration + screen7.duration + screen8.duration + screen9.duration - 20} durationInFrames={screen10.duration}>
					<ModularScreen screenOptions={screen10} />
				</Sequence>
			</div>
		</div>
	);
};

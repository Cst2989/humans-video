import {interpolate, useCurrentFrame} from 'remotion';

export const Text: React.FC<{text: string, textTransition: string}> = ({text, textTransition}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
  const transition  = interpolate(frame, [0, 20], [-20, 500], {
    extrapolateRight: "clamp"
  });
	return (
		<div
			style={{
				fontFamily: 'Helvetica, Arial',
        color: '#ffffff',
				fontSize: 160,
        fontWeight: 'bold',
        textTransform: 'uppercase',
				textAlign: 'center',
				position: 'absolute',
        bottom: textTransition === 'bottom' ? transition : 0,
        left: textTransition === 'left' ? transition : 0,
        right: textTransition === 'right' ? transition : 0,
        top: textTransition === 'top' ? transition : 0,
				width: '100%',
				opacity,
			}}
		>{text}
		</div>
	);
};

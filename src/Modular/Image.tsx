import {interpolate, useCurrentFrame} from 'remotion';
export const Image: React.FC<{imageUrl: string, imageTransition: string}> = ({imageUrl, imageTransition}) => {
	const frame = useCurrentFrame();
  const imageBackground = require( `${imageUrl}`);
	const opacity = interpolate(frame, [0, 30], [0, 1]);
  const transition  = interpolate(frame, [0, 20], [-20, 500], {
    extrapolateRight: "clamp"
  });
	return (
		<div
			style={{
				fontFamily: 'Helvetica, Arial',
        color: '#ffffff',
				fontSize: 60,
        fontWeight: 'bold',
        backgroundImage: `url(${imageBackground})`,
        textTransform: 'uppercase',
				textAlign: 'center',
				position: 'absolute',
        bottom: imageTransition === 'bottom' ? transition : 0,
        left: imageTransition === 'left' ? transition : 0,
        right: imageTransition === 'right' ? transition : 0,
        top: imageTransition === 'top' ? transition : 0,
        verticalAlign: 'bottom',
        paddingTop: '450px',
        paddingLeft: '50px',
				width: '60%',
        height: '100%',
				opacity,
			}}
    />
	);
};

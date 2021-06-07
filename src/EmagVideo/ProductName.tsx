import {interpolate, useCurrentFrame} from 'remotion';

export const ProductName: React.FC<{productName: string}> = ({productName}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
  const bottom  = interpolate(frame, [0, 20], [-20, 500], {
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
				bottom,
				width: '100%',
				opacity,
			}}
		>{productName}
		</div>
	);
};

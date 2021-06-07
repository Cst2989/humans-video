import {interpolate, useCurrentFrame} from 'remotion';

export const ProductDiscount: React.FC<{productDiscount: string}> = ({productDiscount}) => {
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
				fontSize: 250,
        fontWeight: 'bold',
        textTransform: 'uppercase',
				textAlign: 'center',
				position: 'absolute',
				bottom: '400px',
				width: '100%',
				opacity,
			}}
		>{productDiscount}
		</div>
	);
};

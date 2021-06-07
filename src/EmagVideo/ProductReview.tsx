import {interpolate, useCurrentFrame} from 'remotion';
export const ProductReview: React.FC<{review: string}> = ({review}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 50], [0, 1]);
	return (
		<div
			style={{
				fontFamily: 'Helvetica, Arial',
        color: '#ffffff',
				fontSize: 40,
        fontWeight: 'bold',
				textAlign: 'left',
				position: 'absolute',
				bottom: '10px',
        verticalAlign: 'bottom',
        paddingTop: '450px',
        paddingLeft: '50px',
        left: '500px',
				width: '40%',
        height: '100%',
				opacity,
			}}
		>{review}
		</div>
	);
};

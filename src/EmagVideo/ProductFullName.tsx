import {interpolate, useCurrentFrame} from 'remotion';
import Laptop from './assets/laptop.png';
export const ProductFullName: React.FC<{productFullName: string}> = ({productFullName}) => {
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
				fontSize: 60,
        fontWeight: 'bold',
        backgroundImage: `url(${Laptop})`,
        textTransform: 'uppercase',
				textAlign: 'center',
				position: 'absolute',
				bottom: '0px',
        verticalAlign: 'bottom',
        paddingTop: '450px',
        paddingLeft: '50px',
        left: '350px',
				width: '60%',
        height: '100%',
				opacity,
			}}
		>{productFullName}
		</div>
	);
};

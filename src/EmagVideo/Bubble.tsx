import {interpolate, useCurrentFrame} from 'remotion';
import {COLOR_1} from './config';
import './bubble.css';
export const Bubble: React.FC<{
	titleText: string;
}> = ({titleText}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div
			className="bubble"
			style={{
				fontFamily: 'Helvetica, Arial',
				fontSize: 40,
        color: 'white',
				textAlign: 'center',
				position: 'absolute',
				left: 140,
        top: '50%',
				opacity,
			}}
		>
			{titleText}

		</div>
	);
};

import { Composition } from 'remotion';
import { EmagVideo } from './EmagVideo';
import './style.css';
import {useState} from 'react';
export const RemotionVideo: React.FC = () => {
  const [productName, setProductName] = useState('Huawei');
  const [productFullName, setProductFullName] = useState('Matebook X Pro Limitless Experience');
  const [productPrice, setProductPrice] = useState('1298');
  const [productDiscount, setProductDiscount] = useState('15');
  const [productRating, setProductRating] = useState('4.7');
  const [productReview1, setProductReview1] = useState('Nice balance of performance and battery life');
  const [productReview2, setProductReview2] = useState('If you like the build of a Macbook but prefer a PC this is the laptop for you');
	return (
		<div className="video">
			<div className="inputs">
				<input type="text" value={productName} onChange={(ev) => setProductName(ev.target.value)} />
				<input type="text" value={productFullName} onChange={(ev) => setProductFullName(ev.target.value)} />
				<input type="text" value={productPrice} onChange={(ev) => setProductPrice(ev.target.value)} />
				<input type="text" value={productDiscount} onChange={(ev) => setProductDiscount(ev.target.value)} />
				<input type="text" value={productRating} onChange={(ev) => setProductRating(ev.target.value)} />
				<input type="text" value={productReview1} onChange={(ev) => setProductReview1(ev.target.value)} />
				<input type="text" value={productReview2} onChange={(ev) => setProductReview2(ev.target.value)} />
			</div>
			<Composition
				id="EmagVideo"
				component={EmagVideo}
				durationInFrames={1700}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					productName,
          productFullName,
          productPrice,
          productDiscount,
          productRating,
          productReview1,
          productReview2,
				}}
			/>
		</div>
	);
};

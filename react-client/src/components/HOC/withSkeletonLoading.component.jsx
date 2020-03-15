import React from 'react';

import { Skeleton, Card } from 'antd';

const { Meta } = Card;

const withSkeletonLoading = WrappedComponent => {
	const SkeletonLoading = ({ loading, ...otherProps }) => {
		return loading ? (
			<Card style={{ width: 250, marginRight: 55 }}>
				<Skeleton loading={true} active>
					<Meta title={'Card title'} description={'This is the description'} />
				</Skeleton>
			</Card>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};

	return SkeletonLoading;
};

export default withSkeletonLoading;

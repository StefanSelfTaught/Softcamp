import React from 'react';

import { Empty, Button } from 'antd';

const NoBootcamp = ({ handleCreateNow }) => (
  <>
    <Empty
      style={{ marginTop: 35 }}
      image={Empty.PRESENTED_IMAGE_DEFAULT}
      imageStyle={{
        height: 130,
      }}
      description={<span>No bootcamp found</span>}
    >
      <Button onClick={handleCreateNow} type='primary'>
        Create Now
      </Button>
    </Empty>
    <br />
  </>
);

export default NoBootcamp;

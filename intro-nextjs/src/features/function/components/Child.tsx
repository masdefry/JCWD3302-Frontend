interface IChildProps {
  description: string;
}
import React from 'react';

function Child(props: any) {
  return (
    <>
      <p>{props?.description?.title}</p>
    </>
  );
}

export default React.memo(Child);
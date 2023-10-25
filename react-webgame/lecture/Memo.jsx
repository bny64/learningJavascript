import React, { memo } from "react";

//memo : 부모 컴포넌트가 rendering 될 때 rerendering 되는 걸 막아준다.
const Try = memo(({ tryInfo }) => {
  retur(<li></li>);
});

Try.displayName = 'Try';

export default Try;
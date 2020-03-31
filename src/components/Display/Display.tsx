import React from 'react';

function Display(props: { value: string}) {
	return (
		<div>
			{props.value}
		</div>
	);
}

export default Display;

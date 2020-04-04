import React from 'react';

function Display(props: { value: string, isValid: boolean}) {
	return (
		<div>
			{props.isValid ?
				<div className='error'>
					Expression is not valid
				</div>
				: null
			}
			{props.value}
		</div>
	);
}

export default Display;

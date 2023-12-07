import React from 'react';

const Button = (props) => {
	return (
		<button
			onClick={props.onClick}
			className="bg-primary text-white font-[Poppins] py-1 px-3 rounded md:ml-8 hover:bg-secondary 
    duration-500 text-sm"
		>
			{props.children}
		</button>
	);
};

export default Button;

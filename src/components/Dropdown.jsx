import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const QRCADropdown = ({
	options,
	required = true,
	onChange,
	placeholder,
	defaultOption,
}) => {
	return (
		<div className="mb-4">
			<Dropdown
				controlClassName="flex items-center rounded h-10 border "
				className="rounded"
				menuClassName="text-sm"
				placeholderClassName="text-md text-gray-500"
				arrowClassName="flex items-center"
				options={options}
				onChange={onChange}
				value={defaultOption && null}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default QRCADropdown;

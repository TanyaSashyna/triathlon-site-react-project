import React from "react";
import "./customInput.scss";

export const customInput = ({
	input: { ...inputProps },
	meta: { error, touched, ...rest },
	id,
	label,
	placeholder,
	className = "input-box",
	type = "text",
	required
}) => (
		<label htmlFor={id} className={className} >
			<span>
				{label} {required && <span className="input-box__required">*</span>}
			</span>
			<input
				{...inputProps}
				autoComplete="off"
				className={error && touched ? "input-box__input input-box__input--fail" : "input-box__input"}
				id={id}
				placeholder={placeholder}
				type={type}
			/>
			{error && touched && <span className="input-box__error">{error}</span>}
		</label>
	);
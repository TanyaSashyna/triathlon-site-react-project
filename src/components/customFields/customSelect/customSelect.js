import React from "react";
import "./customSelect.scss";

export const customSelect = ({ label, input, children, id, className = "form-block__select", meta }) => {
	return (
		<div className={className} id={'select_' + id}>
			<label className="select-box" htmlFor={id}>{label}</label>
			<select {...input} className="select-box__input">{children}</select>
			{meta.error && meta.touched && (
				<span className="error">{meta.error}</span>
			)}
		</div>
	)
}
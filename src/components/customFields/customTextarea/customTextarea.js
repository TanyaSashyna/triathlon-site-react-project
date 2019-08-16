import React from "react";
import "./customTextarea.scss";

export const customTextarea = ({ label, rows, input, placeholder, id, name, meta }) => {
	return (
		<div className="form-block__text-area" id={'textarea_' + id}>
			<label className="textarea-box">{label}</label>
			<textarea className="textarea-box__input" {...input} rows={rows} name={name} placeholder={placeholder} />
			{meta.error && meta.touched && (
				<span className="error">{meta.error}</span>
			)}
		</div>
	)
}
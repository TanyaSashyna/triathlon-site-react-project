export const eventFormValidation = values => {
	const errors = {};

	if (!values.title) {
		errors.title = "Required field";
	}

	if (!values.eventType) {
		errors.eventType = "Required field";
	}

	if (!values.country) {
		errors.country = "Required field";
    }
    
    if (!values.city) {
		errors.city = "Required field";
    }
    
    if (!values.eventDate) {
		errors.eventDate = "Required field";
	}

	return errors;
};
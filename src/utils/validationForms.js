export const validationForms = values => {
	const errors = {};

	if (!values.email) {
		errors.email = "Invalid e-mail";
	}

	if (!values.password) {
		errors.password = "Required field";
    }
    
    if (!values.confirmPassword) {
		errors.confirmPassword = "Required field";
    }
    
    if (!values.name) {
		errors.name = "Required field";
    }
    
    if (!values.phone) {
		errors.phone = "Invalid phone number";
    }
    
    if (!values.distance) {
		errors.distance = "Required field";
    }
    
    if (!values.userCountry) {
		errors.userCountry = "Required field";
	}

	if (!values.event) {
		errors.event = "Required field";
	}

	if (!values.text) {
		errors.text = "Required field";
	}

	return errors;
};
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import './eventForm.scss';
import { customInput } from '../customFields/customInput/customInput';
import { customTextarea } from '../customFields/customTextarea/customTextarea';
import { customSelect } from '../customFields/customSelect/customSelect';
import { eventFormValidation } from '../../utils/eventFormValidation';

const EventReduxForm = ({
	handleSubmit,
	postNewEvent,
	showConfirmationMessage,
	reset,
	eventTypes,
	initialValues,
	editFormFlag,
	changeEvent,
	history
}) => {
	const submit = (value) => {
		if (!editFormFlag) {
			postNewEvent(value);
		} else {
			changeEvent(value);
			setTimeout(() => history.push('/admin/my_events'), 3500);
		}
		reset();
		showConfirmationMessage();
	};

	return (
		<form className="event-form__event-form__main" onSubmit={handleSubmit(submit)}>
			<img className="event-form__picture" alt="Event Bunner" src={initialValues.mainBannerPicture} />
			<Field
				name="mainBannerPicture"
				className="input-box -wide"
				label="Main Banner Picture"
				component={customInput}
			/>
			<Field name="title" label="Event Title" className="input-box -wide" required component={customInput} />
			<Field name="eventType" label="Event Type" required component={customSelect}>
				{eventTypes.map((elem) => (
					<option key={elem.id} value={elem.optionName}>
						{elem.optionName}
					</option>
				))}
			</Field>
			<Field name="eventDate" type="date" label="Event Date" required component={customInput} />
			<Field name="country" label="Country" required component={customInput} />
			<Field name="city" label="City" required component={customInput} />
			<Field
				name="overview"
				label="Overview"
				rows="10"
				placeholder="Enter event overview"
				component={customTextarea}
			/>
			<Field
				name="contentPicture"
				label="Content Picture"
				className="input-box -wide"
				placeholder="Enter picture url"
				component={customInput}
			/>
			<Field
				name="contentVideo"
				label="Content Video"
				className="input-box -wide"
				placeholder="Enter video url"
				component={customInput}
			/>
			<Field name="marathoneDistancePrice" label="Marathone Distance Price" component={customInput} />
			<Field name="halfmarathoneDistancePrice" label="Halfmarathone Distance Price" component={customInput} />
			<Field name="ageLimit" label="Age Limit" component={customTextarea} />
			<Field name="awardMedals" label="Award Medals" component={customTextarea} />
			<Field name="maximumTime" label="Maximum Time" component={customTextarea} />
			<Field name="aidStations" label="Aid Stations" component={customTextarea} />
			<Field name="equipmentStorage" label="Equipment Storage" component={customTextarea} />
			<Field name="parking" label="Parking" component={customTextarea} />
			<Field name="refreshments" label="Refreshments" component={customTextarea} />
			<Field
				name="map"
				label="Map"
				className="input-box -wide"
				placeholder="Enter picture url"
				component={customInput}
			/>

			<div className="event-form__control-box">
				<button className="event-form__submit-btn">{editFormFlag ? 'Save Changes' : 'Add Event'}</button>
			</div>
		</form>
	);
};

export default withRouter(
	reduxForm({ form: 'eventForm', validate: eventFormValidation, enableReinitialize: true })(EventReduxForm)
);

import { useState } from "react";

export default function useInput(defaultValue, validationFn) {
	const [enteredValues, setEnteredValues] = useState(defaultValue);

	const [didEdit, setDidEdit] = useState(false);

	const valueIsvalid = validationFn(enteredValues);

	function handleInputChange(event) {
		setEnteredValues(event.target.value);
		setDidEdit(false);
	}

	function handleInputBlur() {
		setDidEdit(true);
	}

	return {
		value: enteredValues,
		handleInputBlur,
		handleInputChange,
		hasError: didEdit && !valueIsvalid,
	};
}

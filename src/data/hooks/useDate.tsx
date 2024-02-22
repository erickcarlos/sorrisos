import { useState } from "react";

export default function useDate() {
	const [date, setDate] = useState(new Date());

	function addDays(date: Date, days: number) {
		var result = new Date(date);
		result.setDate(result.getDate() + days);
		return result;
	}

	function formatDate(date: Date) {
		return date.toISOString().split("T")[0];
	}

	return {
		date,
		setDate,
		addDays,
		formatDate
	};
}
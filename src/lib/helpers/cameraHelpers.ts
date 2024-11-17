export const getCamList = async (modelSegment?: String) => {
	const response = await fetch(`/api/camstream${modelSegment}`);
	const data = await response.json();
	return data;
};

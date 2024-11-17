export const getCatList = async (modelSegment?: String) => {
	const response = await fetch(`/api/categorystream${modelSegment}`);
	const data = await response.json();
	return data;
};

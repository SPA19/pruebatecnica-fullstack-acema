export const tasksResult = async () => {
  const url = `http://localhost:3000/api/task`
	try {
		const response = await fetch(url);
    if(!response.ok){
      throw new Error(`response status: ${response.status}`)
    }
		return await response.json();
	} catch (error) {
		console.error({ message: error.message });
	}
};

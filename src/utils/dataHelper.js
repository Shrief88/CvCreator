export const updateDate = (setData, event) => {
  const name = event.target.name;
  const value = event.target.value;
  const id = Number(event.target.closest("form").id);
  setData((prevData) =>
    Array.isArray(prevData)
      ? prevData.map((item) =>
          item.id === id ? { ...item, [name]: value } : item
        )
      : { ...prevData, [name]: value }
  );
};

export const removeData = (setData, event) => {
  const id = Number(event.target.closest("form").id);
  setData((prevArray) => prevArray.filter((item) => item.id != id));
};

export const addData = (setData, initialData,emptyData) => {
  const id = initialData.length === 0 ? 1 : initialData[initialData.length - 1].id + 1;
  console.log(id);
  const newObject = {
    ...emptyData[0],
    id: initialData.length === 0 ? 1 : initialData[initialData.length - 1].id + 1,
  };

  setData((prevState) => [...prevState, newObject]);
};
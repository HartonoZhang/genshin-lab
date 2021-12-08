export const checkData = (listData, searchData, type) => {
  const dataFilter = listData.map((list) =>
    type === 'characters'
      ? list.characters.filter((data) =>
          data.name.toLowerCase().includes(searchData.toLowerCase())
        )
      : list.weapons.filter((data) =>
          data.name.toLowerCase().includes(searchData.toLowerCase())
        )
  );
  const conditionDataFilter = dataFilter.reduce(
    (accumalatedLength, current) => accumalatedLength + current.length,
    0
  );
  return conditionDataFilter;
};

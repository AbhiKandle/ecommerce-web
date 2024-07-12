const useLocalStorage = (key, keyvalue, method) => {
  let data;

  if (method === "set") {
    localStorage.setItem(key, JSON.stringify(keyvalue));
  } else if (method === "get") {
    data = JSON.parse(localStorage.getItem(key));
  }

  return { data };
};

export default useLocalStorage;

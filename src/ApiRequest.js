const ApiRequest = async (url = "", optionObj = null) => {
  let errMsg = null;
  try {
    const response = await fetch(url, optionObj);
    if (!response.ok) throw new Error("Reload!");
    return await response.json();
  } catch (err) {
    errMsg = err.msg;
    return { error: errMsg };
  }
};

export default ApiRequest;

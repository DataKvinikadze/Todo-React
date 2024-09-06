const apiRequest = async (url = "", optionObj = null) => {
  let errMsg = null;
  try {
    const responsive = await fetch(url, optionObj);
    if (!responsive.ok) throw new Error("please Reload this App");
    return await responsive.json();
  } catch (err) {
    errMsg = err.messege;
    return { error: errMsg };
  }
};

export default apiRequest;

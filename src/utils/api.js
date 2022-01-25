async function post(sign, day) {
  try {
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;
    const result = await fetch(URL, { method: "POST" });
    const data = await result.json();
    return data;
  } catch (e) {
    return null;
  }
}

export { post };

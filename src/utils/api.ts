export const getAllGames = async () => {
  try {
    const res = await fetch("https://pub.gamezop.com/v3/games?id=peSLSV");

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

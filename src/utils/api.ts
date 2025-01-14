export const getAllGames = async () => {
  try {
    // Didn't add this to env file so it is easy to run for whoever is running this project locally in their system
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

// async function fetchJSONData() {
//   try {
//     const response = await fetch("data.json");
//     const jsonData = await response.json();
//     console.log(jsonData);
//     updateScore("Reaction", jsonData);
//     updateScore("Memory", jsonData);
//     updateScore("Verbal", jsonData);
//     updateScore("Visual", jsonData);
//   } catch (error) {
//     console.error("Error fetching JSON data:", error);
//   }
// }
// function updateScore(category, jsonData) {
//   const score = document.querySelector(`.${category.toLowerCase()}-result`);
//   const categoryData = jsonData.find((item) => item.category === category);
//   const result = document.querySelector(".score");

//   if (score && categoryData) {
//     score.textContent = categoryData.score;
//   }
// }
// fetchJSONData();
async function fetchJsonData() {
  try {
    const response = await fetch("data.json");
    const jsonData = await response.json();
    console.log(jsonData);
    let totalScore = 0;
    const jsonCategories = jsonData.map((item) => item.category);
    console.log(jsonCategories);
    jsonCategories.forEach((element) => {
      const category = jsonData.find((item) => item.category === element);
      if (category) {
        totalScore += category.score;
        updateScore(element, category.score, totalScore);
      }
    });
  } catch (error) {
    console.log("Error Fetching data from json file ", error);
  }
}
function updateScore(category, score, totalScore) {
  const categoryResult = document.querySelector(
    `.${category.toLowerCase()}-result`
  );
  console.log(categoryResult);
  const result = document.querySelector(".score");
  console.log(result);
  if (categoryResult) {
    categoryResult.textContent = score;
    let average = totalScore / 4;
    const averageResult =
      average % 1 > 0.5 ? Math.ceil(average) : Math.floor(average);
    result.textContent = averageResult;
  }
}
fetchJsonData();

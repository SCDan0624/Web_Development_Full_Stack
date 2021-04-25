const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

// prints each name in array of arrays

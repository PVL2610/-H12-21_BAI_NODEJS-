function findMostFrequentDecade(inputStr) {
    
    const years = inputStr.match(/\b\d{4}\b/g) || [];
    
    
    const yearNumbers = years.map(Number);
    
    
    const decadeCount = {};

    yearNumbers.forEach(year => {
        const century = Math.floor(year / 100) + 1;
        const decade = Math.floor((year % 100) / 10) * 10;
        const key = `Thập niên ${decade} thế kỷ ${century}`;
        
        
        decadeCount[key] = (decadeCount[key] || 0) + 1;
    });

    
    let mostFrequentDecade = "";
    let maxCount = 0;

    for (const [decade, count] of Object.entries(decadeCount)) {
        if (count > maxCount) {
            mostFrequentDecade = decade;
            maxCount = count;
        }
    }

    return mostFrequentDecade;
}

const inputString = "Các năm nổi bật gồm có 1999, 2001, 2020, 1980, 1880, 2021, 2019, 1985, 1990";
console.log(findMostFrequentDecade(inputString)); 

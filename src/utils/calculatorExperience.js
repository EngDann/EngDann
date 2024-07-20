const startDate = new Date('2023-01-10'); 
const currentDate = new Date();

const diffTime = Math.abs(currentDate - startDate);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const diffYears = Math.floor(diffDays / 365);
const diffMonths = Math.floor((diffDays % 365) / 30);
const remainingDays = diffDays - (diffYears * 365) - (diffMonths * 30);

console.log(`${diffYears} Years, ${diffMonths} Months and ${remainingDays} Days since I started programming`);

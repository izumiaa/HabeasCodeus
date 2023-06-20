// hard-coded prompts. TODO: change to dynamic
const prompts: string[] = [
    "This case involves a custody battle over the children.",
    "The suspect was arrested for burglary and assault.",
    "The company is facing charges of fraud and embezzlement.",
  ];

// TODO: add in more types of law and word associations
const lawDictionary: { [key: string]: string[] } = {
family: ["custody", "children"],
criminal: ["arrested", "burglary", "assault"],
corporate: ["charges", "fraud", "embezzlement"],
};

// Function to count the occurrences of words in a given text
const countWordOccurrences = (text: string, words: string[]): number => {
const lowerText = text.toLowerCase();
return words.reduce(
    (count, word) => count + (lowerText.includes(word) ? 1 : 0),
    0
);
};

// Function to find the type of law with the most word matches
const findLawType = (text: string): string | null => {
let maxMatches = 0;
let maxLawType: string | null = null;

for (const [lawType, words] of Object.entries(lawDictionary)) {
    const matches = countWordOccurrences(text, words);
    if (matches > maxMatches) {
    maxMatches = matches;
    maxLawType = lawType;
    }
}

return maxLawType;
};

// Test the function with each prompt
for (const prompt of prompts) {
const lawType = findLawType(prompt);
console.log(`Prompt: "${prompt}"`);
console.log(`Law Type: ${lawType}`);
console.log("---");
}

// hard-coded prompts. TODO: change to dynamic
// const prompts: string[] = [
//     "This case involves a custody battle over the children.",
//     "The suspect was arrested for burglary and assault.",
//     "The company is facing charges of fraud and embezzlement.",
//   ];

//   retrieveLawyers(prompts);

// take in array of message history: 

export function retrieveLawyers (prompts: string[]) {
    // Initialize lawDictionary - an object that stores categories of law (such as Family, Criminal, Corporate, etc.) as keys, with corresponding arrays of related legal terms as their values.
    const lawDictionary: { [key: string]: string[] } = {
        "Family": ["divorce", "alimony", "adoption", "paternity", "child support", "domestic violence", "marriage", "guardianship", "spousal abuse", "custody", "children"], 

        "Criminal": ["homicide", "robbery", "drug trafficking", "fraud", "kidnapping", "arson", "identity theft", "money laundering", "manslaughter", "terrorism", "arrested", "burglary", "assault"],

        "Corporate": ["merger", "acquisition", "intellectual property", "contracts", "employment law", "corporate governance", "shareholders", "securities", "antitrust", "insider trading", "charges", "fraud", "embezzlement"], 

        "Constitutional": ["rights", "amendments", "due process", "freedom of speech", "separation of powers", "equal protection", "judicial review", "privacy", "constitutional law"], 

        "Contract": ["offer", "acceptance", "consideration", "breach", "performance", "damages", "remedies", "void", "voidable", "contract law"], 

        "Property": ["real estate", "landlord", "tenant", "deed", "title", "easement", "trespass", "mortgage", "property law"],
        
        "Administrative": ["regulations", "licenses", "permits", "administrative agencies", "rulemaking", "hearing", "appeal", "administrative law"], 
        
        "Employment": ["discrimination", "wrongful termination", "harassment", "wages", "employee benefits", "retaliation", "employment contracts", "labor law"], 
        
        "Intellectual Property": ["copyright", "trademark", "patent", "trade secret", "infringement", "licensing", "intellectual property law"], 

    };

    let maxCategory = "";
    let maxCount = 0;
  
    for (const category in lawDictionary) {
      const categoryWords = lawDictionary[category];
      let count = 0;
  
      for (const prompt of prompts) {
        const words = prompt.split(" ");
  
        for (const word of words) {
          if (categoryWords.includes(word)) {
            count++;
          }
        }
      }
  
      if (count > maxCount) {
        maxCount = count;
        maxCategory = category;
      }
    }

    // return the lawyer names that are family law 
    
  
    return maxCategory;
  }


    
    
    // // Function to count the occurrences of words in a given text - takes in a string and an array of words as a parameter 
    // // the occurence of words in a single string of texts? 
    // const countWordOccurrences = (text: string, words: string[]): number => {
    //     const lowerText = text.toLowerCase();
    //     return words.reduce(
    //         (count, word) => count + (lowerText.includes(word) ? 1 : 0),
    //         0
    //     );
    // };

    // // initialize counter to count the occurence of each word 
    // let maxMatches = 0;
    // let maxLawType: string | null = null;
    
    // // Function to find the type of law with the most word matches
    // const findLawType = (text: string): string | null => {
    //     // return all matches? or return top matches? 
        
    //     for (const [lawType, words] of Object.entries(lawDictionary)) {
    //         const matches = countWordOccurrences(text, words);
    //         if (matches > maxMatches) {
    //         maxMatches = matches;
    //         maxLawType = lawType;
    //         }
    //     }
    //     return maxLawType;
    // };
    
    // // Test the function with each prompt - to view in console
    // for (const prompt of prompts) {
    //     const lawType = findLawType(prompt);
    //     console.log(`Prompt: "${prompt}"`);
    //     console.log(`Law Type: ${lawType}`);
    //     console.log("---");
    // }
    
// }


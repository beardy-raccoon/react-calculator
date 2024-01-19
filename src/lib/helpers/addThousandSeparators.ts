const addThousandSeparators = (numberString: string): string => {
  const reversedString = numberString.split("").reverse().join("");
  const separatedString = reversedString.replace(/(\d{3})/g, "$1 ").trim();
  return separatedString.split("").reverse().join("");
};

export default addThousandSeparators;

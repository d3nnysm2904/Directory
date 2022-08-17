//They only store uniques values
//we can store any type of values

//to make
// To create an empty Set:
new Set();

const bannedHashTags1 = new Set("hello", "goodbye"); //'h', 'e', 'l', 'o'
//You can also pass in an iterable (like an array):
const bannedHashTags = new Set(["nofilter", "justsaying", "winning", "yolo"]);

// To add to a Set:
bannedHashTags.add("bestlife").add("selfie");

function filterHashTags(tags) {
  const bannedHashTags = ["nofilter", "justsaying", "winning", "yolo"];
  return tags.filter((tag) => !bannedHashTags.has(tag));
}

const susansTags = ["happymonday", "yolo", "winning", "sunset"];
//filterHashTags(susansTags); //[ 'happymonday', 'sunset' ];

//Removing duplicates using a Set:
const ages = [45, 42, 21, 23, 24, 98, 2, 4, 4, 12, 3, 12, 45];
[...new Set(ages)]; //create a new Set and then spread it back into an Array

// Iterating Sets:
for (let tag of bannedHashTags) {
  console.log("STOP USING:", tag);
}
// bannedHashTags.forEach((tag) => console.log('STOP USING:', tag));

//to delete the same as map
//bannedHashTags.delete('yolo')

//to clear everything
//bannedHashTags.clear()

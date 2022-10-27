let talk = {
  name: "Hanuma",
  mode: "Online",
  title: "Introduction to Functional Programming with JavaScript.",
};

console.table(talk);

let anotherTalk = talk;

anotherTalk.mode = "Offline";

console.table({ talk, anotherTalk });

let talkA = {
  name: "Hanuma",
  mode: "Online",
  title: "Introduction to Functional Programming with JavaScript.",
};
const updateMode = (talk, newMode) => {
  return {
    ...talk,
    mode: newMode,
  };
};

const talkB = updateMode(talk, "In-Person");
console.table({ talkA, talkB });

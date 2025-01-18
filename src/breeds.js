const getBreeds = () => {
  const savedBreeds = localStorage.getItem("dogBreeds");
  if (savedBreeds) {
    return JSON.parse(savedBreeds);
  }
  return {
    collie: 0,
    german_shepherd: 0,
    beagle: 0,
    dachshund: 0,
    cocker_spaniel: 0,
    golden_retriever: 0,
    bulldog: 0,
    poodle: 0,
    pomeranian: 0,
    doberman: 0,
  };
};

export default function updateBreed(breedsToUpdate) {
  const currentBreeds = getBreeds();

  breedsToUpdate.forEach((element) => {
    currentBreeds[element]++;
  });

  localStorage.setItem("dogBreeds", JSON.stringify(currentBreeds));
  console.log("done");
  console.log(currentBreeds);
}

export function calculateBreed() {
  const breeds = getBreeds();
  let maxCount = 0;
  let topBreed = "";

  for (const [breed, count] of Object.entries(breeds)) {
    if (count > maxCount) {
      maxCount = count;
      topBreed = breed;
    }
  }

  // If no breeds have been counted yet, maxCount will still be 0
  if (maxCount === 0) {
    return "No breeds tracked yet";
  }

  return topBreed;
}

export function resetBreeds() {
  const defaultBreeds = {
    collie: 0,
    german_shepherd: 0,
    beagle: 0,
    dachshund: 0,
    cocker_spaniel: 0,
    golden_retriever: 0,
    bulldog: 0,
    poodle: 0,
    pomeranian: 0,
    doberman: 0,
  };
  localStorage.setItem("dogBreeds", JSON.stringify(defaultBreeds));
}

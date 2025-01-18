const breeds = {
    "collie": 0,
    "german shepherd": 0,
    "beagle": 0,
    "dachshund": 0,
    "cocker spaniel": 0,
    "golden retriever": 0,
    "bulldog": 0,
    "poodle": 0,
    "pomeranian": 0,
    "doberman": 0
}

export default function updateBreed(breedsToUpdate) {
    breedsToUpdate.forEach(element => {
        breeds[element]++;
    });

    console.log("done");
    console.log(breeds);
}
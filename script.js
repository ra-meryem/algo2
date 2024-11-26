function insertionSort(arr) {
    // Parcourir le tableau a partir du deuxieme element
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; 
        let j = i - 1;

        // Deplacer les elements de la sequence triee pour creer de la place
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; 
            j--;
        }

        // Inserer l'element a sa position correct
        arr[j + 1] = current;
    }
    return arr; 
}

// Exemple d'utilisation
const array = [5, 2, 9, 1, 5, 6];
console.log("Tableau original : ", array);

const sortedArray = insertionSort(array);
console.log("Tableau trie : ", sortedArray);

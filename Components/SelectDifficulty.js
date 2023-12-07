/**
 * Crée un composant de formulaire de sélection de difficulté.
 *
 * @returns {HTMLElement} - Élément de formulaire HTML avec une liste déroulante de difficultés.
 */
const SelectDifficulty = () => {
    /**
     * event handler
     *
     * @param {Event} e - Objet d'événement.
    */
    let selectedDifficulty = 'medium' //Moyenne par défaut
    const handleSelectChange = (e) => {
        selectedDifficulty = e.target.value;
        console.log('Selected Difficulty:', selectedDifficulty);
        // Vous pouvez effectuer d'autres actions en fonction de la difficulté choisie
    };

    const ChangerPage =(difficulter) => {
        console.log(difficulter)
        //location.href= "cartes.html"

    }

    const formElement = document.createElement('form');
    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', 'difficulty');
    labelElement.textContent = 'Difficulty:';

    const selectElement = document.createElement('select');
    selectElement.id = 'difficulty';
    selectElement.addEventListener('change', handleSelectChange);

    const optionMedium = document.createElement('option');
    optionMedium.value = 'medium';
    optionMedium.textContent = 'Moyen';

    const optionStrict = document.createElement('option');
    optionStrict.value = 'strict';
    optionStrict.textContent = 'Strict';

    const optionMedian = document.createElement('option');
    optionMedian.value = 'median';
    optionMedian.textContent = 'Médiane';

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Valider';
    buttonElement.addEventListener('onclick', ChangerPage(selectedDifficulty))



    // Ajoutez les options au selectElement
    selectElement.appendChild(optionMedium);
    selectElement.appendChild(optionStrict);
    selectElement.appendChild(optionMedian);

    // Ajoutez les éléments au formulaire
    formElement.appendChild(labelElement);
    formElement.appendChild(selectElement);
    formElement.appendChild(buttonElement)

    return formElement;
};

export default SelectDifficulty;

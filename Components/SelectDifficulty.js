/**
 * Crée un components formulaire pour sélectioner la difficulté.
 * @file SelectDifficulty.js
 * @returns {HTMLElement} - Élément de formulaire HTML avec une liste déroulante de difficultés.
 * @param {Function} updateDifficulty - Props pour mettre à jour la variable globale globalDifficulty défini dans app.js
 * @author Quentin
 */
const SelectDifficulty = (updateDifficulty) => {
    let selectedDifficulty = 'strict' //strict par défaut

    /**
     * event handler
     *
     * @param {Event} e - Objet d'événement.
     * @returns {void}
     * 
    */
    const handleSelectChange = (e) => {
        selectedDifficulty = e.target.value;
        //console.log('Selected Difficulty:', selectedDifficulty);
        updateDifficulty(selectedDifficulty);
        alert("Vous avez choisi la difficulté : " + selectedDifficulty);
    };        

    let formElement = document.createElement('form');
    let labelElement = document.createElement('label');
    labelElement.setAttribute('for', 'difficulty');
    labelElement.textContent = 'Choissisez la difficulté (strict par défaut):';

    let selectElement = document.createElement('select');
    selectElement.id = 'difficulty';
    selectElement.addEventListener('change', handleSelectChange);

    let optionMedium = document.createElement('option');
    optionMedium.value = 'moyenne';
    optionMedium.textContent = 'Moyenne';

    let optionStrict = document.createElement('option');
    optionStrict.value = 'strict';
    optionStrict.textContent = 'Strict';

    let optionMedian = document.createElement('option');
    optionMedian.value = 'mediane';
    optionMedian.textContent = 'Médiane';


    // Ajout des sélections de difficultés
    selectElement.appendChild(optionMedium);
    selectElement.appendChild(optionStrict);
    selectElement.appendChild(optionMedian);


    // Ajout du label, select et button dans le formulaire
    formElement.appendChild(labelElement);
    formElement.appendChild(selectElement);

    return formElement;
};

export default SelectDifficulty;
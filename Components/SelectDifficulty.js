/**
 * Crée un components formulaire pour sélectioner la difficulté.
 * @file SelectDifficulty.js
 * @returns {HTMLElement} - Élément de formulaire HTML avec une liste déroulante de difficultés.
 * @param {Function} updateDifficulty - Props pour mettre à jour la variable globale globalDifficulty défini dans app.js
 * @author Quentin
 */
const SelectDifficulty = (updateDifficulty) => {
    let selectedDifficulty = 'medium' //Moyenne par défaut

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
        updateDifficulty(selectedDifficulty)
    };

        
    /**
     * Boutton pour changer la page, passer le paramètre en props
     * @param {string} difficulty - Difficulté choisi
     * @returns {void}
     */
    const ChangerPage =(difficulter) => {
        console.log(difficulter)

    }

    const formElement = document.createElement('form');
    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', 'difficulty');
    labelElement.textContent = 'Difficulty:';

    const selectElement = document.createElement('select');
    selectElement.id = 'difficulty';
    selectElement.addEventListener('change', handleSelectChange);

    const optionMedium = document.createElement('option');
    optionMedium.value = 'moyenne';
    optionMedium.textContent = 'Moyen';

    const optionStrict = document.createElement('option');
    optionStrict.value = 'strict';
    optionStrict.textContent = 'Strict';

    const optionMedian = document.createElement('option');
    optionMedian.value = 'mediane';
    optionMedian.textContent = 'Médiane';

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Valider';
    buttonElement.addEventListener('onclick', ChangerPage(selectedDifficulty))



    // Ajout des sélections de difficultés
    selectElement.appendChild(optionMedium);
    selectElement.appendChild(optionStrict);
    selectElement.appendChild(optionMedian);

    // Ajout du label, select et button dans le formulaire
    formElement.appendChild(labelElement);
    formElement.appendChild(selectElement);
    formElement.appendChild(buttonElement)

    return formElement;
};

export default SelectDifficulty;
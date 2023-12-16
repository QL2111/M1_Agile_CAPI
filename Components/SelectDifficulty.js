/**
 * Crée un components formulaire pour sélectioner la difficulté.
 * @file SelectDifficulty.js
 * @returns {HTMLElement} - Élément de formulaire HTML avec une liste déroulante de difficultés.
 * @author Quentin
 */
const SelectDifficulty = () => {
    let selectedDifficulty = 'medium' //Moyenne par défaut

    /**
     * event handler
     *
     * @param {Event} e - Objet d'événement.
    */
    const handleSelectChange = (e) => {
        selectedDifficulty = e.target.value;
        console.log('Selected Difficulty:', selectedDifficulty);
        // TODO- faire les différentes méthodes de voe selon la difficulté (props en natif ?)
    };

        
    /**
     * Boutton pour changer la page, passer le paramètre en props
     * @param {string} difficulty - Difficulté choisi
     */
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
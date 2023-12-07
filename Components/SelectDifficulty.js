// SelectDifficulty.js
const SelectDifficulty = () => {
    const handleSelectChange = (e) => {
        const selectedDifficulty = e.target.value;
        console.log('Selected Difficulty:', selectedDifficulty);
        // Vous pouvez effectuer d'autres actions en fonction de la difficulté choisie
    };

    const formElement = document.createElement('form');
    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', 'difficulty');
    labelElement.textContent = 'Difficulty :';

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

    // Ajoutez les options au selectElement
    selectElement.appendChild(optionMedium);
    selectElement.appendChild(optionStrict);
    selectElement.appendChild(optionMedian);

    // Ajoutez les éléments au formulaire
    formElement.appendChild(labelElement);
    formElement.appendChild(selectElement);

    return formElement;
};

export default SelectDifficulty;

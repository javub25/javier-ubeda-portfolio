
import axios from 'axios';

const getlanguage = (lang) => 
{
    axios.get(`./src/languages/${lang}.json`)
        .then((resolve) => {
            const textsToChange = document.querySelectorAll("[data-section]");

            textsToChange.forEach((item => 
            {
                const section = item.dataset.section;
                const value = item.dataset.value;
                item.innerHTML = resolve.data[section][value];
            }))
        })
        .catch((reject) => {
            throw new Error(reject);
        });
}
export default getlanguage;
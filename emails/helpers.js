export const stripHTMLTags = (htmlString) => {
    // also replaces <br> tags with new lines
    return htmlString.replace(/<br>/g, '\n').replace(/<[^>]+>/g, '');
}

/**
 * Replaces any instance of {{ variableName }} with the values
 * @param data (object)  The data object whose keys are the variable names (string) along with corresponding values
 * @param htmlString (string)   The HTML string to be updated
 *  @return The updated HTML string
 */
export const replaceMergeTags = (data, htmlString) => {
    Object.keys(data)?.forEach(key => {
        if (htmlString.includes(`{{ ${key} }}`)) {
            let val = data[key];

            // check if value is an array
            if (val instanceof Array) {
                const listElements = val.map(item => {
                    return `<li>${item}</li>`;
                });

                // create an unordered list in HTML
                val =   `<ul>${listElements}</ul>`;
            }

            const regexPattern = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g');
            htmlString = htmlString.replace(regexPattern, val);
        }
    });

    return htmlString;
}
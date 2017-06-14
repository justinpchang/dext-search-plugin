// Internet Icon by Freepik (http://www.flaticon.com/free-icon/worldwide_448589)

const urlencode = require('urlencode');

module.exports = {
    action: 'openurl',
    query: (query) => {
        const items = [];
        const searchTerm = query.slice(6);
        const url = 'https:\/\/www.google.com/search?q=' + urlencode(searchTerm);
        items.push({
            title: `Search Google for ${searchTerm}`,
            subtitle: 'Open in browser',
            arg: url,
            icon: {
                path: './icon.png'
            }
        });
        return { items };
    }
};

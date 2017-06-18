// Internet Icon by Freepik (http://www.flaticon.com/free-icon/worldwide_448589)

const urlencode = require('urlencode');

module.exports = {
    keyword: 'search',
    action: 'openurl',
    helper: {
        title: 'Open Google search result.',
        subtitle: 'Example: search dext',
        icon: {
            path: './icon.png',
        },
    },
    query: q => {
        const items = [];
        const url = 'https://www.google.com/search?q=' + urlencode(q);
        items.push({
            title: `Search Google for ${q}`,
            subtitle: 'Open in browser',
            arg: url,
            icon: {
                path: './icon.png',
            },
        });
        return { items };
    },
};

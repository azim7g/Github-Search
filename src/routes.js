const host = 'https://api.github.com';

export default {
    users: () => [host, 'search/users'].join('/'),
    user: (name) => [host, 'users', name].join('/'),
    repos: (name) => [host, 'users', name, 'repos'].join('/'),
}

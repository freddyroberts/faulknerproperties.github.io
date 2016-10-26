module.exports = {
    project: {
        dev: {
            hostname: 'faulkner.dev'
        }
    },
    js: {
        entrypoint: 'app.js',
        src: 'resources/assets/js/',
        dest: 'httpdocs/assets/js/'
    },
    css: {
        entrypoint: 'app.css',
        src: 'resources/assets/css/',
        dest: 'httpdocs/assets/css/'
    },
    files: {
        src: [
            'resources/views/**/*.+(php|html|md)',
            'app/**/*.php'
        ]
    },
    copy: [
        {
            src: [
                'resources/assets/img/**/*.+(jpg|jpeg|gif|png|svg)'
            ],
            dest: 'httpdocs/assets/img/'
        },
        {
            src: 'node_modules/font-awesome/fonts/*',
            dest: 'httpdocs/assets/fonts/'
        }
    ],
    autoprefix: [
        'last 2 versions',
        'ie >= 8',
        'ios > 6',
        'safari >= 5',
        'android >= 4'
    ]
}

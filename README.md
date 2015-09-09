# jw-code-style

Simple package which houses JSHint and JSCS configuration files to keep code consistency between my personal projects (primarily AngularJS /  Jasmine / Grunt setup),

## Getting Started

```bash
npm install jw-code-style --save-dev
```

### Example usage

In gruntfile:

```jshint: {
    src: {
        src: [
            "src/**/!(*.spec).js"
        ],
        options: {
            jshintrc: "node_modules/jw-code-style/dist/jshint/.src.jshintrc"
        }
    },
    unit: {
        src: [
            "src/**/*.spec.js",
            "test/**/*.js"
        ],
        options: {
            jshintrc: "node_modules/jw-code-style/dist/jshint/.test.jshintrc"
        }
    },
    build: {
        src: ["Gruntfile.js"],
        options: {
            jshintrc: "node_modules/jw-code-style/dist/jshint/.build.jshintrc"
        }
    }
},
jscs: {
    src: [
        "{src,test,grunt}/**/*.js",
        "Gruntfile.js"
    ],
    options: {
        config: "node_modules/jw-code-style/dist/jscs/.jscs.json"
    }
}
```



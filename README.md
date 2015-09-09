# jw-code-style

Simple package which houses JSHint and JSCS configuration files to keep code consistency between my personal projects (primarily AngularJS /  Jasmine / Grunt setup),

## Getting Started

```bash
npm install jw-code-style --save-dev
```

### Example usage

In gruntfile:

```bash
jshint: {
    src: {
        src: [
            "src/**/!(*.spec).js"
        ],
        options: {
            jshintrc: "node_modules/jw-code-style/jshint/.src.jshintrc"
        }
    },
    unit: {
        src: [
            "src/**/*.spec.js",
            "test/**/*.js"
        ],
        options: {
            jshintrc: "node_modules/jw-code-style/jshint/.test.jshintrc"
        }
    },
    build: {
        src: ["Gruntfile.js"],
        options: {
            jshintrc: "node_modules/jw-code-style/jshint/.build.jshintrc"
        }
    }
},
jscs: {
    src: [
        "{src,test,grunt}/**/*.js",
        "Gruntfile.js"
    ],
    options: {
        config: "node_modules/jw-code-style/jscs/.jscs.json"
    }
}
```




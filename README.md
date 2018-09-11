# fall2018

## Development Setup
- Install a Sass compiler (https://sass-lang.com/install)
  - Watch for changes in `static/sass` and build into `static/css`
  - Eg. for CLI usage: 
    
    ```
    cd fall2018
    sass --watch static/sass:static/css
    ```
- Start a local webserver in the root directory
  - Eg. using Python2:
    
    ```
    cd fall2018
    python -m SimpleHTTPServer
    ```
  - Eg. using Python3:
    
    ```
    cd fall2018
    python -m http.server
    ```
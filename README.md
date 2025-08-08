# fortinet-block-pages-generator

A simple CLI tool to generate Fortinet block pages from an HTML template.

## What this does
1. Inlines resources, such as CSS and JavaScript files.
2. Allows templates to be used to show/hide elements based on the page type

<details>
<summary><h3>An example</h3></summary>
For example, you could input this

```html
<h1>
    {% if type == "dlp" %}
    Transfer attempt blocked
    {% elseif type == "virus" %}
    Virus blocked
    {% elseif type == "application" %}
    Application blocked
    {% else %}
    Access blocked
    {% endif %}
</h1>
```

you would get these files as output:

`fortiguard-block-page.html`
```html
<h1>
    Access blocked
</h1>
```

`url-block-page.html`
```html
<h1>
    Access blocked
</h1>
```

`application-control-block-page.html`
```html
<h1>
    Application blocked
</h1>
```

`dlp-block-page.html`
```html
<h1>
    Transfer attempt blocked
</h1>
```

`virus-block-page.html`
```html
<h1>
    Virus blocked
</h1>
```
</details>

## Usage
### Development
1. Create a new project with
```
fortinet-block-pages-generator init my-project
cd my-project
```
2. Launch the development server with
```
fortinet-block-pages-generator dev
```
3. Edit index.html and see the changes live

### Build

To build the project:
```
fortinet-block-pages-generator build
```

## AI code

A lot of this code was written by AI. This is because I use AI for refactoring and adding better error handling (basically things I don't want to do myself).

I (@Inglan) have prefixed any commits that use AI with `[With AI]` or similar.

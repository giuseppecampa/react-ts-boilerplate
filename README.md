<br/>

# React-TS Boilerplate

This is boilerplate to kickstart projects using React with Typescript.
<br/>

## Features
- ⚛️ &nbsp; React
- ⛩ &nbsp; TypeScript
- 👀 &nbsp; ESLint
- 🌈 &nbsp; Prettier
- 💄 &nbsp; SCSS
- 🅱️ &nbsp; Bootstrap
- 🔷 &nbsp; Material UI
- 🚀 &nbsp; Redux (redux-store & redux-saga)
- 🔥 &nbsp; Firebase
- ☁️ &nbsp; Axios <span style="color:#007AFF">[Coming soon]</span>
<br/>
<br/>

## Naming convention
- 🗂️ **Folders** &nbsp;➡&nbsp; kebab-case:
    - <span style="color:#8E8E93">dashboard</span>
    - <span style="color:#8E8E93">date-picker</span>
    - <span style="color:#8E8E93">select-menu</span>
    - <span style="color:#8E8E93">...</span>
<br/>
<br/>

- 📌 **Files** &nbsp;➡&nbsp; kebab-case:
    - <span style="color:#8E8E93">dashboard.tsx</span>
    - <span style="color:#8E8E93">date-picker.tsx</span>
    - <span style="color:#8E8E93">select-menu.tsx</span>
    - <span style="color:#8E8E93">...</span>
<br/>
<br/>

- 🐍 **Variables & functions** &nbsp;➡&nbsp; snack_case:
    - <span style="color:#8E8E93">bucket_detail</span>
    - <span style="color:#8E8E93">resolve_fruits</span>
    - <span style="color:#8E8E93">init_form</span>
<br/>
<br/>

- 🐪 **Modules** &nbsp;➡&nbsp; PascalCase:
    - <span style="color:#8E8E93">Dashboard</span>
    - <span style="color:#8E8E93">DatePicker</span>
    - <span style="color:#8E8E93">SelectMenu</span>
    - <span style="color:#8E8E93">...</span>
<br/>
<br/>

- 💄 **SCSS** &nbsp;➡&nbsp; kebab-case:
    - <span style="color:#8E8E93">dashboard-core</span>
    - <span style="color:#8E8E93">form-item</span>
    - <span style="color:#8E8E93">...</span>
<br/>
<br/>

## Widgets
- Accordion
- Button
- Carousel <span style="color:#007AFF">[Coming soon]</span>
- CheckBox <span style="color:#007AFF">[Coming soon]</span>
- DatePicker <span style="color:#007AFF">[Coming soon]</span>
- Drawer
- Header
- InputText <span style="color:#007AFF">[Coming soon]</span>
- Modal
- Header
- Modal
- RadioGroup <span style="color:#007AFF">[Coming soon]</span>
- SelectMenu <span style="color:#007AFF">[Coming soon]</span>
- Tabbar
<br/>
<br/>

## Useful notes for starting from scratch

#### <span style="color:#0A84FF">Create project</span>
1. > \> npx create-react-app my-app --template typescript
2. > \> npm install

<br/>

#### <span style="color:#0A84FF">ESlint + Prettier</span>
1. > \> npm install eslint -g
2. > \> npm install prettier -g
3. > \> npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --only=dev
4. > \> npm install prettier eslint-config-prettier eslint-plugin-prettier --only=dev
5. > Copy and paste the <span style="color:#008081">.eslintrc.js</span> file in your project in the root folder
6. > Check that your VSC <span style="color:#008081">settings.json</span> file has the same entries indicated in the <span style="color:#008081">.settings.example.json</span> file
7. > Restart VSC

<br/>

#### <span style="color:#0A84FF">Naming convention & SCSS</span>
1. > Rename files and folders according to naming convention (ex: App --> app)
2. > Change css to scss extension, also updating related imports

<br/>

#### <span style="color:#0A84FF">Bootstrap</span>
1. > \> npm install bootstrap
2. > \> npm install react-bootstrap
3. > import 'bootstrap/dist/css/bootstrap.css' in the <span style="color:#008081">index.tsx</span> file

<br/>

#### <span style="color:#0A84FF">Absolute path from "src"</span>
1. > Add ```"baseUrl": "."``` in the compilerOptions (<span style="color:#008081">tsconfig.json</span> file)

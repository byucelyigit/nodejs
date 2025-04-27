# Simple Node.js Project

## Steps to Create the Project

1. Initialize the project:
   ```bash
   npm init -y
   ```

2. Create an `index.js` file as the entry point of the application.

3. Install any required dependencies (if needed):
   ```bash
   npm install <package-name>
   ```

4. Run the application:
   ```bash
   node index.js
   ```

5. (Optional) Add a `.gitignore` file to exclude `node_modules`:
   ```
   node_modules/
   ```

6. (Optional) Use `nodemon` for development:
   ```bash
   npm install --save-dev nodemon
   npx nodemon index.js
   ```

## Example `index.js` File

```javascript
console.log("Hello, Node.js!");
```

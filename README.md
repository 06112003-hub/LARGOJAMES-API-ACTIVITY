1. Markdown
2. # RESTful API Activity - [ JAMES LARGO]
3. ## Best Practices Implementation
4. **1. Environment variables:**
- Why did we put 'BASE_URI' in '.env' instad of hardcoding it?
- Answer: We have placed BASE_URI in the.env file so that it can be safe and it is not seen in the code. It is also easy to alter the link without the need to edit the program.

**2. Resource Modeling**
- Why did we use plural nouns (e.g., '/dishes') for our routes?
- Answer: We use plural nouns to indicate the route takes a form of collection or a list. It also make the system easier to understand and maintain.

**3. Status Codes:**
- When do we use '201 Created' vs '200 Ok'?
-  Answer:We use '201 Created' when a new resource is successfully created, such as after adding new data. We use '200 OK' when a request is successful but does not create anything new, like when fetching or updating data.
- Why is it important to return '404' instead of just an empty array or a generic error?
- Answer:Returning '404' clearly tells the user that the requested data was not found. It helps avoid confusion and lets the system know exactly what went wrong.

**4. Testing**

- (Paste a ss)

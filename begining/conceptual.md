### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  its a way check that the json being served is the expected json

- What is the signature portion of the JWT?  What does it do?
  it checks that its sent from the right address, and makes sure it wasn't changed along the way.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  yes the payload isn't protected, only the signature is the protected. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  the best way is to cross check the response against a schema.

- Compare and contrast unit, integration and end-to-end tests.
  unit test check if a given function does its expected task, integration checks if it integrates into the application properly, and end-to-end checks the entire application and if it acts as expected.

- What is a mock? What are some things you would mock? 
  a mock is a simulated thing that behaves in a controlled way.

- What is continuous integration? 
  it when you frequently merge into a repo and automated tests are ran against it. 

- What is an environment variable and what are they used for?
  an env variable is used to set specific variables for the enviorment that the code is ran in.

- What is TDD? What are some benefits and drawbacks?
  test driven development is a practice that you write your code in a way for it to be easily testable. it makes for really understandable code but can have some limitations in how nuanced your code can be.

- What is the value of using JSONSchema for validation?
  can have a broad range of responses, that is checked against a format. much more dynamic than checking against a match

- What are some ways to decide which code to test?
  when it comes to unit tests test code in a way that test the specific code and not the things it interacts with.

- What does `RETURNING` do in SQL? When would you use it? returns the requested items specifed in the request.

- What are some differences between Web Sockets and HTTP?
  An HTTP starts sending data as responses when a request is received, whereas Websockets send and receives data based on data availability

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  i think flask was easier to use but express seems much more flexible and will likely be the one i would try to learn to a greater degree.

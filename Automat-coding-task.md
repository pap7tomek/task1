# The coding task

The coding task consists of mobile-first two screens which are briefly presented in the wireframe image. There is no provided wireframe for the desktop screen as we would like to leave it to you.

## Expected items

Here are some items we expect and would like to measure for review.

- A sticky header
- A button to call to action, which opens a modal called "Direct request"
- A fixed full-screen modal where there are the following items;
  - a title, Direct Request
  - a button at the upper right corner to close the modal
  - an input to type a product name which may display a list of suggested products depending on the fetched data
  - a (scrollable) list of suggested products, based on the typed value in the input above.
- Using React without any state management library
- Using Next.js
- Implementing an endpoint at `/api/products` to serve the product catalog based on the given query string parameter called `query`. So the UI is expected to make HTTP calls to this endpoint in order to fetch the relevant data. This endpoint should reside on the Next.JS. Regarding the suggestion logic, it does not have to be anything fancy. Products which includes the given query should be simply served.
- Commit history which we follow a pattern of "<type>: <subject>" where `type` can be one of the followings; `feat`, `fix`, `docs`, `chore`, `style`, `refactor`, `test`.
- Code readability
- Code convention
- Technical instructions

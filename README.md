# HNG Stage 0 Backend Task

A simple REST API that returns basic information including email, current datetime, and GitHub URL.

## API Documentation
API Documentation
### Endpoint
GET /
### Request Method: GET
### URL: http://localhost:3000/ (https://hng12stage-0-basic-endpoint-production.up.railway.app/))
Response Format:
The response is returned as JSON:

```json

{
  "email": "ibrahimabdulquddus51@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}


### Response Format

```json
{
    "email": "ibrahimabdulquddus51@gmail.com",
    "current_datetime": "2025-01-29T14:29:39.188Z",
    "github_url": "https://github.com/Xclusive09/Hng12_Stage-0-Basic-Endpoint-.git"
}



## How to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/your-repo.git

2. Install dependencies:
```sh
npm install

3. Start the server:
``` sh

node index.js

The server will be available at http://localhost:3000.
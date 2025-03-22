# API and HTTP Request Cheatsheet

## HTTP Basics

### HTTP Methods
- **GET**: Retrieve data (read-only)
- **POST**: Create new resources or submit data
- **PUT**: Update existing resources (full update)
- **PATCH**: Update existing resources (partial update)
- **DELETE**: Remove resources
- **HEAD**: Like GET but only returns headers (no body)
- **OPTIONS**: Returns supported HTTP methods for a URL

### Status Codes
- **1xx** - Informational
  - 100: Continue
  - 101: Switching Protocols
- **2xx** - Success
  - 200: OK
  - 201: Created
  - 204: No Content
- **3xx** - Redirection
  - 301: Moved Permanently
  - 302: Found (Temporary Redirect)
  - 304: Not Modified
- **4xx** - Client Error
  - 400: Bad Request
  - 401: Unauthorized
  - 403: Forbidden
  - 404: Not Found
  - 429: Too Many Requests
- **5xx** - Server Error
  - 500: Internal Server Error
  - 502: Bad Gateway
  - 503: Service Unavailable

### HTTP Headers

#### Common Request Headers
- `Accept`: Media types the client can process
- `Authorization`: Authentication credentials
- `Content-Type`: Media type of the request body
- `User-Agent`: Client application info
- `Origin`: Where the request was initiated from
- `Accept-Language`: Preferred languages

#### Common Response Headers
- `Content-Type`: Media type of response
- `Content-Length`: Size of response body
- `Cache-Control`: Caching directives
- `Set-Cookie`: Set cookies on client
- `Access-Control-Allow-Origin`: CORS permissions

## CRUD Operations

CRUD (Create, Read, Update, Delete) is a paradigm that describes the four basic operations for persistent storage:

### Mapping CRUD to HTTP Methods
| CRUD Operation | HTTP Method | Purpose |
|---------------|-------------|---------|
| **Create** | POST | Create a new resource |
| **Read** | GET | Retrieve a resource or collection |
| **Update** | PUT/PATCH | Update an existing resource (full/partial) |
| **Delete** | DELETE | Remove a resource |

### CRUD API Endpoints Example (Users Resource)
```
# Create
POST /users
Body: { "name": "Jane Doe", "email": "jane@example.com" }

# Read (all users)
GET /users

# Read (single user)
GET /users/42

# Update (full replacement)
PUT /users/42
Body: { "name": "Jane Smith", "email": "jane.smith@example.com" }

# Update (partial)
PATCH /users/42
Body: { "email": "jane.smith@example.com" }

# Delete
DELETE /users/42
```

### CRUD Response Patterns
| Operation | Typical Status Code | Response Body |
|-----------|---------------------|---------------|
| Create | 201 Created | Created resource |
| Read | 200 OK | Requested resource(s) |
| Update | 200 OK or 204 No Content | Updated resource or empty |
| Delete | 204 No Content or 200 OK | Empty or success message |

## API Concepts

### API Types
- **REST** (Representational State Transfer)
  - Resource-based
  - Stateless
  - Uses standard HTTP methods
  - Typically returns JSON/XML
- **GraphQL**
  - Query language for APIs
  - Single endpoint
  - Client specifies exactly what data it needs
- **SOAP** (Simple Object Access Protocol)
  - Protocol-based
  - Uses XML exclusively
  - More rigid structure
- **gRPC**
  - Uses Protocol Buffers
  - HTTP/2 based
  - High performance, binary communication

### RESTful API Design Principles
- Use nouns for endpoints (resources), not verbs
- Use HTTP methods to indicate operations
- Hierarchical resource paths
- Stateless interactions
- Use proper status codes
- Consistent naming conventions

### Example RESTful URL Patterns
```
GET    /articles        # List all articles
POST   /articles        # Create a new article
GET    /articles/42     # Get article with ID 42
PUT    /articles/42     # Update article with ID 42
DELETE /articles/42     # Delete article with ID 42
GET    /articles/42/comments  # Get all comments for article 42
```

## Authentication & Security

### Authentication Methods
- **API Keys**: Simple key sent with requests
- **OAuth 2.0**: Token-based authorization framework
- **JWT** (JSON Web Tokens): Self-contained tokens
- **Basic Auth**: Base64 encoded username:password
- **Bearer Token**: Token sent in Authorization header

### Security Best Practices
- Always use HTTPS (TLS/SSL)
- Validate all inputs
- Implement rate limiting
- Use proper authentication
- Don't expose sensitive information in URLs
- Set proper CORS headers
- Monitor for suspicious activity

## Request & Response Formats

### JSON Example
```json
{
  "id": 42,
  "title": "API Basics",
  "author": {
    "name": "Jane Smith",
    "email": "jane@example.com"
  },
  "tags": ["api", "http", "rest"]
}
```

### URL Parameters
- **Path Parameters**: `/users/{id}`
- **Query Parameters**: `/users?role=admin&status=active`

### Common Content Types
- `application/json`: JSON data
- `application/xml`: XML data
- `application/x-www-form-urlencoded`: Form data
- `multipart/form-data`: File uploads
- `text/plain`: Plain text

## Tools for Working with APIs

### API Testing Tools
- **Postman**: Full API development environment
- **cURL**: Command-line tool for HTTP requests
- **Insomnia**: API client for testing requests
- **HTTPie**: Command-line HTTP client

### Example cURL Commands
```bash
# Basic GET request
curl https://api.example.com/users

# POST with JSON data
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John", "email": "john@example.com"}'

# PUT with authentication
curl -X PUT https://api.example.com/users/42 \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "John Updated"}'
```

## API Documentation
- **OpenAPI/Swagger**: Industry standard for REST API documentation
- **API Blueprint**: Markdown-based API description
- **Postman Collections**: Shareable API request collections
- **GraphQL Schema**: Self-documenting API structure

## Error Handling
- Use appropriate status codes
- Return consistent error formats
- Include helpful error messages
- Add error codes for programmatic handling

### Error Response Example
```json
{
  "status": 400,
  "error": "Bad Request",
  "message": "Email is required",
  "code": "MISSING_FIELD",
  "timestamp": "2023-06-10T15:00:00Z"
}
```

## Rate Limiting
- Prevents API abuse
- Common headers:
  - `X-RateLimit-Limit`: Requests allowed in period
  - `X-RateLimit-Remaining`: Requests remaining in period
  - `X-RateLimit-Reset`: Time when limit resets
  - `Retry-After`: Seconds to wait before retrying

## CORS (Cross-Origin Resource Sharing)
- Security feature that restricts cross-origin HTTP requests
- Key headers:
  - `Access-Control-Allow-Origin`
  - `Access-Control-Allow-Methods`
  - `Access-Control-Allow-Headers`
  - `Access-Control-Max-Age`



## Best Practices
- Design with consumers in mind
- Use versioning for API changes
- Keep endpoints focused and consistent
- Implement pagination for large collections
- Provide comprehensive documentation
- Follow established conventions
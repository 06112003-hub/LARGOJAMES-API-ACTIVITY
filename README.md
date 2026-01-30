# LARGOJAMES-API-ACTIVITY - RESTful API Activity

## Best Practices Implementation

### 1. Environment Variables
**Question:** Why did we put `BASE_URI` in `.env` instead of hardcoding it?

**Answer:** Using `.env` allows flexibility across different environments (development, staging, production). The same code can run with different configurations without code changes. This keeps sensitive data out of version control and makes deployment easier.

### 2. Resource Modeling
**Question:** Why did we use plural nouns (e.g., `/transactions`) for our routes?

**Answer:** RESTful API conventions use plural nouns because routes represent collections of resources. `/transactions` represents the collection of all transactions, while `/transactions/:id` represents a specific transaction. This follows REST standards and makes the API intuitive.

### 3. Status Codes
**Question:** When do we use `201 Created` vs `200 OK`?

**Answer:** 
- `201 Created` - Use when a POST request successfully creates a new resource
- `200 OK` - Use for successful GET, PUT, or DELETE requests that don't create new resources

**Question:** Why is it important to return `404` instead of just an empty array or a generic error?

**Answer:** `404 Not Found` explicitly tells the client that the requested resource doesn't exist. An empty array might suggest the query was successful but had no results. Using proper status codes helps clients understand what happened and handle errors appropriately.

### 4. Transaction Endpoints

**GET /api/v1/transactions** - Retrieve all transactions
```json
{
  "status": 200,
  "message": "Retrieved transactions successfully",
  "data": [
    {
      "id": 1,
      "description": "Starbucks Coffee",
      "amount": 5.5,
      "type": "expense",
      "date": "2023-10-01"
    }
  ]
}
```

**GET /api/v1/transactions?type=income** - Filter transactions
```json
{
  "status": 200,
  "message": "Retrieved transactions successfully",
  "data": [
    {
      "id": 2,
      "description": "Freelance Client Payment",
      "amount": 500.0,
      "type": "income",
      "date": "2023-10-02"
    }
  ]
}
```

**GET /api/v1/transactions** (No results)
```json
{
  "status": 404,
  "message": "No transactions found matching the criteria."
}
```

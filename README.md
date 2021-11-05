# GraphQL Apollo tutorial
Using an API for a fake ski resort.

## Commands
Start:
```
npm start
```

Browse:
```
http://localhost:4000
```

## Query examples
Lift count:
```
query {
  LiftCount
}
```

All lifts:
```
query {
  allLifts
}
```

All trails:
```
query {
	allTrails {
    name
  }
}
```

Trail status:
```
query {
  trailCount(status:OPEN)
}
```
```
query {
  trailCount(status:CLOSED)
}
```

Train by ID:
```
query {
	Trail(id: "blue-bird") {
    name
  }
}
```

## Curl examples
```
curl -X POST \
     -H "Content-Type: application/json" \
     --data '{ "query": "{allLifts{name}}" }' \
     http://localhost:4000/
```

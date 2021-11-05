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

## Curl examples
```
curl -X POST \
     -H "Content-Type: application/json" \
     --data '{ "query": "{allLifts{name}}" }' \
     http://localhost:4000/
```

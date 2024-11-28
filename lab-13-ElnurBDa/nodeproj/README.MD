# NodeJs proj for Gatling

## Preparation

### Dependencies

```bash
npm i
```

### Mock Data

```bash
node data/mock.js # generate
node data/inserter.js # insert to DB
```

## Run test

```bash
# in one terminal
node server.js

# in another run tests, as they should run in parallel
npx gatling run --simulation updatebyid
npx gatling run --simulation updatebyname
```

## Analysis

[a](load_test_result_3_10000.md)

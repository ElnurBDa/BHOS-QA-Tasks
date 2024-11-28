# Tests

## Post

```js
================================================================================
2024-11-03 05:56:37 GMT                                       5s elapsed
---- Requests ------------------------------------------------------------------
> Global                                                   (OK=5856   KO=0     )
> Add Post                                                 (OK=5856   KO=0     )

---- Users ---------------------------------------------------------------------
[###########################################-------------------------------] 58%
          waiting: 0      / active: 4144   / done: 5856
================================================================================


================================================================================
2024-11-03 05:56:42 GMT                                      10s elapsed
---- Requests ------------------------------------------------------------------
> Global                                                   (OK=9433   KO=0     )
> Add Post                                                 (OK=9433   KO=0     )

---- Users ---------------------------------------------------------------------
[#####################################################################-----] 94%
          waiting: 0      / active: 567    / done: 9433
================================================================================


================================================================================
2024-11-03 05:56:45 GMT                                      13s elapsed
---- Requests ------------------------------------------------------------------
> Global                                                   (OK=10000  KO=0     )
> Add Post                                                 (OK=10000  KO=0     )

---- Users ---------------------------------------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 10000
================================================================================

Parsing log file(s)...
Parsing log file(s) done in 0s.
Generating reports...

================================================================================
---- Global Information --------------------------------------------------------
> request count                                      10000 (OK=10000  KO=0     )
> min response time                                    231 (OK=231    KO=-     )
> max response time                                  12321 (OK=12321  KO=-     )
> mean response time                                  3971 (OK=3971   KO=-     )
> std deviation                                       2338 (OK=2338   KO=-     )
> response time 50th percentile                       3476 (OK=3475   KO=-     )
> response time 75th percentile                       5415 (OK=5411   KO=-     )
> response time 95th percentile                       9174 (OK=9174   KO=-     )
> response time 99th percentile                      12207 (OK=12207  KO=-     )
> mean requests/sec                                 714.29 (OK=714.29 KO=-     )
---- Response Time Distribution ------------------------------------------------
> t < 800 ms                                           296 (  2.96%)
> 800 ms <= t < 1200 ms                                422 (  4.22%)
> t >= 1200 ms                                        9282 ( 92.82%)
> failed                                                 0 (     0%)
================================================================================
```

## Postandref

```c
================================================================================
2024-11-03 05:57:13 GMT                                       5s elapsed
---- Requests ------------------------------------------------------------------
> Global                                                   (OK=3969   KO=0     )
> Add Post and Reference                                   (OK=3969   KO=0     )

---- Users ---------------------------------------------------------------------
[#############################---------------------------------------------] 39%
          waiting: 0      / active: 6031   / done: 3969
================================================================================


================================================================================
2024-11-03 05:57:18 GMT                                      10s elapsed
---- Requests ------------------------------------------------------------------
> Global                                                   (OK=9764   KO=0     )
> Add Post and Reference                                   (OK=9764   KO=0     )

---- Users ---------------------------------------------------------------------
[########################################################################--] 97%
          waiting: 0      / active: 236    / done: 9764
================================================================================


================================================================================
2024-11-03 05:57:23 GMT                                      14s elapsed
---- Requests ------------------------------------------------------------------
> Global                                                   (OK=9764   KO=0     )
> Add Post and Reference                                   (OK=9764   KO=0     )

---- Users ---------------------------------------------------------------------
[########################################################################--] 97%
          waiting: 0      / active: 236    / done: 9764
================================================================================


================================================================================
2024-11-03 05:57:25 GMT                                      17s elapsed
---- Requests ------------------------------------------------------------------
> Global                                                   (OK=10000  KO=0     )
> Add Post and Reference                                   (OK=10000  KO=0     )

---- Users ---------------------------------------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 10000
================================================================================

Parsing log file(s)...
Parsing log file(s) done in 0s.
Generating reports...

================================================================================
---- Global Information --------------------------------------------------------
> request count                                      10000 (OK=10000  KO=0     )
> min response time                                    213 (OK=213    KO=-     )
> max response time                                  16148 (OK=16148  KO=-     )
> mean response time                                  5038 (OK=5038   KO=-     )
> std deviation                                       2878 (OK=2878   KO=-     )
> response time 50th percentile                       4669 (OK=4669   KO=-     )
> response time 75th percentile                       7469 (OK=7470   KO=-     )
> response time 95th percentile                       8692 (OK=8692   KO=-     )
> response time 99th percentile                      15264 (OK=15264  KO=-     )
> mean requests/sec                                 555.56 (OK=555.56 KO=-     )
---- Response Time Distribution ------------------------------------------------
> t < 800 ms                                           224 (  2.24%)
> 800 ms <= t < 1200 ms                                251 (  2.51%)
> t >= 1200 ms                                        9525 ( 95.25%)
> failed                                                 0 (     0%)
================================================================================
```

## Postwithref

```bash
================================================================================
2024-11-03 05:57:53 GMT                                       5s elapsed
---- Requests ------------------------------------------------------------------
> Global                                                   (OK=5222   KO=0     )
> Add Post with Reference                                  (OK=5222   KO=0     )

---- Users ---------------------------------------------------------------------
[######################################------------------------------------] 52%
          waiting: 0      / active: 4778   / done: 5222
================================================================================


================================================================================
2024-11-03 05:57:58 GMT                                       9s elapsed
---- Requests ------------------------------------------------------------------
> Global                                                   (OK=10000  KO=0     )
> Add Post with Reference                                  (OK=10000  KO=0     )

---- Users ---------------------------------------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 10000
================================================================================

Parsing log file(s)...
Parsing log file(s) done in 0s.
Generating reports...

================================================================================
---- Global Information --------------------------------------------------------
> request count                                      10000 (OK=10000  KO=0     )
> min response time                                    139 (OK=139    KO=-     )
> max response time                                   9240 (OK=9240   KO=-     )
> mean response time                                  3659 (OK=3659   KO=-     )
> std deviation                                       2101 (OK=2101   KO=-     )
> response time 50th percentile                       3616 (OK=3617   KO=-     )
> response time 75th percentile                       4764 (OK=4764   KO=-     )
> response time 95th percentile                       7947 (OK=7947   KO=-     )
> response time 99th percentile                       8532 (OK=8532   KO=-     )
> mean requests/sec                                   1000 (OK=1000   KO=-     )
---- Response Time Distribution ------------------------------------------------
> t < 800 ms                                           714 (  7.14%)
> 800 ms <= t < 1200 ms                                750 (   7.5%)
> t >= 1200 ms                                        8536 ( 85.36%)
> failed                                                 0 (     0%)
================================================================================
```

## Performance Conclusion

### **Best Performer: `/postwithref`**

- **Reason**: This endpoint had the lowest mean response time (3659 ms), fastest max response time (9240 ms), and best performance across all percentiles. This could be because the logic of this endpoint involves adding a reference link (likely a simple field in the table), which doesn't add as much overhead as other endpoints. The process seems relatively straightforward, resulting in faster execution.

### **Worst Performer: `/postandref`**

- **Reason**: This endpoint showed the highest mean response time (5038 ms), max response time (16,148 ms), and worst performance at the 99th percentile. The reason is likely due to the complexity of operations — it needs to insert a reference into `reference_table_3` and then retrieve its ID to insert into `posts_table_3`. This extra database operation (insert + lookup) introduces more overhead, resulting in slower performance.

### **Why `/post` performs better than `/postandref` but worse than `/postwithref`:**

- **`/post`** performs better than `/postandref` because it only needs to insert data into one table (simpler operation).
- **`/post`** is slower than `/postwithref` likely due to some backend logic differences or table structure differences, but it avoids the extra step of referencing another table like in `/postandref`.

### Key Factors Affecting Performance

1. **Database Operations**: Endpoints that involve multiple queries (like `/postandref`) will perform worse than those with simpler operations.
2. **I/O Overhead**: Fetching reference IDs before inserting data can increase overhead, as seen in the `/postandref` test.
3. **Concurrency**: High concurrency under load can cause higher response times, especially for endpoints with complex database interactions.

## Results

Can be found in index.html in the following folders: ![alt text](image.png)

## Hardware
RAM - 8GB
CPU - 4 cores - 11th Gen Intel(R) Core(TM) i3-1115G4 @ 3.00GHz

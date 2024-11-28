# Performance Test for 1000

## Hardware

```bash
OS: Arch Linux x86_64
Kernel: Linux 6.10.8-zen1-1-zen
CPU: 11th Gen Intel(R) Core(TM) i3-1115G4 (4) @ 4.10 GHz
Memory: 8GB
```

## Related Report

a PDF file:

[1000](1000.pdf)

and a html file in `1000-sim`.

## Result from CLI

```bash

================================================================================
2024-10-31 05:47:44 GMT                                       1s elapsed
---- Requests ------------------------------------------------------------------
> Global                                                   (OK=0      KO=1000  )
> Register User                                            (OK=0      KO=1000  )
---- Errors --------------------------------------------------------------------
> status.find.is(201), but actually found 500                      1000 (100.0%)

---- Users ---------------------------------------------------------------------
[##########################################################################]100%
          waiting: 0      / active: 0      / done: 1000
================================================================================

Parsing log file(s)...
Parsing log file(s) done in 0s.
Generating reports...

================================================================================
---- Global Information --------------------------------------------------------
> request count                                       1000 (OK=0      KO=1000  )
> min response time                                     64 (OK=-      KO=64    )
> max response time                                    433 (OK=-      KO=433   )
> mean response time                                   346 (OK=-      KO=346   )
> std deviation                                         98 (OK=-      KO=98    )
> response time 50th percentile                        391 (OK=-      KO=391   )
> response time 75th percentile                        409 (OK=-      KO=409   )
> response time 95th percentile                        426 (OK=-      KO=426   )
> response time 99th percentile                        429 (OK=-      KO=429   )
> mean requests/sec                                    500 (OK=-      KO=500   )
---- Response Time Distribution ------------------------------------------------
> t < 800 ms                                             0 (     0%)
> 800 ms <= t < 1200 ms                                  0 (     0%)
> t >= 1200 ms                                           0 (     0%)
> failed                                              1000 (   100%)
---- Errors --------------------------------------------------------------------
> status.find.is(201), but actually found 500                      1000 (100.0%)
================================================================================
```

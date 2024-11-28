var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9240",
        "ok": "9240",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3659",
        "ok": "3659",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2101",
        "ok": "2101",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3616",
        "ok": "3617",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4764",
        "ok": "4764",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7947",
        "ok": "7947",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8532",
        "ok": "8532",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 714,
    "percentage": 7.140000000000001
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 750,
    "percentage": 7.5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 8536,
    "percentage": 85.36
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1000",
        "ok": "1000",
        "ko": "-"
    }
},
contents: {
"req_add-post-with-r-98376082": {
        type: "REQUEST",
        name: "Add Post with Reference",
path: "Add Post with Reference",
pathFormatted: "req_add-post-with-r-98376082",
stats: {
    "name": "Add Post with Reference",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9240",
        "ok": "9240",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3659",
        "ok": "3659",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2101",
        "ok": "2101",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3616",
        "ok": "3617",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4764",
        "ok": "4764",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7947",
        "ok": "7947",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8532",
        "ok": "8532",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 714,
    "percentage": 7.140000000000001
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 750,
    "percentage": 7.5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 8536,
    "percentage": 85.36
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1000",
        "ok": "1000",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

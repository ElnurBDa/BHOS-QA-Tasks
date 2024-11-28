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
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "16148",
        "ok": "16148",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5038",
        "ok": "5038",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2878",
        "ok": "2878",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4669",
        "ok": "4669",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7469",
        "ok": "7470",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8692",
        "ok": "8692",
        "ko": "-"
    },
    "percentiles4": {
        "total": "15264",
        "ok": "15264",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 224,
    "percentage": 2.2399999999999998
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 251,
    "percentage": 2.5100000000000002
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9525,
    "percentage": 95.25
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "555.56",
        "ok": "555.56",
        "ko": "-"
    }
},
contents: {
"req_add-post-and-re--1813116223": {
        type: "REQUEST",
        name: "Add Post and Reference",
path: "Add Post and Reference",
pathFormatted: "req_add-post-and-re--1813116223",
stats: {
    "name": "Add Post and Reference",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "16148",
        "ok": "16148",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5038",
        "ok": "5038",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2878",
        "ok": "2878",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4668",
        "ok": "4668",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7469",
        "ok": "7470",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8692",
        "ok": "8692",
        "ko": "-"
    },
    "percentiles4": {
        "total": "15264",
        "ok": "15264",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 224,
    "percentage": 2.2399999999999998
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 251,
    "percentage": 2.5100000000000002
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9525,
    "percentage": 95.25
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "555.56",
        "ok": "555.56",
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

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
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "39588",
        "ok": "39588",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6470",
        "ok": "6470",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7191",
        "ok": "7191",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4622",
        "ok": "4622",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8216",
        "ok": "8225",
        "ko": "-"
    },
    "percentiles3": {
        "total": "20009",
        "ok": "20009",
        "ko": "-"
    },
    "percentiles4": {
        "total": "39521",
        "ok": "39521",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 362,
    "percentage": 3.62
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 379,
    "percentage": 3.7900000000000005
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9259,
    "percentage": 92.58999999999999
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "243.9",
        "ok": "243.9",
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
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "39588",
        "ok": "39588",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6470",
        "ok": "6470",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7191",
        "ok": "7191",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4622",
        "ok": "4626",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8221",
        "ok": "8223",
        "ko": "-"
    },
    "percentiles3": {
        "total": "20009",
        "ok": "20009",
        "ko": "-"
    },
    "percentiles4": {
        "total": "39521",
        "ok": "39521",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 362,
    "percentage": 3.62
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 379,
    "percentage": 3.7900000000000005
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9259,
    "percentage": 92.58999999999999
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "243.9",
        "ok": "243.9",
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

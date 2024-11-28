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
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "16572",
        "ok": "16572",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4197",
        "ok": "4197",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3534",
        "ok": "3534",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3040",
        "ok": "3042",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4850",
        "ok": "4848",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8768",
        "ok": "8768",
        "ko": "-"
    },
    "percentiles4": {
        "total": "16551",
        "ok": "16551",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 619,
    "percentage": 6.1899999999999995
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 669,
    "percentage": 6.69
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 8712,
    "percentage": 87.12
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
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "16572",
        "ok": "16572",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4197",
        "ok": "4197",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3534",
        "ok": "3534",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3042",
        "ok": "3042",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4852",
        "ok": "4852",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8768",
        "ok": "8768",
        "ko": "-"
    },
    "percentiles4": {
        "total": "16551",
        "ok": "16551",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 619,
    "percentage": 6.1899999999999995
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 669,
    "percentage": 6.69
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 8712,
    "percentage": 87.12
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

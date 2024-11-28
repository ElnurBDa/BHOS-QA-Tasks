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
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15111",
        "ok": "15111",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2998",
        "ok": "2998",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2058",
        "ok": "2058",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2832",
        "ok": "2834",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3953",
        "ok": "3953",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7848",
        "ok": "7848",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8255",
        "ok": "8255",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 896,
    "percentage": 8.959999999999999
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 450,
    "percentage": 4.5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 8654,
    "percentage": 86.53999999999999
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "588.24",
        "ok": "588.24",
        "ko": "-"
    }
},
contents: {
"req_add-post--1230428929": {
        type: "REQUEST",
        name: "Add Post",
path: "Add Post",
pathFormatted: "req_add-post--1230428929",
stats: {
    "name": "Add Post",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15111",
        "ok": "15111",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2998",
        "ok": "2998",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2058",
        "ok": "2058",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2834",
        "ok": "2834",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3953",
        "ok": "3953",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7848",
        "ok": "7848",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8255",
        "ok": "8255",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 896,
    "percentage": 8.959999999999999
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 450,
    "percentage": 4.5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 8654,
    "percentage": 86.53999999999999
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "588.24",
        "ok": "588.24",
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

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
        "total": "229",
        "ok": "229",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "31286",
        "ok": "31286",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4219",
        "ok": "4219",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3461",
        "ok": "3461",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3393",
        "ok": "3402",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4590",
        "ok": "4590",
        "ko": "-"
    },
    "percentiles3": {
        "total": "15814",
        "ok": "15814",
        "ko": "-"
    },
    "percentiles4": {
        "total": "15949",
        "ok": "15949",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 313,
    "percentage": 3.1300000000000003
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 382,
    "percentage": 3.82
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9305,
    "percentage": 93.05
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "303.03",
        "ok": "303.03",
        "ko": "-"
    }
},
contents: {
"req_updateaddressby-1777441085": {
        type: "REQUEST",
        name: "updateAddressByID",
path: "updateAddressByID",
pathFormatted: "req_updateaddressby-1777441085",
stats: {
    "name": "updateAddressByID",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "229",
        "ok": "229",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "31286",
        "ok": "31286",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4219",
        "ok": "4219",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3461",
        "ok": "3461",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3402",
        "ok": "3407",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4588",
        "ok": "4588",
        "ko": "-"
    },
    "percentiles3": {
        "total": "15814",
        "ok": "15814",
        "ko": "-"
    },
    "percentiles4": {
        "total": "15949",
        "ok": "15949",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 313,
    "percentage": 3.1300000000000003
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 382,
    "percentage": 3.82
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9305,
    "percentage": 93.05
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "303.03",
        "ok": "303.03",
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

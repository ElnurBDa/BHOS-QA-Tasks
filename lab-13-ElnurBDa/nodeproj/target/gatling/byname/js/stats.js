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
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8511",
        "ok": "8511",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3886",
        "ok": "3886",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2021",
        "ok": "2021",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3433",
        "ok": "3434",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4578",
        "ok": "4578",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8285",
        "ok": "8285",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8422",
        "ok": "8422",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 134,
    "percentage": 1.34
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 264,
    "percentage": 2.64
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9602,
    "percentage": 96.02000000000001
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
"req_updateaddressby--1275920819": {
        type: "REQUEST",
        name: "updateAddressByName",
path: "updateAddressByName",
pathFormatted: "req_updateaddressby--1275920819",
stats: {
    "name": "updateAddressByName",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8511",
        "ok": "8511",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3886",
        "ok": "3886",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2021",
        "ok": "2021",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3434",
        "ok": "3435",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4577",
        "ok": "4579",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8285",
        "ok": "8285",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8422",
        "ok": "8422",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 134,
    "percentage": 1.34
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 264,
    "percentage": 2.64
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9602,
    "percentage": 96.02000000000001
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

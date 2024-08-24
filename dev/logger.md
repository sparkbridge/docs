# 日志记录器


SparkBridge有统一的日志类来输出标准的控制台日志

``` js
const logger = spark.getLogger("example");

logger.info("这是正常日志信息");

logger.warn("这是警告日志信息");

logger.debug("这是调试日志信息");
````
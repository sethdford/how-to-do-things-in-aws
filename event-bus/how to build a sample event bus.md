
        Create a stream:
                “aws kinesis create-stream --stream-name test-stream --shard-count 1”
         Wait until the stream is active:
          “aws kinesis describe-stream --stream-name”
          Put some data on the stream similar to or exactly like
aws kinesis put-record --stream-name test-stream --partition-key test-application --data "{\"workItem\":{\"fileNumber\":\"W026938-02AUG16\",\"orgId\":1021,\"itemType\":\"Project Request\",\"status\":\"APRQ\",\"statusType\":\"P\",\"statusDate\":\"2016-08-02T18:47:23-0500\",\"suspenseStatus\":\"A\",\"splitStatus\":\"N\",\"memo\":\" \",\"amount\":0,\"currentQueue\":\"A045103\",\"currentNode\":\"Management\",\"nodeAccessGroup\":\"Management\",\"creatingOperator\":\"A045103\",\"nodeWhereCreated\":\"Management\",\"createDate\":\"2016-08-02T18:47:23-0500\",\"lastEvent\":\"ENTER\",\"lastEventDate\":\"2016-08-02T18:47:23-0500\",\"priorityNumber\":0,\"suspensionCount\":0,\"suspensionDuration\":0,\"queueType\":1,\"queueEnterTime\":\"2016-08-02T18:47:23-0500\",\"parentFileNumber\":0,\"nonCntrSuspensionCount\":0,\"nonCntrSuspensionDuration\":0,\"familyId\":26938080216,\"modOperId\":\"A045103\",\"noteCount\":0,\"parties\":[{\"partyNumber\":1,\"name\":\"ORIG\",\"taxReportingCode\":\" \",\"organizationName\":\"ACME\",\"accountNumber\":\"111\"}]},\"eventDetail\":{\"name\":\"CREATE_EVENT\",\"id\":142914,\"timestamp\":\"2016-08-02T18:47:23-0500\"}}"
         Get the shard iterator

         aws kinesis get-shard-iterator --shard-id shardId-000000000000 --shard-iterator-type TRIM_HORIZON --stream-name test-stream
         Get the data (remember to replace the --shard-iterator with the one from the prior call)
         aws kinesis get-records --shard-iterator AAAAAAAAAAE2SYHBy6ckbSJgyiTIiBnNyGQVj0c+Fxzd170cwiv4+Zd80dx/RZ2kElB/ECwvm+gt7v2TSrD1gwiYopY1fxv9YALNjptKwhkptv9WKQeoMwV51JEPrqzSFo+SDCLXiNElxoCsXYn6B6nAx8UgUL5jbW5tGWOiXGAbhpMcBvuzndHgdgv0j55QNkYKH54rt5ueRehlkv7oORMUhp5Gyxc/

         Base64 Decode the data response:

         Echo eyJ3b3JrSXRlbSI6eyJmaWxlTnVtYmVyIjoiVzAyNjkzOC0wMkFVRzE2Iiwib3JnSWQiOjEwMjEsIml0ZW1UeXBlIjoiUHJvamVjdCBSZXF1ZXN0Iiwic3RhdHVzIjoiQVBSUSIsInN0YXR1c1R5cGUiOiJQIiwic3RhdHVzRGF0ZSI6IjIwMTYtMDgtMDJUMTg6NDc6MjMtMDUwMCIsInN1c3BlbnNlU3RhdHVzIjoiQSIsInNwbGl0U3RhdHVzIjoiTiIsIm1lbW8iOiIgIiwiYW1vdW50IjowLCJjdXJyZW50UXVldWUiOiJBMDQ1MTAzIiwiY3VycmVudE5vZGUiOiJNYW5hZ2VtZW50Iiwibm9kZUFjY2Vzc0dyb3VwIjoiTWFuYWdlbWVudCIsImNyZWF0aW5nT3BlcmF0b3IiOiJBMDQ1MTAzIiwibm9kZVdoZXJlQ3JlYXRlZCI6Ik1hbmFnZW1lbnQiLCJjcmVhdGVEYXRlIjoiMjAxNi0wOC0wMlQxODo0NzoyMy0wNTAwIiwibGFzdEV2ZW50IjoiRU5URVIiLCJsYXN0RXZlbnREYXRlIjoiMjAxNi0wOC0wMlQxODo0NzoyMy0wNTAwIiwicHJpb3JpdHlOdW1iZXIiOjAsInN1c3BlbnNpb25Db3VudCI6MCwic3VzcGVuc2lvbkR1cmF0aW9uIjowLCJxdWV1ZVR5cGUiOjEsInF1ZXVlRW50ZXJUaW1lIjoiMjAxNi0wOC0wMlQxODo0NzoyMy0wNTAwIiwicGFyZW50RmlsZU51bWJlciI6MCwibm9uQ250clN1c3BlbnNpb25Db3VudCI6MCwibm9uQ250clN1c3BlbnNpb25EdXJhdGlvbiI6MCwiZmFtaWx5SWQiOjI2OTM4MDgwMjE2LCJtb2RPcGVySWQiOiJBMDQ1MTAzIiwibm90ZUNvdW50IjowLCJwYXJ0aWVzIjpbeyJwYXJ0eU51bWJlciI6MSwibmFtZSI6Ik9SSUciLCJ0YXhSZXBvcnRpbmdDb2RlIjoiICIsIm9yZ2FuaXphdGlvbk5hbWUiOiJBQ01FIiwiYWNjb3VudE51bWJlciI6IjExMSJ9XX0sImV2ZW50RGV0YWlsIjp7Im5hbWUiOiJDUkVBVEVfRVZFTlQiLCJpZCI6MTQyOTE0LCJ0aW1lc3RhbXAiOiIyMDE2LTA4LTAyVDE4OjQ3OjIzLTA1MDAifX0= | base64 --decode

 

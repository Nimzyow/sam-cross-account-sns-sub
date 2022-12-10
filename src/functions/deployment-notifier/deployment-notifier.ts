import { SNSEvent } from "aws-lambda"

import axios from "axios"

export const lambdaHandler = async (event: SNSEvent) => {
    const { slackWebHookUrl } = process.env

    for (const record of event.Records) {
        //comment
        const message = record.Sns.Message
        await axios.post(
            slackWebHookUrl as string,
            {
                text: message.toLowerCase().includes("started")
                    ? Array(15).fill(":stopwatch:").join("") + "\n" + message
                    : message.toLowerCase().includes("succeed")
                    ? message + "\n" + Array(15).fill(":white_check_mark:").join("")
                    : message + "\n" + Array(15).fill(":x:").join(""),
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
    }
}

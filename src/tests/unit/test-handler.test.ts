import { lambdaHandler } from "../../deployment-notifier"
import axios from "axios"

jest.mock("axios", () => ({
    post: jest.fn(),
    get: jest.fn(),
}))

describe("deployment-notifier", () => {
    it("should post to slack webhook", async () => {
        const event = {
            Records: [
                {
                    EventSource: "aws:sns",
                    EventVersion: "1.0",
                    EventSubscriptionArn:
                        "arn:aws:sns:eu-west-1:312e234324plify-d3odav7a703im0_production:01b6a660-187e-4f9b-a6d1-2e544927346a",
                    Sns: {
                        Type: "Notification",
                        MessageId: "503cee26-5a9c-5cfd-bfc9-b5f941b0232b",
                        TopicArn: "arn:aws:sns:eu-w234324324324327963:amplify-d3odav7a703im0_production",
                        Subject: "null",
                        Message:
                            '"Build notification from the AWS Amplify Console for app: https://stawe234324234a703im0.amplifyapp.com/. Your build status is STARTED. Go to https://console.aws.amazon.com/amplify/home?region=eu-west-1#d3odav7a703im0/staging/222 to view details on your build. "',
                        Timestamp: "2022-11-04T13:51:40.269Z",
                        SignatureVersion: "1",
                        Signature:
                            "csMQtNVmadimDypQxNYOj+0gT8klqNUOjAST8sf8h9XjHaB/MQyXdusM17+BimYOqIVfweDId94iVjgV4eC9t+HjUTSvlvvSF5zosqAjhr63otitSdmeG/N5Zj9zKWAMj1xjUygceZxSfML6EQO9vyGwwkXeK9BRDTpAZjvILvn1RPEXd9mzUXQ7kCq48fBDlWBfPQ7GRaa1ZZL/K55xS2WEbNs0vk3g3y/IMV5pLXe/W5zwWxz0XWrw+2q4FLOqBUeMQYEsm1NoPOw2Jx0dH+ONo8FR0/BsyOa+q/aaZEonnujLEskktpJXJVqTo7TCsd2NamtopCbLv2rihCBg+A==",
                        SigningCertUrl:
                            "https://sns.eu-west-1.amazonaws.com/SimpleNotificationService-56e67fcb413zxcxz5d385.pem",
                        UnsubscribeUrl:
                            "https://sns.eu-west-1.amazonaws.com/?Action=Unsubscribe&Subscri232332eu-west-1:3213e3eawd:amplify-dzxczxcxzm0_production:01b6azxcasa6d1-2e544927346a",
                        MessageAttributes: {},
                    },
                },
            ],
        }

        await lambdaHandler(event)

        expect(axios.post).toHaveBeenCalledWith(
            "slackWebHookUrl",
            {
                text:
                    Array(15).fill(":stopwatch:").join("") +
                    "\n" +
                    "Build notification from the AWS Amplify Console for app: https://staging.ƒdasd40.amplifyapp.com/. Your build status is STARTED. Go to https://console.aws.amazon.com/amplify/home?region=eu-west-1#d3odav7a703im0/staging/222 to view details on your build. ",
            },
            { headers: { "Content-Type": "application/json" } }
        )
        expect(axios.get).not.toBeCalled()
    })
    it("should post to slack webhook with production webhook url", async () => {
        const event = {
            Records: [
                {
                    EventSource: "aws:sns",
                    EventVersion: "1.0",
                    EventSubscriptionArn:
                        "arn:aws:sns:eu-west-1:315046697963:amplifasdsa03im0_production:0asdasd6a660-187e-4f9b-a6d1-2e544927346a",
                    Sns: {
                        Type: "Notification",
                        MessageId: "503cee26-5a9c-5cfd-bfc9-b5f941b0232b",
                        TopicArn: "arn:aws:sns:eu-west-1:315046697963:amplify-d3odav7a703im0_production",
                        Subject: "null",
                        Message:
                            '"Build notification from the AWS Amplify Console for app: https://master.d3asdasddasdsadassd asdasplifyapp.com/. Your build status is SUCCEED. Go to https://console.aws.amazon.com/amplify/home?region=eu-west-1#d3odav7a703im0/master/222 to view details on your build. "',
                        Timestamp: "2022-11-04T13:51:40.269Z",
                        SignatureVersion: "1",
                        Signature:
                            "csMQtNVmadimDypQxNYOj+0gT8klqNUOjAST8sf8h9XjHaB/MQyXdusM17+BimYOqIVfweDId94iVjgV4eC9t+HjUTSvlvvSF5zosqAjhr63otitSdmeG/N5Zj9zKWAMj1xjUygceZxSfML6EQO9vyGwwkXeK9BRDTpAZjvILvn1RPEXd9mzUXQ7kCq48fBDlWBfPQ7GRaa1ZZL/K55xS2WEbNs0vk3g3y/IMV5pLXe/W5zwWxz0XWrw+2q4FLOqBUeMQYEsm1NoPOw2Jx0dH+ONo8FR0/BsyOa+q/aaZEonnujLEskktpJXJVqTo7TCsd2NamtopCbLv2rihCBg+A==",
                        SigningCertUrl:
                            "https://sns.eu-west-1.amazonaws.com/SimpleNotificationService-56e67fcb41f6fec09b0196692625d385.pem",
                        UnsubscribeUrl:
                            "https://sns.eu-west-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:eu-west-1:32et54r:amplify-d3odav7a703im0_production:01b6a660-187e-4f9b-a6d1-2e544927346a",
                        MessageAttributes: {},
                    },
                },
            ],
        }

        await lambdaHandler(event)

        expect(axios.post).toHaveBeenCalledWith(
            "slackWebHookUrl",
            {
                text:
                    "Build notification from the AWS Amplify Console for app: https://master.d3oasdasdasdasdsad3im0.amplifyapp.com/. Your build status is SUCCEED. Go to https://console.aws.amazon.com/amplify/home?region=eu-west-1#d3odav7a703im0/master/222 to view details on your build. " +
                    "\n" +
                    Array(15).fill(":white_check_mark:").join(""),
            },
            { headers: { "Content-Type": "application/json" } }
        )
        expect(axios.get).not.toBeCalled()
    })
})

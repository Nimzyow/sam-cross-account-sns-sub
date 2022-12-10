# README

## What is this repository for?

SAM templates are wonderful!

This is to demonstrate how you can enable cross account subscription to an SNS Topic.
Please refer to the architectural diagram in docs/architecture.png

This assumes that 3 topics have been created in Account A and Lambda functions in Account B,C,D want to subscribe to topics in Account A
<br/>
<br/>

<table>
    <caption><h2 >Account A</h2></caption>
    <tr>
        <th>SNS Topic A</th>
        <th>SNS Topic B</th>
        <th>SNS Topic C</th>
    </tr>
    <tr>
        <td>Sub to Topic<br/><strong>Account B</strong></td>
        <td>Sub to Topic<br/><strong>Account C</strong></td>
        <td>Sub to Topic<br/><strong>Account D</strong></td>
    </tr>
</table>

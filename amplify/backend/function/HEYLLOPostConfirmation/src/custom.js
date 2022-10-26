
const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();

const tablename = process.env.USERTABLE;
exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger

  if (!event?.request?.userAttributes?.sub) {
    console.log('NO SUB CREATED')
    return
  }

  const userItem = {
    __typename: { S: 'User' },
    _lastChangedAt: { N: timestamp.toString() },
    _version: { N: "1" },
    updatedAt: { S: now.toISOString() },
    createdAt: { S: now.toISOString() },
    name: { S: event.request.userAttributes.email },
    id: { S: event.request.userAttributes.sub },
  }

  const params = {
    Item: userItem,
    TableName: tablename
  }


  //save user to DynamoDB
  try {
    ddb.putItem(params).promise();
  } catch (e) {
    console.log(e)
  }
};

